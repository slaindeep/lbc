import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ServiceHero from "../../components/ServiceHero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import videoSource from "../../assets/video/optimized/audit.mp4";

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

const AuditServices: React.FC = () => {
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
      question: "Who can conduct an audit for a business in Dubai?",
      answer:
        "Audits in Dubai must be conducted by a licensed audit firm accredited by the UAE Ministry of Economy or Dubai Economic Department. Only qualified professionals, such as Chartered Accountants (CAs), Certified Public Accountants (CPAs), or Certified Internal Auditors (CIAs), are authorized to carry out audits, ensuring compliance with local laws and regulations.",
    },
    {
      question: "What is included in your audit and assurance services?",
      answer:
        "Our audit and assurance services encompass financial statement audits, compliance audits, and independent reviews to provide stakeholders with accurate, reliable, and transparent financial information.",
    },
    {
      question:
        "What is the purpose of a statutory audit, and is it mandatory in Dubai?",
      answer:
        "A statutory audit is a legally required examination of a company's financial records to ensure compliance with local regulations and accounting standards. In Dubai, statutory audits are mandatory for most companies registered in free zones and certain mainland businesses.",
    },
    {
      question: "How does an internal audit benefit my business?",
      answer:
        "An internal audit helps identify risks, improve internal controls, and ensure operational efficiency. It is a proactive approach to safeguarding assets and achieving organizational objectives.",
    },
    {
      question: "How often should my business conduct an internal audit?",
      answer:
        "The frequency of internal audits depends on the size, complexity, and industry of your business. We recommend regular audits, such as quarterly or annually, to address risks and improve operational processes.",
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
      <ServiceHero
        title="Ensure Transparency with Reliable Audit & Assurance Services"
        subtitle="Audit & Assurance Services"
        description="At Luminous Bluewaters Consultancy, we partner with RKA, the registered auditors in Dubai, to provide comprehensive services that support your company's financial health. We specialize in offering a wide range of auditing services designed to help businesses maintain compliance, optimize operations, and achieve financial transparency."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        {/* Statutory Audits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader title="Statutory Audits" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            In the UAE, any company with a turnover exceeding 50 million AED
            annually is required to conduct statutory audits. Additionally,
            Qualifying Freezone companies must perform statutory audits
            regardless of their turnover.
          </motion.p>
          <AnimatedList
            items={[
              "Comprehensive financial statement audits",
              "Regulatory compliance reviews",
              "Risk assessment and evaluation",
              "Financial reporting accuracy verification",
              "Stakeholder reporting and communication",
            ]}
          />
        </motion.div>

        {/* Internal Audits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeader title="Internal Audits" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Strengthen your internal controls and operational efficiency with
            our internal audit services. Our experts assess your systems,
            processes, and controls to identify weaknesses and recommend
            improvements.
          </motion.p>
          <AnimatedList
            items={[
              "Process efficiency evaluation",
              "Internal control assessment",
              "Risk management review",
              "Compliance monitoring",
              "Performance optimization recommendations",
            ]}
          />
        </motion.div>

        {/* Assurance Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeader title="Assurance Services" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our assurance services go beyond compliance to provide confidence in
            your financial reporting and operational practices. We offer various
            assurance engagements to enhance transparency and build trust.
          </motion.p>
          <AnimatedList
            items={[
              "Financial statement reviews",
              "Agreed-upon procedures",
              "Audit readiness assessments",
              "Regulatory compliance assurance",
              "Stakeholder reporting assurance",
            ]}
          />
        </motion.div>

        {/* Compilation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionHeader title="Compilation Services" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our compilation services assist businesses in preparing consolidated
            financial statements meeting accounting standards. We help you
            present a true and fair view of your financial position.
          </motion.p>
          <AnimatedList
            items={[
              "Financial statement preparation",
              "Accounting standards compliance",
              "Consolidation services",
              "Financial reporting assistance",
              "Documentation support",
            ]}
          />
        </motion.div>

        {/* Due Diligence Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SectionHeader title="Due Diligence" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Maximize the value of your business decisions with our comprehensive
            due diligence services. We provide thorough assessments to identify
            risks, opportunities, and potential issues.
          </motion.p>
          <AnimatedList
            items={[
              "Financial due diligence",
              "Operational assessment",
              "Risk evaluation",
              "Transaction support",
              "Strategic analysis",
            ]}
          />
        </motion.div>

        <CTAButton text="Get Started with Our Audit Services" delay={1.0} />

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

export default AuditServices;
