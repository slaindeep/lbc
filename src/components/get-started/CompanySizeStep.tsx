import { motion } from "framer-motion";
import { Building, Building2, Factory, Users } from "lucide-react";
import React from "react";

interface CompanySizeStepProps {
  onNext: () => void;
  selectedSize?: string;
  onSelect: (size: string) => void;
}

const companySizes = [
  {
    id: "small",
    label: "1-10 employees",
    description: "Small Business",
    icon: Users,
  },
  {
    id: "growing",
    label: "11-50 employees",
    description: "Growing Business",
    icon: Building,
  },
  {
    id: "midsize",
    label: "51-200 employees",
    description: "Mid-size Business",
    icon: Building2,
  },
  {
    id: "large",
    label: "201-500 employees",
    description: "Large Business",
    icon: Building,
  },
  {
    id: "enterprise",
    label: "500+ employees",
    description: "Enterprise",
    icon: Factory,
  },
];

const CompanySizeStep: React.FC<CompanySizeStepProps> = ({
  onNext,
  selectedSize,
  onSelect,
}) => {
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
          How large is your company?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Help us understand your business scale so we can better serve your
          needs
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {companySizes.map(({ id, label, description, icon: Icon }) => (
          <motion.div key={id} variants={itemVariants} className="relative">
            <button
              onClick={() => onSelect(id)}
              className={`w-full h-full p-6 rounded-xl transition-all duration-300 
                group hover:shadow-xl text-left
                ${
                  selectedSize === id
                    ? "bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white shadow-lg"
                    : "bg-white hover:bg-gray-50 border border-gray-100"
                }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300
                    ${
                      selectedSize === id
                        ? "bg-white/10"
                        : "bg-[#5D4A82]/5 group-hover:bg-[#5D4A82]/10"
                    }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      selectedSize === id
                        ? "text-white"
                        : "text-[#5D4A82] group-hover:text-[#856BAE]"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg mb-1 transition-colors
                      ${
                        selectedSize === id
                          ? "text-white"
                          : "text-[#5D4A82] group-hover:text-[#856BAE]"
                      }`}
                  >
                    {label}
                  </h3>
                  <p
                    className={`transition-colors
                      ${
                        selectedSize === id
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
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          disabled={!selectedSize}
          className={`px-8 py-3 rounded-lg font-semibold text-lg
            transition-all duration-300 transform hover:scale-105
            ${
              selectedSize
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

export default CompanySizeStep;
