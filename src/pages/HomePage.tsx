import React from "react";
import PerspectiveHero from "../components/home/hero/PerspectiveHero";
import WhyUsHome from "../components/sections/WhyUsHome";
import IdealPartner3D from "../components/sections/IdealPartner3D";
import Locations from "../components/sections/Locations";
import FloatingCTA from "../components/Common/FloatingCTA";
import useScrollToTop from "../hooks/useScrollToTop";
import TestimonialCarousel from "../components/home/hero/TestimonialCarousel";
import "../components/home/hero/TestimonialCarousel.css";

const HomePage = () => {
  useScrollToTop();
  return (
    <>
      <PerspectiveHero />
      <WhyUsHome />

      <IdealPartner3D />
      <Locations />
      <FloatingCTA />
    </>
  );
};

export default HomePage;
