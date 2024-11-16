import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  LineChart,
  Scale,
  Users,
} from "lucide-react";
import React from "react";

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
    description:
      "Comprehensive HR solutions including talent acquisition, development, and management strategies.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "data",
    title: "Data Analytics",
    description:
      "Advanced data analysis and insights driving informed business decisions.",
    icon: <LineChart className="w-8 h-8" />,
  },
  {
    id: "audit",
    title: "Audit Services",
    description:
      "Thorough auditing ensuring compliance and operational efficiency.",
    icon: <ClipboardCheck className="w-8 h-8" />,
  },
  {
    id: "admin",
    title: "Business Administration",
    description:
      "Streamlined administrative services optimizing business operations.",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description:
      "Comprehensive quality control and process improvement systems.",
    icon: <BadgeCheck className="w-8 h-8" />,
  },
  {
    id: "legal",
    title: "Legal Consulting",
    description: "Expert legal guidance for business compliance and growth.",
    icon: <Scale className="w-8 h-8" />,
  },
];

const ServicesStep: React.FC<ServicesStepProps> = ({
  onNext,
  onBack,
  selectedServices,
  onSelect,
}) => {
  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onSelect(selectedServices.filter((id) => id !== serviceId));
    } else {
      onSelect([...selectedServices, serviceId]);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
          What services interest you?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select all the services you'd like to discuss with our team
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {services.map(({ id, title, description, icon }) => (
          <motion.div key={id} variants={itemVariants} className="relative">
            <button
              onClick={() => toggleService(id)}
              className={`w-full h-full p-6 rounded-xl transition-all duration-300 
                group hover:shadow-xl text-left
                ${
                  selectedServices.includes(id)
                    ? "bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white shadow-lg"
                    : "bg-white hover:bg-gray-50 border border-gray-100"
                }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300
                    ${
                      selectedServices.includes(id)
                        ? "bg-white/10"
                        : "bg-[#5D4A82]/5 group-hover:bg-[#5D4A82]/10"
                    }`}
                >
                  {React.cloneElement(icon, {
                    className: `w-8 h-8 ${
                      selectedServices.includes(id)
                        ? "text-white"
                        : "text-[#5D4A82] group-hover:text-[#856BAE]"
                    }`,
                  })}
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg mb-1 transition-colors
                      ${
                        selectedServices.includes(id)
                          ? "text-white"
                          : "text-[#5D4A82] group-hover:text-[#856BAE]"
                      }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm transition-colors
                      ${
                        selectedServices.includes(id)
                          ? "text-white/90"
                          : "text-gray-500 group-hover:text-gray-600"
                      }`}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center space-x-4"
      >
        <button
          onClick={onBack}
          className="px-8 py-3 rounded-lg font-semibold text-lg
            border-2 border-[#5D4A82] text-[#5D4A82]
            transition-all duration-300 hover:bg-[#5D4A82] hover:text-white"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={selectedServices.length === 0}
          className={`px-8 py-3 rounded-lg font-semibold text-lg
            transition-all duration-300 transform hover:scale-105
            ${
              selectedServices.length > 0
                ? "bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white shadow-lg hover:shadow-xl"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
};

export default ServicesStep;
