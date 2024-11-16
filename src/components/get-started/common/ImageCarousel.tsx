import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CarouselImage {
  src: string;
  city: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{
            opacity: 1,
            scale: 1.05,
            transition: {
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 7, ease: "linear" },
            },
          }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            {/* Purple Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#5D4A82]/40 to-[#856BAE]/40 mix-blend-multiply" />

            {/* City Image */}
            <div className="w-full h-full">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].city}
                className="w-full h-full object-cover object-center"
                style={{
                  minHeight: "100%",
                  minWidth: "100%",
                  objectPosition: "50% 50%",
                }}
              />
            </div>

            {/* City Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-4 right-4 text-white/80 text-xs sm:text-sm font-medium
                bg-black/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full"
            >
              {images[currentIndex].city}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
