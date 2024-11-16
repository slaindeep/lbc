import { motion } from "framer-motion";
import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "", // Provide default value for optional prop
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#5D4A82] to-[#856BAE] animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${className} ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default OptimizedImage;
