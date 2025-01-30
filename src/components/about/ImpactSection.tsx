import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImpactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-purple-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Impact
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 bg-purple-800 rounded-xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              {/* Add icon here */}
            </div>
            <h3 className="text-2xl font-bold mb-4">Business Transformation</h3>
            <p className="text-purple-100">
              Helping businesses achieve operational excellence through comprehensive solutions
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center p-8 bg-purple-800 rounded-xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              {/* Add icon here */}
            </div>
            <h3 className="text-2xl font-bold mb-4">Regional Expertise</h3>
            <p className="text-purple-100">
              Deep understanding of GCC market dynamics and regulatory requirements
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center p-8 bg-purple-800 rounded-xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              {/* Add icon here */}
            </div>
            <h3 className="text-2xl font-bold mb-4">Client Success</h3>
            <p className="text-purple-100">
              Proven track record of delivering measurable results for our clients
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImpactSection;