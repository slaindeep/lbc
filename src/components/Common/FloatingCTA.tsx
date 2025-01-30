import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { 
  CalendarCheck, 
  Lightbulb,
  Users2,
  MapPin
} from 'lucide-react';
import Button from '../ui/Buttons';

interface CTAContent {
  text: string;
  link: string;
  section: string;
  icon: React.ElementType;
}

const FloatingCTA = () => {
  const navigate = useNavigate();
  
  const ctaContent: CTAContent[] = [
    {
      text: 'Schedule a Free Call',
      link: '/get-started',
      section: 'hero',
      icon: CalendarCheck
    },
    {
      text: 'Explore Solutions',
      link: '/services',
      section: 'why-us',
      icon: Lightbulb
    },
    {
      text: 'Partner With Us',
      link: '/contact',
      section: 'ideal-partner',
      icon: Users2
    },
    {
      text: 'Find Us',
      link: '/contact',
      section: 'locations',
      icon: MapPin
    }
  ];

  const [activeCTA, setActiveCTA] = useState<CTAContent>(ctaContent[0]);

  // Create refs for each section
  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [whyUsRef, whyUsInView] = useInView({ threshold: 0.5 });
  const [idealRef, idealInView] = useInView({ threshold: 0.5 });
  const [locationsRef, locationsInView] = useInView({ threshold: 0.5 });

  // Update active CTA based on visible section
  useEffect(() => {
    if (heroInView) setActiveCTA(ctaContent[0]);
    else if (whyUsInView) setActiveCTA(ctaContent[1]);
    else if (idealInView) setActiveCTA(ctaContent[2]);
    else if (locationsInView) setActiveCTA(ctaContent[3]);
  }, [heroInView, whyUsInView, idealInView, locationsInView]);

  const IconComponent = activeCTA.icon;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={activeCTA.text}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="fixed bottom-8 left-8 z-50"
      >
        <Button
          variant="cta"
          size="sm"
          onClick={() => handleNavigation(activeCTA.link)}
          className="flex items-center gap-2 text-lg px-6 py-3"
        >
          <IconComponent className="text-xl" />
          <span>{activeCTA.text}</span>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

// Export the refs to be used in the main layout
export const sectionRefs = {
  heroRef: null,
  whyUsRef: null,
  idealRef: null,
  locationsRef: null
};

export default FloatingCTA;