import React from 'react';
import styles from './ServiceHero.module.css';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  videoSource: string;
}

function ServiceHero({ title, subtitle, description, videoSource }: ServiceHeroProps) {
  return (
    <div className={styles.heroContainer}>
      <video
        autoPlay
        muted
        loop
        className={styles.videoBackground}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ServiceHero;