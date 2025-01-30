import React from 'react';
import styles from './PartnersCarousel.module.css';

// Import images
import sharjahImg from '../assets/images/1-sharja.png';
import duqueImg from '../assets/images/duque-Auth2.jpeg';
import ifzaImg from '../assets/images/IFZA-Auth.jpeg';
import shamsImg from '../assets/images/Shams-Auth.jpeg';
import rakzImg from '../assets/images/Rakz-Auth.jpeg';

const PartnersCarousel: React.FC = () => {
  const images = [
    { src: sharjahImg, alt: 'Sharjah' },
    { src: duqueImg, alt: 'Duque' },
    { src: ifzaImg, alt: 'IFZA' },
    { src: shamsImg, alt: 'Shams' },
    { src: rakzImg, alt: 'Rakz' },
  ];

  // Duplicate images to create seamless loop
  const allImages = [...images, ...images];

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>OUR FREE ZONE SERVICE CHANNEL PARTNERS</h2>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {allImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={styles.carouselImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;