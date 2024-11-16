import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CompanySizeStep from "./CompanySizeStep";

import StepIndicator from "./common/StepIndicator";
import SchedulingStep from "./SchedulingStep";
import ServicesStep from "./steps/ServiceStep";

export type FormData = {
  companySize?: string;
  services?: string[];
  contactInfo?: {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    message?: string;
  };
  appointmentTime?: Date;
};

const GetStartedFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CompanySizeStep
            onNext={handleNext}
            selectedSize={formData.companySize}
            onSelect={(size) => updateFormData({ companySize: size })}
          />
        );

      case 2:
        return (
          <ServicesStep
            onNext={handleNext}
            onBack={handleBack}
            selectedServices={formData.services || []}
            onSelect={(services) => updateFormData({ services })}
          />
        );
        return (
          <div className="text-center p-8">
            <h2 className="text-2xl text-[#5D4A82]">Services Selection</h2>
            <p className="text-gray-600">Coming soon...</p>
            <div className="mt-4 space-x-4">
              <button
                onClick={handleBack}
                className="px-6 py-2 rounded-lg border border-[#5D4A82] text-[#5D4A82]"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-[#5D4A82] text-white"
              >
                Next
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <SchedulingStep
            onBack={handleBack}
            formData={formData}
            onSubmit={(contactInfo, appointmentTime) =>
              updateFormData({ contactInfo, appointmentTime })
            }
          />
        );
        return (
          <div className="text-center p-8">
            <h2 className="text-2xl text-[#5D4A82]">Schedule Meeting</h2>
            <p className="text-gray-600">Coming soon...</p>
            <button
              onClick={handleBack}
              className="mt-4 px-6 py-2 rounded-lg border border-[#5D4A82] text-[#5D4A82]"
            >
              Back
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Step Indicator */}
          <StepIndicator currentStep={currentStep} />

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStartedFlow;
