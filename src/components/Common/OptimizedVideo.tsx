import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  onError?: (error: any) => void;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  className = '',
  style = {},
  priority = false,
  onError,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
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
    if (priority) {
      setIsVisible(true);
    }
  }, [priority]);

  useEffect(() => {
    // Log when the video source changes
    console.log('Video source:', src);
  }, [src]);

  const handleLoad = () => {
    console.log('Video loaded successfully');
    setIsLoaded(true);
  };

  const handleError = (e: any) => {
    console.error('Video loading error:', e);
    if (onError) {
      onError(e);
    }
  };

  return (
    <div className="relative">
      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{
          ...style,
          transition: 'opacity 0.5s ease-in-out',
        }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        onLoadedData={handleLoad}
        onError={handleError}
      >
        {(isVisible || priority) && <source src={src} type="video/mp4" />}
      </motion.video>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-inherit" />
      )}
    </div>
  );
};

export default OptimizedVideo;