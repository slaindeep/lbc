import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, title: "Company Size" },
    { number: 2, title: "Services" },
    { number: 3, title: "Schedule Meeting" },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Circle */}
            <div className="flex flex-col items-center relative">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    currentStep > step.number
                      ? "bg-[#5D4A82]"
                      : currentStep === step.number
                      ? "bg-gradient-to-r from-[#5D4A82] to-[#856BAE]"
                      : "bg-gray-200"
                  } transition-colors duration-300`}
                initial={{ scale: 0.8 }}
                animate={{ scale: currentStep === step.number ? 1 : 0.8 }}
              >
                {currentStep > step.number ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <span
                    className={`text-lg ${
                      currentStep === step.number
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {step.number}
                  </span>
                )}
              </motion.div>
              <span
                className={`mt-2 text-sm font-medium
                ${
                  currentStep >= step.number
                    ? "text-[#5D4A82]"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 h-0.5 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#5D4A82] to-[#856BAE]"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: currentStep > step.number ? 1 : 0,
                  }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
