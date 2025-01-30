import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import useScrollToTop from "../../hooks/useScrollToTop";

interface SuccessStepProps {
  formData: {
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
  onStartOver: () => void;
}

const SuccessStep: React.FC<SuccessStepProps> = ({ formData, onStartOver }) => {
  useScrollToTop();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <Card>
        <CardHeader>
          <CardTitle>Success!</CardTitle>
        </CardHeader>
        <CardContent>
          <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
          <p className="text-gray-600">
            Your appointment has been scheduled successfully.
          </p>
          <p className="text-gray-600">
            <strong>Company Size:</strong> {formData.companySize}
          </p>
          <p className="text-gray-600">
            <strong>Services:</strong> {formData.services?.join(", ")}
          </p>
          <p className="text-gray-600">
            <strong>Appointment Time:</strong>{" "}
            {formData.appointmentTime?.toLocaleString()}
          </p>
          <button onClick={onStartOver} className="btn-primary mt-4">
            Start Over
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SuccessStep;
