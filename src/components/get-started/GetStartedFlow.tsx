// src/components/GetStartedFlow.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import StepIndicator from "./common/StepIndicator";
import CompanySizeStep from "./CompanySizeStep";
import SchedulingStep from "./SchedulingStep";
import ServicesStep from "./ServicesStep";

export type CustomFormData = {
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
  const [formData, setFormData] = useState<CustomFormData>({});

  const updateFormData = (data: Partial<CustomFormData>) => {
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

  const handleFinalSubmit = (
    contactInfo: CustomFormData["contactInfo"],
    appointmentTime: Date
  ) => {
    updateFormData({ contactInfo, appointmentTime });
    // Additional submission logic can go here
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CompanySizeStep
            selectedSize={formData.companySize}
            onSelect={(size) => updateFormData({ companySize: size })}
            onNext={handleNext}
          />
        );

      case 2:
        return (
          <ServicesStep
            onBack={handleBack}
            selectedServices={formData.services || []}
            onSelect={(services) => updateFormData({ services })}
            onNext={handleNext}
          />
        );

      case 3:
        return (
          <SchedulingStep
            onBack={handleBack}
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={handleFinalSubmit}
          />
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
