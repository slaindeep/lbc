import { motion } from "framer-motion";
import { Building, Building2 } from "lucide-react";

interface CompanySizeStepProps {
  onNext: () => void;
  selectedSize?: string;
  onSelect: (size: string) => void;
}

const companySizes = [
  {
    id: "small",
    label: "Small Business",
    description: "1-50 employees",
    icon: Building,
  },
  {
    id: "medium",
    label: "Medium Enterprise",
    description: "51-250 employees",
    icon: Building2,
  },
  {
    id: "large",
    label: "Large Corporation",
    description: "250+ employees",
    icon: Building,
  },
];

const CompanySizeStep = ({
  onNext,
  selectedSize,
  onSelect,
}: CompanySizeStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Select Your Company Size
        </h2>
        <p className="text-gray-500">Help us understand your business better</p>
      </div>

      <div className="grid gap-4">
        {companySizes.map((size) => {
          const Icon = size.icon;
          const isSelected = selectedSize === size.id;

          return (
            <motion.button
              key={size.id}
              onClick={() => onSelect(size.id)}
              className={`relative w-full p-4 rounded-xl border-2 transition-colors
                ${
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-2 rounded-lg ${
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
                    {size.label}
                  </p>
                  <p
                    className={`text-sm ${
                      isSelected ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {size.description}
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 
                  ${
                    isSelected
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-full h-full text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </motion.svg>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="flex justify-end pt-4">
        <motion.button
          onClick={onNext}
          disabled={!selectedSize}
          className={`px-6 py-2 rounded-lg font-medium transition-colors
            ${
              selectedSize
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          whileHover={selectedSize ? { scale: 1.02 } : {}}
          whileTap={selectedSize ? { scale: 0.98 } : {}}
        >
          Next Step
        </motion.button>
      </div>
    </div>
  );
};

export default CompanySizeStep;
