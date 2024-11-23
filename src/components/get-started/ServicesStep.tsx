import { motion } from "framer-motion";
import {
  Building2,
  Check,
  ClipboardCheck,
  LineChart,
  Scale,
  Users,
} from "lucide-react";
import { useCallback } from "react";

interface ServicesStepProps {
  onNext: () => void;
  onBack: () => void;
  selectedServices: string[];
  onSelect: (services: string[]) => void;
}

const services = [
  {
    id: "hr",
    title: "Human Resources",
    description: "Talent acquisition, development, and management strategies.",
    icon: Users,
  },
  {
    id: "data",
    title: "Data Analytics",
    description: "Data-driven insights to power your business decisions.",
    icon: LineChart,
  },
  {
    id: "audit",
    title: "Audit Services",
    description: "Comprehensive audits for compliance and efficiency.",
    icon: Scale,
  },
  {
    id: "admin",
    title: "Business Administration",
    description: "Streamlined operations and process management.",
    icon: ClipboardCheck,
  },
  {
    id: "consulting",
    title: "Strategic Consulting",
    description: "Expert guidance for your business growth.",
    icon: Building2,
  },
];

const ServicesStep = ({
  onNext,
  onBack,
  selectedServices,
  onSelect,
}: ServicesStepProps) => {
  const handleServiceToggle = useCallback(
    (serviceId: string) => {
      const updatedServices = selectedServices.includes(serviceId)
        ? selectedServices.filter((id) => id !== serviceId)
        : [...selectedServices, serviceId];
      onSelect(updatedServices);
    },
    [selectedServices, onSelect]
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Select Your Services
        </h2>
        <p className="text-gray-500">
          Choose the services that best fit your needs
        </p>
      </div>

      <div className="grid gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedServices.includes(service.id);

          return (
            <motion.div
              key={service.id}
              initial={false}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <button
                onClick={() => handleServiceToggle(service.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ease-in-out
                  ${
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-2 rounded-lg flex-shrink-0 transition-colors
                      ${
                        isSelected
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={`font-medium ${
                        isSelected ? "text-blue-700" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </p>
                    <p
                      className={`text-sm mt-1 ${
                        isSelected ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors
                      ${
                        isSelected
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300 bg-white"
                      }`}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-between pt-4">
        <motion.button
          onClick={onBack}
          className="px-6 py-2 rounded-lg font-medium text-gray-600 bg-gray-100 hover:bg-gray-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        <motion.button
          onClick={onNext}
          disabled={selectedServices.length === 0}
          className={`px-6 py-2 rounded-lg font-medium
            ${
              selectedServices.length > 0
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          whileHover={selectedServices.length > 0 ? { scale: 1.02 } : {}}
          whileTap={selectedServices.length > 0 ? { scale: 0.98 } : {}}
        >
          Next Step
        </motion.button>
      </div>
    </div>
  );
};

export default ServicesStep;
