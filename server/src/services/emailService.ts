// src/services/emailService.ts
import nodemailer from "nodemailer";

interface EmailOptions {
  subject: string;
  html: string;
  to?: string;
  text?: string; // Plain text version for better mobile compatibility
}

export class EmailService {
  private transporter: nodemailer.Transporter;
  private readonly defaultToEmail: string = "info@lumi-blue.com";
  private readonly fromEmail: string =
    process.env.EMAIL_FROM || "info@lumi-blue.com";

  constructor() {
    console.log("Email Service Configuration:", {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      user: process.env.EMAIL_USER,
      from: this.fromEmail,
    });

    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // smtp.hostinger.com
      port: parseInt(process.env.EMAIL_PORT || "465"), // 465
      secure: process.env.EMAIL_SECURE === "true", // true
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Changed from EMAIL_APP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false, // do not fail on invalid certs
      },
      debug: true, // Add debug mode
      logger: true, // Add logging
    });
  }

  async verifyConnection(): Promise<boolean> {
    try {
      const verification = await this.transporter.verify();
      console.log("Transporter verification result:", verification);
      return true;
    } catch (error) {
      console.error("Email service connection failed:", error);
      return false;
    }
  }

  async sendEmail({ subject, html, to, text }: EmailOptions): Promise<boolean> {
    try {
      console.log("Attempting to send email to:", to);

      const mailOptions = {
        from: this.fromEmail,
        to: to || this.defaultToEmail,
        subject,
        html,
        text: text || this.convertHtmlToPlainText(html),
      };

      console.log("Mail options:", mailOptions);

      const result = await this.transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", result.messageId);
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      if (error instanceof Error && "response" in error) {
        console.error("SMTP Response:", error.response);
      }
      return false;
    }
  }

  async sendAppointmentConfirmation(appointmentData: {
    name: string;
    email: string;
    date: string;
    time: string;
    companyName: string;
    services: string[];
  }): Promise<boolean> {
    console.log("Sending appointment confirmation for:", appointmentData);

    const subject = "Appointment Confirmation - Lumi Blue";
    const html = this.generateAppointmentEmail(appointmentData);
    const text = this.generatePlainTextAppointmentEmail(appointmentData);

    // Send to both the client and your business email
    try {
      // Send to client
      const clientResult = await this.sendEmail({
        subject,
        html,
        text,
        to: appointmentData.email,
      });

      if (!clientResult) {
        console.error("Failed to send client email");
        return false;
      }

      // Send to business
      const businessResult = await this.sendEmail({
        subject: `New Appointment: ${appointmentData.name}`,
        html,
        text,
        to: this.defaultToEmail,
      });

      if (!businessResult) {
        console.error("Failed to send business email");
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error in sendAppointmentConfirmation:", error);
      return false;
    }
  }

  private generateAppointmentEmail(data: {
    name: string;
    date: string;
    time: string;
    companyName: string;
    services: string[];
  }): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Appointment Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="https://lumi-blue.com/logo.png" alt="Lumi Blue" style="max-width: 200px; height: auto;">
            </div>
            <h2 style="color: #5D4A82; margin-bottom: 20px;">Appointment Confirmation</h2>
            <p>Dear ${data.name},</p>
            <p>Thank you for scheduling an appointment with Lumi Blue. We're looking forward to meeting with you.</p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #5D4A82; margin-top: 0;">Appointment Details:</h3>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
              <p><strong>Company:</strong> ${data.companyName}</p>
              <p><strong>Selected Services:</strong> ${data.services.join(
                ", "
              )}</p>
            </div>
            
            <p>If you need to make any changes to your appointment or have any questions, please don't hesitate to contact us at info@lumi-blue.com or call us.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666;">
              <p>Best regards,<br>The Lumi Blue Team</p>
              <p style="font-size: 12px;">
                T: +971 52 458 4584<br>
                E: info@lumi-blue.com<br>
                W: www.lumi-blue.com
              </p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  private generatePlainTextAppointmentEmail(data: {
    name: string;
    date: string;
    time: string;
    companyName: string;
    services: string[];
  }): string {
    return `
Appointment Confirmation - Lumi Blue

Dear ${data.name},

Thank you for scheduling an appointment with Lumi Blue. We're looking forward to meeting with you.

Appointment Details:
-------------------
Date: ${data.date}
Time: ${data.time}
Company: ${data.companyName}
Selected Services: ${data.services.join(", ")}

If you need to make any changes to your appointment or have any questions, please don't hesitate to contact us at info@lumi-blue.com or call us.

Best regards,
The Lumi Blue Team

Contact Information:
T: +971 52 458 4584
E: info@lumi-blue.com
W: www.lumi-blue.com
    `;
  }

  private convertHtmlToPlainText(html: string): string {
    // Simple HTML to plain text conversion
    return html
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/&nbsp;/g, " ") // Replace &nbsp; with space
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .trim();
  }
}

export const emailService = new EmailService();
