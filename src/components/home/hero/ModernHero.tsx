import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Globe } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import upwardViewImage from "../../../assets/images/abudhabi.jpg";
import beachViewImage from "../../../assets/images/dubai2.jpg";
import burjKhalifaImage from "../../../assets/images/dubaiskyline.jpg";
import faisaliahImage from "../../../assets/images/riyadh.jpg";

const ModernHero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroContent = useMemo(
    () => [
      {
        id: 1,
        image: upwardViewImage,
        title: "Innovation",
        description: "Where ambition meets excellence",
        caption: "Abu Dhabi",
      },
      {
        id: 2,
        image: beachViewImage,
        title: "Heritage",
        description: "Bridging tradition and future",
        caption: "Dubai Marina",
      },
      {
        id: 3,
        image: burjKhalifaImage,
        title: "Excellence",
        description: "Setting new standards together",
        caption: "Downtown Dubai",
      },
      {
        id: 4,
        image: faisaliahImage,
        title: "Vision",
        description: "Shaping tomorrow's success",
        caption: "Riyadh",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroContent.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#5D4A82] to-[#856BAE]">
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <img
                src={heroContent[currentIndex].image}
                alt={heroContent[currentIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4A82]/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-screen flex flex-col justify-center">
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

            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-8 py-4 rounded-lg 
                hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>

        {/* Location Indicator */}
        <div className="absolute bottom-12 left-4 right-4">
          <div className="container mx-auto flex justify-between items-center text-white/80">
            <p className="text-sm font-medium">
              {heroContent[currentIndex].caption}
            </p>
            <div className="flex gap-2">
              {heroContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
