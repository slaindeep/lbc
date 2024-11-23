// src/contexts/AppointmentContext.tsx

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Appointment } from "../types/email";

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
      const response = await fetch("http://localhost:3001/api/appointments");
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }
      const data = await response.json();
      setAppointments(data);
    } catch (err) {
      setError("Failed to fetch appointments. Please try again.");
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const addAppointment = useCallback(
    async (appointmentData: Omit<Appointment, "id" | "status">) => {
      setIsLoading(true);
      setError(null);

      try {
        console.log(
          "Starting appointment creation with data:",
          appointmentData
        );

        const response = await fetch("http://localhost:3001/api/appointments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify({ ...appointmentData, status: "pending" }),
          credentials: "include",
        });

        console.log("Received response:", {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
        });

        if (!response.ok) {
          let errorDetail = "Unknown error";
          try {
            const errorData = await response.json();
            errorDetail =
              errorData.message ||
              errorData.error ||
              errorData.details ||
              "Unknown error";
          } catch (e) {
            errorDetail = response.statusText;
          }

          throw new Error(
            `Failed to add appointment: ${errorDetail} (${response.status})`
          );
        }

        const newAppointment = await response.json();
        console.log("Successfully created appointment:", newAppointment);

        setAppointments((prev) => [...prev, newAppointment]);
      } catch (err) {
        console.error("Error in addAppointment:", {
          error: err,
          message: err instanceof Error ? err.message : "Unknown error",
          stack: err instanceof Error ? err.stack : undefined,
        });

        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const updateAppointmentStatus = useCallback(
    async (id: number, status: "pending" | "confirmed" | "cancelled") => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/appointments/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update appointment status");
        }

        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment.id === id ? { ...appointment, status } : appointment
          )
        );
      } catch (err) {
        console.error("Error updating appointment status:", err);
        setError("Failed to update appointment status");
      }
    },
    []
  );

  const deleteAppointment = useCallback(async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/appointments/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete appointment");
      }

      setAppointments((prev) =>
        prev.filter((appointment) => appointment.id !== id)
      );
    } catch (err) {
      console.error("Error deleting appointment:", err);
      setError("Failed to delete appointment");
    }
  }, []);

  const value = {
    appointments,
    isLoading,
    error,
    addAppointment,
    updateAppointmentStatus,
    deleteAppointment,
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
