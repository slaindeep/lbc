// src/components/get-started/SchedulingStep.tsx
import { motion } from "framer-motion";
import { Building, Mail, Phone, User } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import LoadingSpinner from "../Common/LoadingSpinner";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface SchedulingStepProps {
  onBack: () => void;
  formData: {
    companySize?: string;
    services?: string[];
  };
  onSubmit: (contactInfo: ContactInfo, appointmentTime: Date) => void;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message?: string;
}

const SchedulingStep: React.FC<SchedulingStepProps> = ({
  onBack,
  formData,
  onSubmit,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generate available time slots (9 AM - 5 PM Dubai time)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour.toString().padStart(2, "0")}:00`);
      slots.push(`${hour.toString().padStart(2, "0")}:30`);
    }
    return slots;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setError("Please select both date and time");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const [hours, minutes] = selectedTime.split(":");
    const appointmentTime = new Date(selectedDate);
    appointmentTime.setHours(parseInt(hours), parseInt(minutes), 0);

    try {
      // Use environment variable for API URL
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

      const response = await fetch(`${apiUrl}/api/appointments/schedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactInfo,
          appointmentTime,
          companySize: formData.companySize,
          services: formData.services,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to schedule appointment");
      }

      onSubmit(contactInfo, appointmentTime);
    } catch (error) {
      console.error("Submission error:", error);
      setError("Failed to schedule appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom styles for react-calendar
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

  // Function to check if a date should be disabled
  const tileDisabled = ({ date }: { date: Date }) => {
    // Disable past dates and weekends
    return (
      date < new Date(new Date().setHours(0, 0, 0, 0)) ||
      date.getDay() === 0 ||
      date.getDay() === 6
    );
  };

  if (isSubmitting) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
          Schedule Your Consultation
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Let's discuss how we can help your{" "}
          {formData.companySize?.toLowerCase()} business
          {formData.services && formData.services.length > 0 && (
            <span> with {formData.services.join(", ")}</span>
          )}
        </p>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto mb-6 p-4 bg-red-50 text-red-500 rounded-lg text-center"
        >
          {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#5D4A82]">
            Contact Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                required
                value={contactInfo.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200
                  focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                required
                value={contactInfo.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200
                  focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                required
                value={contactInfo.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200
                  focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="companyName"
                required
                value={contactInfo.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200
                  focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent"
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={contactInfo.message}
              onChange={handleInputChange}
              placeholder="Additional Message (Optional)"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200
                focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent"
            />
          </div>
        </div>

        {/* Calendar and Time Selection */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#5D4A82]">
            Select Date & Time
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                className={calendarClassName}
                tileDisabled={tileDisabled}
                minDate={new Date()}
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">
                Available Time Slots
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {generateTimeSlots().map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-4 rounded-lg border-2 transition-all
                      ${
                        selectedTime === time
                          ? "border-[#5D4A82] bg-[#5D4A82] text-white"
                          : "border-gray-200 hover:border-[#5D4A82]"
                      }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="px-8 py-3 rounded-lg font-semibold text-lg
              border-2 border-[#5D4A82] text-[#5D4A82]
              transition-all duration-300 hover:bg-[#5D4A82] hover:text-white"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!selectedDate || !selectedTime}
            className={`px-8 py-3 rounded-lg font-semibold text-lg
              transition-all duration-300 transform
              ${
                selectedDate && selectedTime
                  ? "bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white hover:scale-105"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            Schedule Consultation
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchedulingStep;
