import { motion } from "framer-motion";
import { AlertCircle, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Here we would make an API call to your authentication endpoint
      // const response = await loginUser(email, password);
      // handleSuccess(response);
      setIsLoading(false);
    } catch (err) {
      setError("Invalid email or password");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5D4A82] to-[#856BAE] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8"
      >
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="LBG Logo"
            className="w-20 h-20 mx-auto mb-4 animate-logo-entrance"
          />
          <h1 className="text-2xl font-bold text-[#5D4A82]">Admin Dashboard</h1>
          <p className="text-gray-600">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-500 p-4 rounded-lg flex items-center space-x-2"
            >
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </motion.div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200
                  focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent
                  transition-all duration-300"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200
                  focus:ring-2 focus:ring-[#5D4A82] focus:border-transparent
                  transition-all duration-300"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#5D4A82] to-[#856BAE] 
              text-white py-3 rounded-lg font-semibold
              hover:shadow-lg transform hover:scale-[1.02] 
              transition-all duration-300 disabled:opacity-50 
              disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          <div className="text-center">
            <button
              type="button"
              className="text-[#5D4A82] hover:text-[#856BAE] text-sm
                transition-colors duration-300"
            >
              Forgot your password?
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
