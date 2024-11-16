// src/components/admin/AdminDashboard.tsx
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Building,
  CalendarDays,
  Clock,
  ListTodo,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useAppointments } from "../../contexts/AppointmentContext";
import { useAuth } from "../../contexts/AuthContext";
import LoadingSpinner from "../Common/LoadingSpinner";
import AppointmentCalendar from "./AppointmentCalendar";
import AppointmentList from "./AppointmentList";
import StatsOverview from "./StatsOverview";

type ViewType = "list" | "calendar" | "stats" | "settings";

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState<ViewType>("list");
  const { logout, user } = useAuth();
  const { appointments, isLoading, error } = useAppointments();

  const navigationItems = [
    { id: "list", label: "Appointments", icon: ListTodo },
    { id: "calendar", label: "Calendar", icon: CalendarDays },
    { id: "stats", label: "Overview", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  // Calculate quick stats
  const quickStats = [
    {
      label: "Total Appointments",
      value: appointments.length.toString(),
      icon: Users,
      color: "from-purple-500 to-indigo-500",
    },
    {
      label: "Upcoming Today",
      value: appointments
        .filter((apt) => {
          const today = new Date().toISOString().split("T")[0];
          return apt.date === today;
        })
        .length.toString(),
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "This Week",
      value: appointments
        .filter((apt) => {
          const today = new Date();
          const appointmentDate = new Date(apt.date);
          const diffTime = appointmentDate.getTime() - today.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays >= 0 && diffDays <= 7;
        })
        .length.toString(),
      icon: CalendarDays,
      color: "from-emerald-500 to-teal-500",
    },
    {
      label: "Companies",
      value: new Set(
        appointments.map((apt) => apt.companyName)
      ).size.toString(),
      icon: Building,
      color: "from-orange-500 to-red-500",
    },
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
            {/* Add settings content here */}
          </div>
        );
      default:
        return <AppointmentList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
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

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-[#5D4A82] mt-1">
                    {stat.value}
                  </h3>
                </div>
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
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
