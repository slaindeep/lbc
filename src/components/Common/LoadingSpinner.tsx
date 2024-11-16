// src/components/common/LoadingSpinner.tsx
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const spinner = (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-t-2 border-b-2 border-[#5D4A82] rounded-full`}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        {spinner}
      </div>
    );
  }

  return <div className="flex items-center justify-center p-4">{spinner}</div>;
};

export default LoadingSpinner;
