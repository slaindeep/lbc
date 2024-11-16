// src/contexts/AppointmentContext.tsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useAuth } from "./AuthContext";

interface Appointment {
  id: number;
  name: string;
  companyName: string;
  companySize: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  services: string[];
  status: "confirmed" | "pending" | "cancelled";
}

interface AppointmentState {
  appointments: Appointment[];
  isLoading: boolean;
  error: string | null;
}

type AppointmentAction =
  | { type: "FETCH_APPOINTMENTS_START" }
  | { type: "FETCH_APPOINTMENTS_SUCCESS"; payload: Appointment[] }
  | { type: "FETCH_APPOINTMENTS_ERROR"; payload: string }
  | { type: "UPDATE_APPOINTMENT"; payload: Appointment }
  | { type: "DELETE_APPOINTMENT"; payload: number };

const initialState: AppointmentState = {
  appointments: [],
  isLoading: false,
  error: null,
};

const appointmentReducer = (
  state: AppointmentState,
  action: AppointmentAction
): AppointmentState => {
  switch (action.type) {
    case "FETCH_APPOINTMENTS_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_APPOINTMENTS_SUCCESS":
      return { ...state, appointments: action.payload, isLoading: false };
    case "FETCH_APPOINTMENTS_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "UPDATE_APPOINTMENT":
      return {
        ...state,
        appointments: state.appointments.map((apt) =>
          apt.id === action.payload.id ? action.payload : apt
        ),
      };
    case "DELETE_APPOINTMENT":
      return {
        ...state,
        appointments: state.appointments.filter(
          (apt) => apt.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

interface AppointmentContextType extends AppointmentState {
  fetchAppointments: () => Promise<void>;
  updateAppointment: (appointment: Appointment) => Promise<void>;
  deleteAppointment: (id: number) => Promise<void>;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(
  undefined
);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appointmentReducer, initialState);
  const { token } = useAuth();

  const fetchAppointments = useCallback(async () => {
    if (!token) return;

    dispatch({ type: "FETCH_APPOINTMENTS_START" });
    try {
      const response = await fetch("/api/appointments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch appointments");
      const data = await response.json();
      dispatch({ type: "FETCH_APPOINTMENTS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_APPOINTMENTS_ERROR",
        payload: "Failed to load appointments",
      });
    }
  }, [token]); // token is the only dependency here

  const updateAppointment = useCallback(
    async (appointment: Appointment) => {
      if (!token) return;

      try {
        const response = await fetch(`/api/appointments/${appointment.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(appointment),
        });
        if (!response.ok) throw new Error("Failed to update appointment");
        dispatch({ type: "UPDATE_APPOINTMENT", payload: appointment });
      } catch (error) {
        console.error("Error updating appointment:", error);
      }
    },
    [token]
  );

  const deleteAppointment = useCallback(
    async (id: number) => {
      if (!token) return;

      try {
        const response = await fetch(`/api/appointments/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to delete appointment");
        dispatch({ type: "DELETE_APPOINTMENT", payload: id });
      } catch (error) {
        console.error("Error deleting appointment:", error);
      }
    },
    [token]
  );

  useEffect(() => {
    if (token) {
      fetchAppointments();
    }
  }, [token, fetchAppointments]); // Now fetchAppointments is properly included

  const value = {
    ...state,
    fetchAppointments,
    updateAppointment,
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
