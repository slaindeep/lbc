// src/components/get-started/SchedulingStep.tsx
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { useAppointments } from "../../contexts/AppointmentContext";
import type { CustomFormData } from "./GetStartedFlow";

interface SchedulingStepProps {
  formData: CustomFormData;
  updateFormData: (newData: Partial<CustomFormData>) => void;
  onBack: () => void;
  onSubmit: (
    contactInfo: CustomFormData["contactInfo"],
    appointmentTime: Date
  ) => void;
}

const SchedulingStep = ({
  formData,
  updateFormData,
  onBack,
  onSubmit,
}: SchedulingStepProps) => {
  const [contactInfo, setContactInfo] = useState(
    formData.contactInfo || {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      message: "",
    }
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addAppointment } = useAppointments();
  const navigate = useNavigate();

  useEffect(() => {
    setContactInfo(
      formData.contactInfo || {
        name: "",
        email: "",
        phone: "",
        companyName: "",
        message: "",
      }
    );
  }, [formData.contactInfo]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!contactInfo.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!contactInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!contactInfo.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!contactInfo.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    console.log("Form submission started with data:", {
      contactInfo,
      selectedDate,
      formData,
      deviceInfo: {
        userAgent: window.navigator.userAgent,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        isMobile: /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent),
      },
    });

    if (!validateForm()) {
      console.log("Form validation failed with errors:", errors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Format the date and time consistently
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const formattedTime = selectedDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      console.log("Preparing appointment data with formatted date/time:", {
        formattedDate,
        formattedTime,
      });

      const appointmentData = {
        name: contactInfo.name.trim(),
        email: contactInfo.email.trim().toLowerCase(),
        phone: contactInfo.phone.trim(),
        companyName: contactInfo.companyName.trim(),
        message: contactInfo.message?.trim() || "",
        date: formattedDate,
        time: formattedTime,
        services: formData.services || [],
        companySize: formData.companySize || "small",
      };

      console.log("Attempting to add appointment with data:", appointmentData);

      // Add the appointment
      await addAppointment(appointmentData);
      console.log("Appointment added successfully");

      // Update form data and navigate
      updateFormData({
        contactInfo,
        appointmentTime: selectedDate,
      });

      navigate("/success");
    } catch (error) {
      console.error("Appointment submission failed:", {
        error,
        errorMessage: error instanceof Error ? error.message : "Unknown error",
        errorStack: error instanceof Error ? error.stack : undefined,
      });

      // Set a more specific error message based on the error
      let errorMessage = "Failed to schedule appointment. ";
      if (error instanceof Error) {
        if (
          error.message.includes("network") ||
          error.message.includes("NetworkError")
        ) {
          errorMessage +=
            "Please check your internet connection and try again.";
        } else if (error.message.includes("timeout")) {
          errorMessage += "The request timed out. Please try again.";
        } else {
          errorMessage +=
            "Please try again or contact support if the issue persists.";
        }
      }

      setErrors((prev) => ({
        ...prev,
        submit: errorMessage,
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 max-w-full">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Schedule Your Consultation
        </h2>
        <p className="text-gray-500">
          Let's find the perfect time to discuss your needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Information Form */}
        <div className="space-y-4 w-full">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={contactInfo.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm
              focus:ring-2 focus:ring-blue-500 focus:border-transparent
              appearance-none"
              style={{ fontSize: "16px" }}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              inputMode="email"
              autoComplete="email"
              value={contactInfo.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm
              focus:ring-2 focus:ring-blue-500 focus:border-transparent
              appearance-none"
              style={{ fontSize: "16px" }}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              inputMode="tel"
              autoComplete="tel"
              value={contactInfo.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm
              focus:ring-2 focus:ring-blue-500 focus:border-transparent
              appearance-none"
              style={{ fontSize: "16px" }}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              value={contactInfo.companyName}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.companyName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Additional Message
            </label>
            <textarea
              id="message"
              rows={3}
              value={contactInfo.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Any specific questions or requirements?"
            />
          </div>
        </div>

        {/* Calendar Section */}
        <div className="space-y-4 w-full">
          <div className="p-4 bg-gray-50 rounded-lg overflow-x-auto">
            <Calendar
              onChange={(value) => value && setSelectedDate(value as Date)}
              value={selectedDate}
              minDate={new Date()}
              className="w-full border-none"
            />
          </div>
          <p className="text-sm text-gray-500 text-center">
            Selected date: {selectedDate.toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
        <motion.button
          onClick={onBack}
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-2 rounded-lg font-medium 
          text-gray-600 bg-gray-100 hover:bg-gray-200 
          disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        <motion.button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full sm:w-auto px-6 py-2 rounded-lg font-medium 
          flex items-center justify-center space-x-2
          ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } 
          text-white`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Request Appointment</span>
          )}
        </motion.button>
      </div>

      {Object.entries(errors).map(
        ([key, value]) =>
          value && (
            <p key={key} className="mt-2 text-red-500 text-center">
              {value}
            </p>
          )
      )}
    </div>
  );
};

export default SchedulingStep;
