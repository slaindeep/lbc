// src/types/email.ts

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
}

export interface EmailTemplate {
  name: string;
  date: string;
  time: string;
  companyName: string;
  services: string[];
}

export interface AppointmentData {
  id: number;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  companySize: string; // Added this field
  message?: string;
  date: string;
  time: string;
  services: string[];
  status: "pending" | "confirmed" | "cancelled";
}
