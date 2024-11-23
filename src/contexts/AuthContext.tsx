// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  const login = async (email: string, password: string) => {
    // Replace with actual authentication logic
    if (email === "admin@lumi-blue.com" && password === "LBCadmin") {
      setUser({ name: "Admin", email });
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
