import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen bg-purple-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Add background video/image here */}
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
        >
          Transforming Businesses
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12"
        >
          Your trusted partner in business excellence across UAE & GCC
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-8 text-center"
        >
          <div className="px-8">
            <h3 className="text-4xl font-bold mb-2">20+</h3>
            <p>Years Experience</p>
          </div>
          <div className="px-8">
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p>Expert Consultants</p>
          </div>
          <div className="px-8">
            <h3 className="text-4xl font-bold mb-2">5</h3>
            <p>Strategic Locations</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;