import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import meetingImg from '../../assets/images/aboutimg/group-business-people-working-together-meeting-room.jpg';
import contractImg from '../../assets/images/aboutimg/successful-business-partners-discussing-contract.jpg';
import strategyImg from '../../assets/images/aboutimg/top-view-co-workers-planning-strategy.jpg';
import officeImg from '../../assets/images/aboutimg/office2.jpg';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

// Duplicate the services array to create a seamless loop effect
const baseServices: ServiceCard[] = [
  {
    title: 'Comprehensive Solutions',
    description: 'One-stop solution for all your business needs, from legal to financial services.',
    image: meetingImg
  },
  {
    title: 'Local Expertise',
    description: 'Deep understanding of GCC markets and regulations, ensuring compliant operations.',
    image: contractImg
  },
  {
    title: 'Ethical Standards',
    description: 'Unwavering commitment to integrity and transparency in all our dealings.',
    image: strategyImg
  },
  {
    title: 'Client Success',
    description: 'Focused on delivering measurable results and sustainable growth for our clients.',
    image: officeImg
  }
];

// Create an array with duplicated items for seamless looping
const services = [...baseServices, ...baseServices];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds
const TRANSITION_DURATION = 0.75; // seconds

const ServiceCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [direction, setDirection] = React.useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => {
      const next = (prev + 1) % services.length;
      // When we reach the duplicate section, quietly reset to the original
      if (next === baseServices.length) {
        setTimeout(() => {
          setCurrentIndex(0);
        }, TRANSITION_DURATION * 1000);
        return prev;
      }
      return next;
    });
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => {
      if (prev === 0) {
        // Jump to the end of the original set
        setCurrentIndex(baseServices.length - 1);
        return prev;
      }
      return (prev - 1 + services.length) % services.length;
    });
  };

  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }

    if (!isPaused) {
      autoplayTimerRef.current = setTimeout(nextSlide, AUTOPLAY_INTERVAL);
    }
  }, [isPaused, nextSlide]);

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [currentIndex, isPaused, resetAutoplayTimer]);

  const handleManualNavigation = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetAutoplayTimer();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto"
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}>
      <div className="overflow-hidden relative rounded-xl bg-white/10 backdrop-blur-sm p-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: TRANSITION_DURATION, ease: "easeInOut" },
              opacity: { duration: TRANSITION_DURATION/2 }
            }}
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <motion.div 
                className="relative h-64 overflow-hidden rounded-xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: TRANSITION_DURATION }}
              >
                <img 
                  src={services[currentIndex].image} 
                  alt={services[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-[1px]"></div>
              </motion.div>
              <motion.div 
                className="text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: TRANSITION_DURATION }}
              >
                <h3 className="text-2xl font-bold mb-4">{services[currentIndex].title}</h3>
                <p className="text-white/90">{services[currentIndex].description}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => {
            prevSlide();
            resetAutoplayTimer();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 
                     rounded-full p-2 transition-all transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => {
            nextSlide();
            resetAutoplayTimer();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 
                     rounded-full p-2 transition-all transform hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: AUTOPLAY_INTERVAL / 1000,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{ display: isPaused ? "none" : "block" }}
          />
        </div>

        {/* Dots indicator */}
        <div className="absolute -bottom-8 left-0 right-0">
          <div className="flex justify-center gap-2">
            {baseServices.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex % baseServices.length ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;