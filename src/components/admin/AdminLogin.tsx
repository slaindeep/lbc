// src/components/admin/AdminLogin.tsx
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { LoginCredentials } from "../../types/auth";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(credentials);
      // Navigation is handled in the AuthContext after successful login
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
      >
        <div>
          <h2 className="text-center text-3xl font-bold text-[#5D4A82]">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access the admin dashboard
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 text-red-500 p-4 rounded-lg text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                required
                value={credentials.email}
                onChange={handleChange}
                className="appearance-none rounded-lg relative block w-full pl-12 pr-4 py-3
                  border border-gray-200 placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent"
                placeholder="Email address"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                required
                value={credentials.password}
                onChange={handleChange}
                className="appearance-none rounded-lg relative block w-full pl-12 pr-4 py-3
                  border border-gray-200 placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 rounded-lg
              text-lg font-semibold text-white
              bg-gradient-to-r from-[#5D4A82] to-[#856BAE]
              transition-all duration-300 transform
              ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-lg hover:scale-105"
              }`}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
