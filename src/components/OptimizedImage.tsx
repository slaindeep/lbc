import React from 'react';

interface OptimizedImageProps {
  src: string | { desktop: string; mobile: string };
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const desktopSrc = typeof src === 'string' ? src : src.desktop;
  const mobileSrc = typeof src === 'string' ? src : src.mobile;

  return (
    <div className={`relative ${className}`}>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={desktopSrc}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={mobileSrc}
          type="image/webp"
        />
        <img
          src={desktopSrc} // Fallback to desktop version
          alt={alt}
          className="w-full h-full object-cover"
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;