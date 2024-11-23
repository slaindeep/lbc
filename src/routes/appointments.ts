// server/routes/appointments.routes.ts
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Error configuring email transporter:", error);
  } else {
    console.log("Email transporter configured successfully");
  }
});

router.post("/schedule", async (req, res) => {
  const { contactInfo, appointmentTime, companySize, services } = req.body;

  const emailHtml = `
    <div>
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${contactInfo.name}</p>
      <p><strong>Email:</strong> ${contactInfo.email}</p>
      <p><strong>Phone:</strong> ${contactInfo.phone}</p>
      <p><strong>Appointment Time:</strong> ${appointmentTime}</p>
      <p><strong>Company Size:</strong> ${companySize}</p>
      <p><strong>Services:</strong> ${services.join(", ")}</p>
      ${
        contactInfo.message
          ? `
          <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5D4A82; margin-top: 0;">Additional Message</h3>
            <p>${contactInfo.message}</p>
          </div>
        `
          : ""
      }
    </div>
  `;

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "noreply@lumi-blue.com",
      to: "info@lumi-blue.com",
      subject: `New Consultation Request from ${contactInfo.name}`,
      html: emailHtml,
    });

    // Log for testing
    console.log("Email sent successfully");

    res.status(200).json({
      message: "Appointment scheduled successfully",
      appointment: {
        contactInfo,
        appointmentTime,
        companySize,
        services,
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to schedule appointment and send email" });
  }
});

export default router;
