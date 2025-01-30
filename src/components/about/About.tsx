import React from 'react';
import HeroSection from './sections/HeroSection';
import VisionSection from './sections/VisionSection';
import ValuesSection from './sections/ValuesSection';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
      <HeroSection />
      <VisionSection />
      <ValuesSection />
    </div>
  );
};

export default About;