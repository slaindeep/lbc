import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ServiceHero from "../components/ServiceHero";
import videoSource from "../assets/video/optimized/whylbc.mp4";
import {
  ArrowRight,
  Building2,
  Briefcase,
  Calculator,
  Scale,
  Users,
  Laptop,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

const About = () => {
  const navigate = useNavigate();
  useScrollToTop();

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
      },
    }),
  };

  const services = [
    {
      title: "Business Setup",
      description: "Streamlined guidance to establish your business with the appropriate jurisdiction and optimal legal structure.",
      icon: <Building2 className="w-8 h-8 text-[#8B5CF6] mb-4" />,
    },
    {
      title: "Company Restructure",
      description: "Expertise in mergers & acquisitions, legal reorganization, divestments, and financial restructuring.",
      icon: <Briefcase className="w-8 h-8 text-[#8B5CF6] mb-4" />,
    },
    {
      title: "Accounting, Auditing & Tax",
      description: "Ensuring financial precision, regulatory compliance, and expert advisory on VAT and Corporate Tax.",
      icon: <Calculator className="w-8 h-8 text-[#8B5CF6] mb-4" />,
    },
    {
      title: "Legal Services",
      description: "Specializing in corporate structuring, contract drafting and negotiation, employment law, intellectual property, corporate governance, AML compliance, dispute resolution, and commercial advisory.",
      icon: <Scale className="w-8 h-8 text-[#8B5CF6] mb-4" />,
    },
    {
      title: "HR & PRO Services",
      description: "Comprehensive HR advisory, visa facilitation, and immigration-related administrative support.",
      icon: <Users className="w-8 h-8 text-[#8B5CF6] mb-4" />,
    },
    {
      title: "Technology & Digital Transformation",
      description: "Empowering businesses with innovative technologies and digital solutions to ensure competitiveness in a digital-first economy.",
      icon: <Laptop className="w-8 h-8 text-[#8B5CF6] mb-4" />,
    },
  ];

  const partners = [
    {
      name: "Luminous Legal Partners",
      location: "UAE & India",
      description: "A trusted provider of legal solutions since 2013.",
      logo: "/images/services/luminouslogo.png",
    },
    {
      name: "RKA Global Chartered Accountants LLC",
      location: "UAE & India",
      description: "Financial specialists serving businesses since 1994.",
      logo: "/images/services/rkalogo.png",
    },
    {
      name: "Business Pros",
      location: "UAE",
      description: "Renowned experts in company formation, HR, and PRO services, now rebranded as Luminous Bluewaters Consultancy.",
      logo: "/images/services/busproslogo.png",
    },
    {
      name: "Lucem Analytics",
      location: "USA",
      description: "Pioneers in digital transformation and innovation.",
      logo: "/images/services/LucemLogo2025.png",
    },
  ];

  // Common Section Header Component
  const SectionHeader = ({
    title,
    delay = 0,
  }: {
    title: string;
    delay?: number;
  }) => (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="text-2xl font-bold text-[#2D1B69] mt-12 mb-6"
    >
      {title}
    </motion.h3>
  );

  // Common CTA Button Component
  const CTAButton = ({ text, delay = 0 }: { text: string; delay?: number }) => (
    <Box sx={{ mt: 6, display: "flex", justifyContent: "center", gap: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        <button
          onClick={() => navigate("/get-started")}
          className="group relative px-8 py-4 rounded-full bg-[#C4B5FD] text-[#2D1B69] font-medium 
                    border-2 border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white
                    transition-all duration-300 transform hover:scale-105
                    shadow-lg hover:shadow-xl text-lg"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {text}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </motion.div>
    </Box>
  );

  return (
    <Box>
      <ServiceHero
        title="About Us"
        subtitle="Your Trusted Partner for Business Success"
        description="Empowering businesses across the UAE with integrated, end-to-end corporate solutions since 2022."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        {/* Who We Are section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader title="Who We Are" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Luminous Bluewaters Consultancy, established in 2022, is dedicated to empowering businesses across the United Arab Emirates to unlock their full potential. By uniting the capabilities of four distinguished entities under a single platform, we deliver integrated, end-to-end corporate solutions tailored to every stage of your business journey.
          </motion.p>
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our suite of services spans Business setup, Accounting, Legal Consultancy, Technology and beyond, positioning us as a trusted partner for sustainable growth. With a wealth of combined expertise, we support both emerging startups and established enterprises, equipping them to thrive in an ever-evolving and competitive market landscape.
          </motion.p>
        </motion.div>

        {/* Partner section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeader title="Our Network of Companies" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Luminous Bluewaters Consultancy may be a new name, but it is driven by a strategic alliance of industry leaders with decades of global experience. This unique collaboration combines international reach with deep local expertise, delivering exceptional value to clients worldwide.
          </motion.p>

          <Box sx={{ pt: 10, pb: 4 }}>
            <Grid container spacing={8} alignItems="center" justifyContent="center">
              {partners.map((partner, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name}`}
                      className="w-full max-w-[280px] h-auto object-contain mb-4"
                    />
                    <p className="text-[#8B5CF6] text-lg font-medium text-center mt-2">
                      {partner.location}
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed text-center mt-2">
                      {partner.description}
                    </p>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Services section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeader title="What We Do" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-8">
            Starting a business in a middle eastern jurisdiction presents both unparalleled opportunities and unique challenges. While the region's dynamic, globalized market offers immense potential, navigating its complexities requires strategic foresight and expert guidance. That's where{" "}
            <span className="font-medium">Luminous Bluewaters Consultancy</span>{" "}
            comes in.
          </motion.p>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className="bg-white p-6 rounded-xl border-2 border-[#C4B5FD] hover:border-[#8B5CF6] transition-all duration-300 h-full flex flex-col"
                  style={{ minHeight: "250px" }}
                >
                  <div className="flex items-start">
                    {service.icon}
                    <h3 className="text-xl font-bold text-[#2D1B69] mb-3 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mt-4">
                    {service.description}
                  </p>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ pt: 10, pb: 4 }}>
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="visible"
              custom={6}
              className="text-center"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                Our integrated approach ensures your business doesn't just launch—it flourishes. Whether you're building a new venture or scaling an established operation, we deliver tailored, innovative solutions designed to drive your long-term success.
              </p>

              <CTAButton text="Start Your Journey With Us" delay={1.0} />
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;