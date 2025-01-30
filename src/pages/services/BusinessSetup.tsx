import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ServiceHero from "../../components/ServiceHero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import businessSetupVideo from "../../assets/video/optimized/bussetup.mp4";
import BusinessTabs from "../../components/BusinessTabs";
import PartnersCarousel from "../../components/PartnersCarousel";
import { Helmet } from 'react-helmet-async';

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 px-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-left">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const BusinessSetup: React.FC = () => {
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

  const faqData = [
    {
      question:
        "What is the difference between Mainland, Free Zone, and Offshore company setups in Dubai?",
      answer:
        "Mainland companies allow operations anywhere in Dubai and the UAE and are suitable for retail and government contracts. Free Zone companies enjoy tax benefits, various combination of activities on license, full ownership, and streamlined processes but have restrictions on operating outside the Free Zone. Offshore companies are primarily for asset protection and international trade, without a physical office in Dubai.",
    },
    {
      question: "What are the steps to set up a Free Zone company in Dubai?",
      answer:
        "Choose a Free Zone based on your business activity. Decide on a business structure and name. Apply with the required documents. Obtain pre-approvals and pay fees. Receive your license and establish an office (if applicable). Our expertise will hand hold you accurately with the appropriate advice in terms of structure, justification and activities.",
    },
    {
      question:
        "Do I need a local sponsor to set up a business in Dubai Mainland?",
      answer:
        "Yes, for certain activities in Mainland companies its mandate to have a local Emirati sponsor holding 51% ownership. However, recent reforms allow 100% foreign ownership for certain activities. We shall advise you appropriately on the basis of activity and license type.",
    },
    {
      question:
        "What are the advantages of doing business in Dubai Free Zones?",
      answer:
        "100% foreign ownership. Tax exemptions on corporate and personal income. Simplified company setup and licensing processes. Full repatriation of profits and capital. Combination of Multiple activities, Strategic locations and industry-specific zones.",
    },
    {
      question: "How long does it take to set up a company in Dubai?",
      answer:
        "Setting up a business in Dubai Mainland typically takes 5 working days depending on the activity and approvals required. For Free Zone and Offshore company setup time taken is 10- 15 working days, depending on your activity and freezone jurisdiction, provided all documents are in order.",
    },
  ];

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
      <Helmet>
        <title>Business Setup in Dubai UAE | Company Formation Services</title>
        <meta 
          name="description" 
          content="Expert business setup services in Dubai, UAE. Start your Mainland, Free Zone, or Offshore company with our comprehensive business formation solutions. Free consultation." 
        />
        <meta 
          name="keywords" 
          content="business setup Dubai, company formation UAE, free zone setup, mainland business Dubai, offshore company UAE" 
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business Setup in Dubai UAE | Company Formation Services" />
        <meta 
          property="og:description" 
          content="Expert business setup services in Dubai, UAE. Start your Mainland, Free Zone, or Offshore company with our comprehensive business formation solutions. Free consultation." 
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Setup in Dubai UAE | Company Formation Services" />
        <meta 
          name="twitter:description" 
          content="Expert business setup services in Dubai, UAE. Start your Mainland, Free Zone, or Offshore company with our comprehensive business formation solutions. Free consultation." 
        />
      </Helmet>

      <ServiceHero
        title="Set up your business in Dubai, UAE"
        subtitle="We make it Simple, and Seamless"
        description="Navigate Dubai's diverse business landscape with expert guidance from Luminous Bluewaters Corporate Services. Whether you're considering a Freezone, Mainland, or Offshore setup, we ensure your journey from vision to execution is seamless and successful."
        videoSource={businessSetupVideo}
      />

      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        <BusinessTabs />
        <PartnersCarousel />

        <CTAButton text="Start Your Business Setup Journey" delay={1.0} />

        {/* FAQ Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-lg">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      </Container>
    </Box>
  );
};

export default BusinessSetup;