import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: 'Local Expertise',
      description: 'Deep understanding of GCC business culture and regulations',
      icon: '🌍'
    },
    {
      title: 'Global Standards',
      description: 'International best practices adapted for regional success',
      icon: '🌟'
    },
    {
      title: 'Innovative Solutions',
      description: 'Cutting-edge approaches to modern business challenges',
      icon: '💡'
    },
    {
      title: 'Trusted Partnership',
      description: 'Long-term relationships built on mutual success',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-purple-800">
              Excellence Rooted in Regional Understanding
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In the dynamic landscape of the GCC, we recognized that businesses needed more than just services – they needed a partner who understood the unique cultural and economic fabric of the region.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <img
              src="/src/assets/images/aboutimg/group-business-people-working-together-meeting-room.jpg"
              alt="Our Team"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;