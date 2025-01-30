import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TestimonialCarousel from '../home/hero/TestimonialCarousel';

interface Card {
  letter: string;
  words: string;
  description: string;
}

const IdealPartner3D = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const idealValues: Card[] = [
    {
      letter: "I",
      words: "Innovative & Integrity",
      description: "We are Innovative in our approach while maintaining Integrity",
    },
    {
      letter: "D",
      words: "Dependability",
      description: "We remain Dependable in our commitments",
    },
    {
      letter: "E",
      words: "Empowering",
      description: "We focus on Empowering our clients and team",
    },
    {
      letter: "A",
      words: "Accountability",
      description: "We take Accountability for our actions",
    },
    {
      letter: "L",
      words: "Leadership",
      description: "We demonstrate Leadership in our industry",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % idealValues.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [idealValues.length]);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Testimonial Carousel */}
        <div className="mb-20 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <TestimonialCarousel />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
            The IDEAL Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our values define who we are and how we work
          </p>
        </motion.div>

        {/* 3D Cards Stack */}
        <div className="relative h-[400px] max-w-lg mx-auto" ref={containerRef}>
          {idealValues.map((value, index) => {
            const isActive = index === activeIndex;
            const zIndex = index === activeIndex ? 50 : 10 - index;
            
            return (
              <motion.div
                key={value.letter}
                className="absolute inset-0 w-full"
                initial={false}
                animate={{
                  rotateY: isActive ? 0 : 180,
                  scale: isActive ? 1 : 0.9,
                  y: isActive ? 0 : -10,
                  zIndex: zIndex,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg h-full flex flex-col items-center justify-center
                  transform-gpu transition-all duration-500 hover:shadow-xl border border-gray-100">
                  <motion.div
                    initial={false}
                    animate={{ scale: isActive ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.6, times: [0, 0.5, 1] }}
                    className="mb-6"
                  >
                    <span className="text-8xl font-bold bg-gradient-to-r from-[#5D4A82] to-[#856BAE] 
                      text-transparent bg-clip-text">
                      {value.letter}
                    </span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#5D4A82] mb-4 text-center">
                    {value.words}
                  </h3>
                  <p className="text-gray-600 text-center text-lg">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {idealValues.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-[#5D4A82] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealPartner3D;