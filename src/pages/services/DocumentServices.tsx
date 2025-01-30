import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import ServiceHero from "../../components/ServiceHero";
import videoSource from "../../assets/video/optimized/tax.mp4";

function DocumentServices() {
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

  // Common List Component
  const AnimatedList = ({ items }: { items: string[] }) => (
    <Box component="ul" sx={{ pl: 2, listStyleType: "none" }}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          className="mb-4 flex items-center text-gray-700"
        >
          <Box
            component="span"
            sx={{
              width: "8px",
              height: "8px",
              backgroundColor: "#8B5CF6",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "1rem",
            }}
          />
          <span className="text-base leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </Box>
  );

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
      className="text-2xl font-bold text-[#2D1B69] mt-8 mb-4"
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
                    shadow-lg hover:shadow-xl"
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
        title="Document Clearing Services"
        subtitle="Handling Documents with Precision"
        description="We provide seamless Document Clearing Services to ensure your business operations are smooth and compliant. Our team handles all your documentation needs with precision and efficiency."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 text-lg leading-relaxed mb-8"
        >
          <SectionHeader title="Attestation and Notarization" delay={0.3} />
          <p>
            Official documentation often requires authentication for legal
            validity in the UAE and abroad. We manage the attestation and
            notarization of your documents, ensuring they meet all legal and
            regulatory requirements.
          </p>
        </motion.div>
        <Typography variant="h6" gutterBottom>
          Services Include:
        </Typography>

        <AnimatedList
          items={[
            "Attestation from government authorities",
            "Notarization of legal documents",
            "Embassy and consulate attestations",
            "Document verification",
          ]}
        />

        <SectionHeader title="Translation Services" delay={0.6} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-gray-700 text-lg leading-relaxed mb-8"
        >
          <p>
            Our certified translation services ensure accuracy, professionalism,
            and compliance with legal standards.
          </p>
        </motion.div>
        <Typography variant="h6" gutterBottom>
          We Provide:
        </Typography>
        <AnimatedList
          items={[
            "Legal document translations",
            "Certified translations for immigration and business purposes",
            "Multilingual support for contracts, agreements, and official records",
            "Compliance with UAE and international requirements",
          ]}
        />

        <Box sx={{ mt: 12, textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-2xl font-bold text-[#2D1B69] mb-6"
          >
            Let Us Handle Your Documentation
          </motion.h2>
          <CTAButton text="Get Started Today!" delay={1.1} />
        </Box>
      </Container>
    </Box>
  );
}

export default DocumentServices;
