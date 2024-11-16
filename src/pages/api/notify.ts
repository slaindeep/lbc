// src/api/notify.ts
import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface EmailRequest {
  to: string;
  subject: string;
  html: string;
}

export default async function handler(
  req: Request<{}, {}, EmailRequest>,
  res: Response
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { subject, html } = req.body;

    // Create mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "noreply@lumi-blue.com",
      to: "info@lumi-blue.com", // Always send to this email
      subject,
      html,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
