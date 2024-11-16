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

const appointments = [
  {
    id: 1,
    name: "John Smith",
    companyName: "Tech Solutions Inc.",
    companySize: "11-50 employees",
    email: "john@techsolutions.com",
    phone: "+971 55 123 4567",
    date: "2024-11-12",
    time: "10:00",
    services: ["Human Resources", "Data Analytics"],
    status: "confirmed",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    companyName: "Global Ventures LLC",
    companySize: "51-200 employees",
    email: "sarah@globalventures.com",
    phone: "+971 55 987 6543",
    date: "2024-11-12",
    time: "14:00",
    services: ["Audit Services", "Legal Consulting"],
    status: "pending",
  },
  // Add more sample appointments as needed
];

const AppointmentList = () => {
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
        {appointments.map((appointment, index) => (
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
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-4 h-4" />
                        <span>{appointment.companyName}</span>
                      </div>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                        {appointment.companySize}
                      </span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex space-x-4 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{appointment.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{appointment.phone}</span>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-[#5D4A82]">
                      <Calendar className="w-4 h-4" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-[#5D4A82]">
                      <Clock className="w-4 h-4" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2">
                    {appointment.services.map((service) => (
                      <span
                        key={service}
                        className="bg-[#5D4A82]/10 text-[#5D4A82] px-3 py-1 
                          rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex flex-col items-end space-y-4">
                  <span
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm
                      ${
                        appointment.status === "confirmed"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                  >
                    {appointment.status === "confirmed" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    <span className="capitalize">{appointment.status}</span>
                  </span>

                  <div className="space-x-2">
                    <button
                      className="px-3 py-1 text-sm rounded-lg border-2 border-[#5D4A82] 
                        text-[#5D4A82] hover:bg-[#5D4A82] hover:text-white
                        transition-all duration-300"
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 text-sm rounded-lg border-2 border-red-500 
                        text-red-500 hover:bg-red-500 hover:text-white
                        transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
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
