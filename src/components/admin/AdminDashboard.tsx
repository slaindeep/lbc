import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  CalendarDays,
  ListTodo,
  LogOut,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { useAppointments } from "../../contexts/AppointmentContext";
import { useAuth } from "../../contexts/AuthContext";
import LoadingSpinner from "../Common/LoadingSpinner";
import AppointmentCalendar from "./AppointmentCalendar";
import AppointmentList from "./AppointmentList";
import StatsOverview from "./StatsOverview";
import axios from "axios";

type ViewType = "list" | "calendar" | "stats" | "settings";

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState<ViewType>("list");
  const { logout, user } = useAuth();
  const { isLoading, error } = useAppointments();

  const sendEmail = async (appointmentId: string) => {
    try {
      await axios.post("/api/send-email", { appointmentId });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleAppointmentConfirm = (appointmentId: string) => {
    sendEmail(appointmentId);
  };

  const navigationItems = [
    { id: "list", label: "Appointments", icon: ListTodo },
    { id: "calendar", label: "Calendar", icon: CalendarDays },
    { id: "stats", label: "Overview", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderView = () => {
    if (isLoading) {
      return <LoadingSpinner fullScreen />;
    }

    if (error) {
      return (
        <div className="p-6 text-center">
          <div className="text-red-500 mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#5D4A82] text-white rounded-lg hover:bg-[#856BAE] transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    switch (currentView) {
      case "calendar":
        return <AppointmentCalendar />;
      case "stats":
        return <StatsOverview />;
      case "settings":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#5D4A82] mb-4">Settings</h2>
          </div>
        );
      default:
        return <AppointmentList onConfirm={handleAppointmentConfirm} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {" "}
      {/* Added pt-20 for top spacing */}
      <div className="container mx-auto px-4 py-8">
        {" "}
        {/* Adjusted padding */}
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#5D4A82] mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {user?.name || "Admin"}
              </p>
            </div>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </motion.div>
        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as ViewType)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg
                  transition-all duration-300
                  ${
                    currentView === item.id
                      ? "bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;
