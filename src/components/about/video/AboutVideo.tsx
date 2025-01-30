import React from 'react';
import { motion } from 'framer-motion';
import corporateVideo from '../../../assets/video/optimized/whylbc.mp4';
import OptimizedVideo from '../../Common/OptimizedVideo';

const AboutVideo: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#5D4A82] to-[#856BAE]">
      <div className="container mx-auto px-4 py-16 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Choose Luminous Bluewaters?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We combine local expertise with global standards to deliver comprehensive business solutions. Our dedicated team ensures your business success through personalized service and innovative approaches.
            </p>
          </motion.div>

          {/* Right Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="aspect-video">
                <OptimizedVideo
                  src={corporateVideo}
                  className="w-full h-full object-cover rounded-2xl"
                  priority={true}
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5D4A82]/20 to-transparent pointer-events-none rounded-2xl"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C4B5FD]/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#856BAE]/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;