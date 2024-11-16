// src/services/emailService.ts
import nodemailer from "nodemailer";

interface EmailOptions {
  subject: string;
  html: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // Use App Password from Google
      },
    });
  }

  async sendEmail({ subject, html }: EmailOptions): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_FROM || "noreply@lumi-blue.com",
        to: "info@lumi-blue.com",
        subject,
        html,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Failed to send email");
    }
  }
}

export const emailService = new EmailService();
