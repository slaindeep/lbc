// src/types.ts
export interface Appointment {
  id: number;
  name: string;
  companyName: string;
  companySize: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  services: string[];
  status: "pending" | "confirmed" | "cancelled";
  message?: string;
}