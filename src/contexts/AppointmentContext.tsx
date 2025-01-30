import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Appointment } from "../types";
import { apiEndpoints } from "../config/api";

interface ApiResponse {
  appointment?: Appointment;
  appointments?: Appointment[];
  message?: string;
  error?: string;
  emailSent?: boolean;
}

interface AppointmentContextType {
  appointments: Appointment[];
  isLoading: boolean;
  error: string | null;
  addAppointment: (
    appointment: Omit<Appointment, "id" | "status">
  ) => Promise<void>;
  updateAppointmentStatus: (
    id: number,
    status: "pending" | "confirmed" | "cancelled"
  ) => void;
  deleteAppointment: (id: number) => void;
  refreshAppointments: () => Promise<void>;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(
  undefined
);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAppointments = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(apiEndpoints.appointments);
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }
      const data: ApiResponse = await response.json();
      
      // Handle both array and object responses from PHP
      if (Array.isArray(data)) {
        setAppointments(data);
      } else if (data.appointments) {
        setAppointments(data.appointments);
      } else {
        setAppointments([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch appointments. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshAppointments = useCallback(async () => {
    await fetchAppointments();
  }, [fetchAppointments]);

  useEffect(() => {
    fetchAppointments();
    // Set up periodic refresh every 30 seconds
    const interval = setInterval(fetchAppointments, 30000);
    return () => clearInterval(interval);
  }, [fetchAppointments]);

  const addAppointment = useCallback(
    async (appointmentData: Omit<Appointment, "id" | "status">) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiEndpoints.appointments, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...appointmentData, status: "pending" }),
        });

        const data: ApiResponse = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to add appointment");
        }

        if (data.appointment) {
          setAppointments((prev) => [...prev, data.appointment!]);
        }
        
        // Refresh the appointments list to ensure we have the latest data
        await fetchAppointments();
      } catch (err) {
        console.error("Error adding appointment:", err);
        setError("Failed to schedule appointment. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [fetchAppointments]
  );

  const updateAppointmentStatus = useCallback(
    async (id: number, status: "pending" | "confirmed" | "cancelled") => {
      try {
        const response = await fetch(`${apiEndpoints.appointments}?id=${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        });

        if (!response.ok) {
          throw new Error("Failed to update appointment status");
        }

        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment.id === id ? { ...appointment, status } : appointment
          )
        );
        
        // Refresh appointments to ensure we have the latest data
        await fetchAppointments();
      } catch (error) {
        console.error("Error updating appointment status:", error);
      }
    },
    [fetchAppointments]
  );

  const deleteAppointment = useCallback(
    async (id: number) => {
      try {
        const response = await fetch(`${apiEndpoints.appointments}?id=${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete appointment");
        }

        setAppointments((prev) =>
          prev.filter((appointment) => appointment.id !== id)
        );
        
        // Refresh appointments to ensure we have the latest data
        await fetchAppointments();
      } catch (error) {
        console.error("Error deleting appointment:", error);
      }
    },
    [fetchAppointments]
  );

  const value = {
    appointments,
    isLoading,
    error,
    addAppointment,
    updateAppointmentStatus,
    deleteAppointment,
    refreshAppointments,
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error(
      "useAppointments must be used within an AppointmentProvider"
    );
  }
  return context;
};