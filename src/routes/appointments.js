// src/server/routes/appointments.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

router.post("/schedule", async (req, res) => {
  try {
    const { contactInfo, appointmentTime, companySize, services } = req.body;

    // Format email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5D4A82;">New Consultation Request</h2>
        
        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #5D4A82; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${contactInfo.name}</p>
          <p><strong>Email:</strong> ${contactInfo.email}</p>
          <p><strong>Phone:</strong> ${contactInfo.phone}</p>
          <p><strong>Company:</strong> ${contactInfo.companyName}</p>
        </div>

        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #5D4A82; margin-top: 0;">Appointment Details</h3>
          <p><strong>Date:</strong> ${new Date(
            appointmentTime
          ).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${new Date(
            appointmentTime
          ).toLocaleTimeString()}</p>
          <p><strong>Company Size:</strong> ${companySize}</p>
          <p><strong>Services Requested:</strong> ${services?.join(", ")}</p>
        </div>

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
    console.error("Appointment scheduling error:", error);
    res.status(500).json({
      message: "Failed to schedule appointment",
      error: error.message,
    });
  }
});

module.exports = router;
