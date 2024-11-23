import { motion } from "framer-motion";
import { Building2, Clock, User } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Appointment = {
  id: number;
  date: string;
  time: string;
  name: string;
  companyName: string;
  services: string[];
};

// ...existing code...

// Remove sample appointments data
// const appointments = [
//   {
//     id: 1,
//     date: "2024-11-12",
//     time: "10:00",
//     name: "John Smith",
//     companyName: "Tech Solutions Inc.",
//     services: ["Human Resources", "Data Analytics"],
//   },
//   {
//     id: 2,
//     date: "2024-11-12",
//     time: "14:00",
//     name: "Sarah Johnson",
//     companyName: "Global Ventures LLC",
//     services: ["Audit Services", "Legal Consulting"],
//   },
//   // Add more appointments as needed
// ];

// ...existing code...

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    }
  };

  // Filter appointments for selected date
  const getAppointmentsForDate = (date: Date): Appointment[] => {
    const dateString = date.toISOString().split("T")[0];
    // Return an empty array as there are no appointments initially
    return [];
  };

  // Custom styles for react-calendar to match your theme
  const calendarClassName = `
    rounded-xl shadow-lg border border-gray-100 overflow-hidden
    [&_.react-calendar__navigation]:bg-[#5D4A82]
    [&_.react-calendar__navigation__label]:text-white
    [&_.react-calendar__navigation__arrow]:text-white
    [&_.react-calendar__month-view__weekdays]:bg-gray-50
    [&_.react-calendar__month-view__weekdays__weekday]:text-[#5D4A82]
    [&_.react-calendar__tile--active]:bg-[#5D4A82]
    [&_.react-calendar__tile--active:enabled:hover]:bg-[#856BAE]
    [&_.react-calendar__tile--active:enabled:focus]:bg-[#856BAE]
    [&_.react-calendar__tile--now]:bg-[#856BAE]/20
    [&_.react-calendar__tile:enabled:hover]:bg-[#856BAE]/20
    [&_.react-calendar__tile:enabled:focus]:bg-[#856BAE]/20
  `;

  // Function to check if a date has appointments
  const tileContent = ({ date }: { date: Date }) => {
    const dateAppointments = getAppointmentsForDate(date);
    if (dateAppointments.length > 0) {
      return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-1.5 h-1.5 bg-[#5D4A82] rounded-full"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:sticky md:top-24 h-fit"
        >
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className={calendarClassName}
            tileContent={tileContent}
          />
        </motion.div>

        {/* Appointments for Selected Date */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {selectedDate && (
            <>
              <h3 className="text-xl font-bold text-[#5D4A82] mb-4">
                Appointments for{" "}
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h3>

              {getAppointmentsForDate(selectedDate).length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No appointments scheduled for this date
                </div>
              ) : (
                getAppointmentsForDate(selectedDate).map((appointment) => (
                  <motion.div
                    key={appointment.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg border border-gray-100 shadow-md p-4
                      hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-[#5D4A82]">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">
                            {appointment.time}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="font-medium">
                              {appointment.name}
                            </span>
                          </div>

                          <div className="flex items-center space-x-2 text-gray-600">
                            <Building2 className="w-4 h-4" />
                            <span>{appointment.companyName}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {appointment.services.map((service) => (
                            <span
                              key={service}
                              className="bg-[#5D4A82]/10 text-[#5D4A82] px-2 py-1 
                                rounded-full text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

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
                  </motion.div>
                ))
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
