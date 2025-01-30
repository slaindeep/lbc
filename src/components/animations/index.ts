export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const slideIn = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1 }
};

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1 }
};

export const parallaxY = (scrollY: any, inputRange: number[], outputRange: number[]) => ({
  y: scrollY.interpolate({
    inputRange,
    outputRange,
  }),
});