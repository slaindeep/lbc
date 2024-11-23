// src/utils/emailService.ts
import axios from "axios";

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (emailData: EmailData) => {
  try {
    // Replace with your email service API endpoint
    const response = await axios.post("/api/send-email", emailData);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export const generateCustomerConfirmationEmail = (appointmentData: {
  name: string;
  date: string;
  time: string;
  services: string[];
  companyName: string;
}) => {
  const { name, date, time, services, companyName } = appointmentData;

  return {
    subject: "Appointment Confirmation",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #5D4A82; margin-bottom: 20px;">Appointment Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Thank you for scheduling a consultation with us. Your appointment has been confirmed:</p>
        
        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Services:</strong> ${services.join(", ")}</p>
        </div>
        
        <p>We look forward to meeting with you!</p>
        
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
          If you need to reschedule or cancel your appointment, please contact us at support@yourdomain.com
        </p>
      </div>
    `,
  };
};

export const generateAdminNotificationEmail = (appointmentData: {
  name: string;
  date: string;
  time: string;
  services: string[];
  companyName: string;
  email: string;
  phone: string;
}) => {
  const { name, date, time, services, companyName, email, phone } =
    appointmentData;

  return {
    subject: "New Appointment Scheduled",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #5D4A82; margin-bottom: 20px;">New Appointment Scheduled</h2>
        
        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Client:</strong> ${name}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Services:</strong> ${services.join(", ")}</p>
          <p><strong>Contact:</strong></p>
          <ul style="list-style: none; padding-left: 20px;">
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
          </ul>
        </div>
        
        <p>Please review and prepare for this appointment.</p>
      </div>
    `,
  };
};
