import mongoose from "mongoose";

export interface IAppointment extends mongoose.Document {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  companyName: string;
  companySize: string;
  selectedServices: string[];
  appointmentDate: Date;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  assignedTo?: mongoose.Types.ObjectId;
  notes?: string;
}

const appointmentSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    clientPhone: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companySize: {
      type: String,
      required: true,
    },
    selectedServices: [
      {
        type: String,
        required: true,
      },
    ],
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    notes: String,
  },
  {
    timestamps: true,
  }
);
