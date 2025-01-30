import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgPattern from '../../../assets/images/aboutimg/pattern.png';

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Arabic-inspired geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      ></div>
      
      {/* Main content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-600">
              Shaping Tomorrow's Business Landscape
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Where vision meets excellence in the heart of the GCC. We combine global expertise with deep local understanding to elevate your business success.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <button className="px-8 py-4 bg-purple-800 text-white rounded-full hover:bg-purple-700 transition-colors duration-300">
                Discover Our Journey
              </button>
              <button className="px-8 py-4 border-2 border-purple-800 text-purple-800 rounded-full hover:bg-purple-50 transition-colors duration-300">
                Our Services
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-4/5"
      >
        <img 
          src="/src/assets/images/aboutimg/office2.jpg"
          alt="Modern Office Space"
          className="object-cover h-full w-full rounded-l-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;