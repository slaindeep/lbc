import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageCarouselProps {
  images: Array<{ src: string; city: string }>;
  className?: string;
  transitionDuration?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
  transitionDuration = 500
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ 
            duration: transitionDuration / 1000,
            ease: "easeInOut"
          }}
        >
          <img
            src={image.src}
            alt={image.city}
            className="w-full h-full object-cover"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 text-white text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {image.city}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageCarousel;