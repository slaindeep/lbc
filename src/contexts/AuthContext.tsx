import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthState, LoginCredentials, User } from "../types/auth";

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: true,
};

type AuthAction =
  | { type: "LOGIN_SUCCESS"; payload: { user: User; token: string } }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode<User>(token);
          // Check if token is expired
          const currentTime = Date.now() / 1000;
          if ((decoded as any).exp < currentTime) {
            throw new Error("Token expired");
          }
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { user: decoded, token },
          });
        } catch (error) {
          localStorage.removeItem("token");
          dispatch({ type: "LOGOUT" });
        }
      }
      dispatch({ type: "SET_LOADING", payload: false });
    };

    initializeAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const { token, user } = await response.json();
      localStorage.setItem("token", token);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, token },
      });

      navigate("/admin");
    } catch (error) {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  if (state.isLoading) {
    return <div>Loading...</div>; // Replace with your loading component
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
