// server/src/testEmail.ts

import dotenv from "dotenv";
import { EmailService } from "./services/emailService";

// Load environment variables
dotenv.config();

async function testEmail() {
  console.log("Starting email test...");

  // Log environment variables (without password)
  console.log("Environment variables:", {
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_SECURE: process.env.EMAIL_SECURE,
  });

  const emailService = new EmailService();

  try {
    // First verify the connection
    console.log("Verifying email connection...");
    const isVerified = await emailService.verifyConnection();

    if (!isVerified) {
      throw new Error("Email service verification failed");
    }

    console.log("Connection verified, sending test email...");

    // Send test email
    const result = await emailService.sendEmail({
      to: "sandeeep.vasudevan@gmail.com", // Use your personal email for testing
      subject: "Test Email from Lumi Blue",
      html: "<h1>Test Email</h1><p>This is a test email from the Lumi Blue appointment system.</p>",
      text: "Test Email\n\nThis is a test email from the Lumi Blue appointment system.",
    });

    console.log("Email test result:", result);
  } catch (error) {
    console.error("Error sending test email:", error);
  }
}

testEmail();
