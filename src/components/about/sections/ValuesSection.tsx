import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const values = [
  {
    title: 'Innovation',
    description: 'Pioneering solutions that set new standards in business excellence',
    icon: '✨',
    color: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Integrity',
    description: 'Unwavering commitment to ethical business practices',
    icon: '🤝',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional results that exceed expectations',
    icon: '🎯',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    title: 'Partnership',
    description: 'Building lasting relationships based on trust and mutual success',
    icon: '🤲',
    color: 'from-teal-500 to-purple-500'
  }
];

const ValuesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Guided by principles that reflect the sophistication and ambition of the region we serve
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r w-full h-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-purple-800/50 backdrop-blur-lg rounded-xl p-8 hover:bg-purple-700/50 transition-colors duration-300 border border-purple-700/30">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-purple-200">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-white text-purple-900 rounded-full hover:bg-purple-100 transition-colors duration-300">
            Learn More About Our Approach
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;