// src/server.ts

import dotenv from "dotenv";
import cors from "cors";
import express from "express";

import { EmailService } from "./services/emailService";
import { AppointmentData } from "./types/email";
import os from "os";

declare module "http" {
  interface IncomingMessage {
    rawBody?: Buffer;
  }
}

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(
  express.urlencoded({
    extended: true,
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

const isDevelopment = process.env.NODE_ENV === "development";

if (isDevelopment) {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`, {
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  });
}

// Initialize email service
const emailService = new EmailService();

// Verify email service connection on startup
(async () => {
  try {
    const isVerified = await emailService.verifyConnection();
    if (isVerified) {
      console.log("Email service connection verified successfully");
    } else {
      console.error("Email service connection verification failed");
    }
  } catch (error) {
    console.error("Error verifying email service connection:", error);
  }
})();

// Store appointments in memory (replace with database in production)
let appointments: AppointmentData[] = [];

// API Routes
app.get("/api/appointments", (req, res) => {
  try {
    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

app.post("/api/appointments", async (req, res) => {
  try {
    console.log("Received appointment request:", {
      headers: req.headers,
      body: req.body,
    });

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "companyName",
      "date",
      "time",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: `Missing required field: ${field}`,
          details: `The ${field} field is required for creating an appointment.`,
        });
      }
    }

    // Sanitize and normalize the input data
    const appointmentData: AppointmentData = {
      id: Date.now(),
      name: String(req.body.name || "").trim(),
      email: String(req.body.email || "")
        .trim()
        .toLowerCase(),
      phone: String(req.body.phone || "").trim(),
      companyName: String(req.body.companyName || "").trim(),
      companySize: String(req.body.companySize || "").trim(), // Added this line
      date: String(req.body.date || "").trim(),
      time: String(req.body.time || "").trim(),
      services: Array.isArray(req.body.services)
        ? req.body.services
        : typeof req.body.services === "string"
        ? JSON.parse(req.body.services)
        : [],
      status: "pending",
    };

    console.log("Processed appointment data:", appointmentData);

    // Add appointment to storage
    appointments.push(appointmentData);

    // Send confirmation email
    try {
      console.log("Attempting to send confirmation email...");
      const emailSuccess = await emailService.sendAppointmentConfirmation({
        name: appointmentData.name,
        email: appointmentData.email,
        date: appointmentData.date,
        time: appointmentData.time,
        companyName: appointmentData.companyName,
        services: appointmentData.services,
      });

      console.log("Email sending result:", emailSuccess);

      res.status(201).json({
        appointment: appointmentData,
        emailSent: emailSuccess,
      });
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      // Still return success but indicate email failure
      res.status(201).json({
        appointment: appointmentData,
        emailSent: false,
        emailError:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : undefined,
      });
    }
  } catch (error) {
    console.error("Error processing appointment:", error);
    res.status(500).json({
      error: "Failed to process appointment",
      details:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
});

// Update appointment status
app.patch("/api/appointments/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const appointment = appointments.find((apt) => apt.id === Number(id));
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    appointment.status = status;
    res.json(appointment);
  } catch (error) {
    console.error("Error updating appointment:", error);
    res.status(500).json({ error: "Failed to update appointment" });
  }
});

// Delete appointment
app.delete("/api/appointments/:id", (req, res) => {
  try {
    const { id } = req.params;
    appointments = appointments.filter((apt) => apt.id !== Number(id));
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({ error: "Failed to delete appointment" });
  }
});

// Clear all appointments (for testing)
app.delete("/api/appointments", (req, res) => {
  try {
    appointments = [];
    res.status(200).json({ message: "All appointments cleared" });
  } catch (error) {
    console.error("Error clearing appointments:", error);
    res.status(500).json({ error: "Failed to clear appointments" });
  }
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const networkInterfaces = os.networkInterfaces();
  const localIp = networkInterfaces["Wi-Fi"]?.find(
    (details) => details.family === "IPv4"
  )?.address;
  console.log(`Server running on port ${PORT}`);
  if (localIp) {
    console.log(`Accessible at http://${localIp}:${PORT}`);
  }
});
