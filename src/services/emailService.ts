interface EmailParams {
  to_name: string;
  to_email: string;
  appointment_date: string;
  appointment_time: string;
  company_name: string;
  selected_services: string;
  company_size: string;
}

export const sendConfirmationEmail = async (params: EmailParams) => {
  try {
    const response = await fetch('https://lumi-blue.com/api/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: params.to_email,
        subject: 'Consultation Appointment Confirmation - Lumi Blue Group',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Appointment Confirmation</h2>
            <p>Dear ${params.to_name},</p>
            
            <p>Thank you for scheduling a consultation with Lumi Blue Group. We're excited to meet with you!</p>
            
            <h3>Appointment Details:</h3>
            <ul>
              <li><strong>Date:</strong> ${params.appointment_date}</li>
              <li><strong>Time:</strong> ${params.appointment_time}</li>
              <li><strong>Company:</strong> ${params.company_name}</li>
              <li><strong>Services Interested In:</strong> ${params.selected_services}</li>
            </ul>
            
            <p>We will be sending a calendar invite shortly with the meeting details.</p>
            
            <p>If you need to reschedule or have any questions before our meeting, please don't hesitate to contact us at info@lumi-blue.com.</p>
            
            <p>Best regards,<br>Lumi Blue Group Team</p>
          </div>
        `
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}