// src/api/notify.ts
import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface EmailRequest {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export default async function handler(req: Request<{}, {}, EmailRequest>, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { to, subject, text, html } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
      html,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}