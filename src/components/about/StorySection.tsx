import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StorySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16 text-purple-800"
        >
          A Vision Born from Market Reality
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg leading-relaxed">
              In the heart of the GCC's dynamic business landscape, we recognized a critical gap. While multinational corporations operated with robust internal departments, small and medium-sized enterprises faced a significant challenge: accessing reliable, professional business services without the burden of maintaining full in-house teams.
            </p>
            <p className="text-lg leading-relaxed">
              What we saw was concerning: businesses struggling with inconsistent advice, facing unnecessary risks, and often being misguided by partners who prioritized profit over integrity. The market needed more than just service providers – it needed trusted partners who could deliver comprehensive solutions with unwavering ethical standards.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative h-96 bg-purple-100 rounded-lg shadow-xl overflow-hidden"
          >
            {/* Add interactive visualization/image here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-purple-800">Interactive Visualization Placeholder</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 p-8 bg-purple-50 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Our IDEAL Approach</h3>
          <div className="grid md:grid-cols-5 gap-8">
            {['Innovation & Integrity', 'Dependability', 'Empowering', 'Accountability', 'Leadership'].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {value[0]}
                </div>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;