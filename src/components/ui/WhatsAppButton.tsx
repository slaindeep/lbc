import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello! I'd like to learn more about your services.",
  className = ''
}) => {
  const handleClick = () => {
    // Remove any non-numeric characters from the phone number
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center gap-2 
        px-6 py-3 
        bg-[#25D366] 
        text-white 
        rounded-full 
        shadow-lg 
        hover:shadow-xl 
        transition-all 
        duration-300
        font-medium
        ${className}
      `}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Chat on WhatsApp</span>
    </motion.button>
  );
};

export default WhatsAppButton;