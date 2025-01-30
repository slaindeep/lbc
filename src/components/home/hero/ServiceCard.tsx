import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  className = "",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.2,
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 } 
      }}
      className={`
        relative p-4 rounded-xl
        bg-white/5 backdrop-blur-sm
        border border-white/10
        shadow-lg
        max-w-[280px]
        ${className}
      `}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-white/10">
          {icon}
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-white text-lg">
            {title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;