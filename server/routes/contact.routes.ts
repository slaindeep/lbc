import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Email configuration using Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Email to company
    const companyMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // sends to info@lumi-blue.com
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Thank you for contacting Luminous Bluewaters Consultancy",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p>Here's a copy of your message:</p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>Luminous Bluewaters Consultancy</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
