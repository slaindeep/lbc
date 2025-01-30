import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Typography } from "../../../components/ui/Typography";
import homeThumbnail from "../../../assets/video/thumbnails/lbchome_thumb.jpg";
import homeVideo from "../../../assets/video/optimized/lbchome2.mp4";
import "./PerspectiveHero.css";
import "./TestimonialCarousel.css";

const PerspectiveHero: React.FC = () => {
  const navigate = useNavigate();
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    "Business Setup",
    "Accounting",
    "Audit",
    "Tax",
    "Legal",
    "HR & PRO",
    "Data Analytics",
  ];
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedServices, setDisplayedServices] = useState<string[]>([]);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.load();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentServiceIndex < services.length) {
      const currentService = services[currentServiceIndex];
      if (currentCharIndex <= currentService.length) {
        const timer = setTimeout(() => {
          const partialService = currentService.slice(0, currentCharIndex);
          setDisplayedServices((prev) => {
            const newServices = [...prev];
            newServices[currentServiceIndex] = partialService;
            return newServices;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentServiceIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    } else {
      setIsTypingComplete(true);
    }
  }, [currentServiceIndex, currentCharIndex, services]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "LBC Corporate Services Overview",
    description:
      "Transform Tomorrow Together - LBC Corporate Services Business Video",
    thumbnailUrl: homeThumbnail,
    uploadDate: "2024-01-07",
    contentUrl: homeVideo,
    duration: "PT1M",
  };

  return (
    <section className="hero-section">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          autoPlay={isVisible}
          muted
          loop
          playsInline
          className="video-element"
          onLoadedData={handleVideoLoad}
          preload="none"
          poster={homeThumbnail}
        >
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVideoLoaded ? 1 : 0,
            y: isVideoLoaded ? 0 : 20,
          }}
          transition={{ duration: 0.8 }}
          className="text-content"
        >
          <Typography
            variant="display"
            color="white"
            className="mb-8 hero-text-container text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            component="h1"
          >
            <div>Transform</div>
            <div>Tomorrow</div>
            <div>Together</div>
          </Typography>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="services-text text-xl md:text-2xl"
          >
            {displayedServices.map((service, index) => (
              <React.Fragment key={index}>
                <Typography
                  variant="body"
                  color="white"
                  component="span"
                  className="service-item"
                >
                  {service}
                </Typography>
                {index < displayedServices.length - 1 && (
                  <Typography
                    variant="body-sm"
                    color="white"
                    component="span"
                    className="service-separator"
                  >
                    •
                  </Typography>
                )}
              </React.Fragment>
            ))}
            <span
              className={`cursor ${isTypingComplete ? "animate-blink" : ""}`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <button
              onClick={() => navigate("/get-started")}
              className="modern-gradient-button px-8 py-3 rounded-lg text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-500"
            >
              <Typography
                variant="body"
                color="white"
                component="span"
                className="flex items-center justify-center gap-2 text-lg"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Typography>
            </button>
          </motion.div>

          {/* Testimonial Carousel
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isTypingComplete ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TestimonialCarousel />
          </motion.div> */}
        </motion.div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify(videoStructuredData)}
      </script>
    </section>
  );
};

export default PerspectiveHero;
