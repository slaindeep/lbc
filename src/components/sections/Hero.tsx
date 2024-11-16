import { motion } from "framer-motion";
import { ChevronRight, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../../components/get-started/common/ImageCarousel";

// Import images
import upwardViewImage from "../../assets/images/abudhabi.jpg";
import beachViewImage from "../../assets/images/dubai2.jpg";
import burjKhalifaImage from "../../assets/images/dubaiskyline.jpg";
import faisaliahImage from "../../assets/images/riyadh.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: upwardViewImage, city: "Abu Dhabi" },
    { src: beachViewImage, city: "Dubai Marina" },
    { src: burjKhalifaImage, city: "Downtown Dubai" },
    { src: faisaliahImage, city: "Riyadh" },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0">
        <ImageCarousel images={images} />
      </div>

      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8"
          >
            <Globe className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Leading Excellence Across GCC
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Transform
            <br />
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              tomorrow together
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Empowering businesses with innovative solutions that blend global
            expertise with deep local insights. Your journey to excellence
            starts here.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/get-started")}
              className="bg-white text-[#5D4A82] px-8 py-4 rounded-lg 
                hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg
                flex items-center gap-2 group"
            >
              Transform Your Business
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
