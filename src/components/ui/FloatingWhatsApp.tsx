import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = "+971562886878",
  message = "Hello! I'm interested in exploring how Luminous Bluewaters Consultancy can help transform my business. Could you provide more information about your services?",
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleClick = () => {
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl p-4 w-64"
          >
            <button
              onClick={() => setTooltipVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm text-gray-600">
              Chat with us on WhatsApp for quick assistance!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setTooltipVisible(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp;
