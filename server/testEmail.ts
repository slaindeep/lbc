import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const sendTestEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || "noreply@lumi-blue.com",
      to: "info@lumi-blue.com", // Replace with your email for testing
      subject: "Test Email",
      text: "This is a test email.",
    });
    console.log("Test email sent:", info.response);
  } catch (error) {
    console.error("Error sending test email:", error);
  }
};

sendTestEmail();
