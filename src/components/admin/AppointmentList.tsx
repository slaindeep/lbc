import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  XCircle,
} from "lucide-react";
import { useAppointments } from "../../contexts/AppointmentContext";
import { Appointment } from "../../types";

type AppointmentListProps = {
  onConfirm: (appointmentId: string) => void;
};

const AppointmentList = ({ onConfirm }: AppointmentListProps) => {
  const { appointments, deleteAppointment } = useAppointments();

  console.log("Fetched Appointments:", appointments); // Debugging line

  return (
    <div className="p-6">
      {/* Filters and Search - To be implemented */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search appointments..."
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200
            focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent
            transition-all duration-300"
        />
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {appointments.map((appointment: Appointment, index: number) => (
          <motion.div
            key={appointment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-100 shadow-md 
              hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  {/* Client Info */}
                  <div>
                    <h3 className="text-xl font-bold text-[#5D4A82] mb-1">
                      {appointment.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <Mail className="w-5 h-5" />
                      <span>{appointment.email}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <Phone className="w-5 h-5" />
                      <span>{appointment.phone}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <Building2 className="w-5 h-5" />
                      <span>{appointment.companyName}</span>
                    </div>
                  </div>

                  {/* Appointment Info */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{appointment.status}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => onConfirm(appointment.id.toString())}
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteAppointment(appointment.id)}
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;
