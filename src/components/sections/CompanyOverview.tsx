import React from 'react';
import { motion } from 'framer-motion';
import TeamMembers from './TeamMembers';

const CompanyOverview: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5D4A82]/5 to-[#856BAE]/5" />
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold text-[#5D4A82] mb-6">
              A Legacy of Excellence
            </h1>
            <p className="text-xl text-gray-600">
              At Luminous Bluewaters Group, we combine decades of expertise with innovative solutions to drive your success. Our team of industry leaders brings together diverse skills and deep knowledge to deliver exceptional results across all our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamMembers />

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-16 text-[#5D4A82] text-center">
              Our IDEAL Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  letter: "I",
                  title: "Innovative & Integrity",
                  description: "We are Innovative in our approach while maintaining Integrity"
                },
                {
                  letter: "D",
                  title: "Dependability",
                  description: "We remain Dependable in our commitments"
                },
                {
                  letter: "E",
                  title: "Empowering",
                  description: "We focus on Empowering our clients and team"
                },
                {
                  letter: "A",
                  title: "Accountability",
                  description: "We take Accountability for our actions"
                },
                {
                  letter: "L",
                  title: "Leadership",
                  description: "We demonstrate Leadership in our industry"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-gray-50 rounded-xl shadow-lg"
                >
                  <div className="text-3xl font-bold text-[#5D4A82] mb-3">
                    {value.letter}
                  </div>
                  <h3 className="text-xl font-semibold text-[#5D4A82] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanyOverview;