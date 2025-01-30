import React, { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import videoSource from "../../assets/video/optimized/compliance.mp4";
import ServiceHero from "../../components/ServiceHero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./ComplianceServices.module.css";

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

function ComplianceServices() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useScrollToTop();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        "What is a legal health checkup, and why is it important for businesses in the UAE?",
      answer:
        "A legal health checkup is a comprehensive review of a company's legal, regulatory, and contractual frameworks to ensure compliance with UAE laws, regulations, and relevant international standards. This proactive assessment identifies potential risks, resolves non-compliance issues, and strengthens internal processes, protecting the business from penalties, litigation, and operational disruptions.",
    },
    {
      question:
        "What are the legal requirements for importing goods into the UAE from other countries?",
      answer:
        "To import goods into the UAE, businesses must hold a valid trade license and register with the UAE Federal Customs Authority. Key documentation includes a commercial invoice, packing list, certificate of origin, and bill of lading. Certain goods may require additional permits or clearances from relevant authorities.",
    },
    {
      question:
        "Who needs to register for UAE corporate tax and what are the fines?",
      answer:
        "Businesses operating in the UAE, including free zone entities, must register for Corporate Tax if their annual net profit exceeds AED 375,000, with a standard tax rate of 9%. Profits below AED 375,000 are taxed at 0%. Non-compliance penalties include AED 10,000 for failing to register, AED 1,000 for late filing, and fines of 5% to 50% of unpaid tax for incorrect returns.",
    },
    {
      question: "Who is required to comply with AML regulations in the UAE?",
      answer:
        "AML regulations apply to all financial institutions and designated non-financial businesses and professions (DNFBPs), including real estate brokers, accountants, auditors, legal consultants, dealers in precious stones and metals, trust and corporate service providers, and virtual asset service providers. These entities must implement customer due diligence measures and report suspicious transactions.",
    },
    {
      question:
        "What are the data privacy and personal data compliance requirements for companies in UAE?",
      answer:
        "Companies in the UAE must comply with data privacy regulations, including the UAE Personal Data Protection Law (PDPL), which aligns with global frameworks like the GDPR to safeguard personal data and promote responsible data handling.",
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
    <div className={styles.complianceContainer}>
      <ServiceHero
        title="Expert Legal Guidance to Keep Your Business Risk-Free"
        subtitle="Compliance Services"
        description="At Luminous Bluewaters Consultancy, we provide comprehensive compliance solutions tailored to your business needs. Our legal experts ensure you stay ahead of regulatory requirements, fostering trust and sustainability in your operations."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" className={styles.sectionContainer}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Compliance services tabs"
          >
            <Tab label="Regulatory Affairs" />
            <Tab label="Corporate Governance" />
            <Tab label="AML Compliance" />
            <Tab label="ESG Services" />
            <Tab label="Taxation" />
          </Tabs>
        </Box>

        {/* Regulatory Affairs Tab */}
        <TabPanel value={value} index={0}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#2D1B69] mb-6"
          >
            Compliance & Regulatory Affairs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            We provide comprehensive support to ensure your business adheres to
            local and international compliance standards, mitigating risks and
            fostering seamless operations.
          </motion.p>

          <SectionHeader title="Our Services Include:" delay={0.4} />
          <AnimatedList
            items={[
              "Regulatory compliance assessment",
              "Risk management frameworks",
              "Compliance monitoring and reporting",
              "Policy development and implementation",
              "Regulatory updates and guidance",
            ]}
          />

          <CTAButton text="Ensure Regulatory Compliance" delay={1.0} />
        </TabPanel>

        {/* Corporate Governance Tab */}
        <TabPanel value={value} index={1}>
          <Typography variant="h4" gutterBottom>
            Corporate Structuring & Governance
          </Typography>

          <Typography paragraph>
            Enhance operational efficiency and ensure regulatory compliance with
            our tailored corporate structuring and governance solutions.
          </Typography>

          <SectionHeader title="Key Focus Areas:" delay={0.3} />
          <AnimatedList
            items={[
              "Organizational framework design",
              "Board practice refinement",
              "Legal responsibility fulfillment",
              "Corporate transparency protocols",
              "Governance structure optimization",
            ]}
          />

          <CTAButton text="Strengthen Your Governance" delay={1.0} />
        </TabPanel>

        {/* AML Compliance Tab */}
        <TabPanel value={value} index={2}>
          <Typography variant="h4" gutterBottom>
            Anti-Money Laundering (AML)
          </Typography>

          <Typography paragraph>
            Safeguard your organization from financial crimes with our
            comprehensive AML solutions, ensuring compliance across multiple
            jurisdictions.
          </Typography>

          <SectionHeader title="Our AML Services:" delay={0.3} />
          <AnimatedList
            items={[
              "Policy development and implementation",
              "Risk assessment and management",
              "Compliance program development",
              "Transaction monitoring systems",
              "Staff training and development",
            ]}
          />

          <CTAButton text="Strengthen Your AML Compliance" delay={1.0} />
        </TabPanel>

        {/* ESG Services Tab */}
        <TabPanel value={value} index={3}>
          <Typography variant="h4" gutterBottom>
            Environmental, Social, and Governance (ESG)
          </Typography>

          <Typography paragraph>
            Drive long-term value by aligning your business with sustainable
            practices and meeting stakeholder expectations.
          </Typography>

          <SectionHeader title="ESG Solutions:" delay={0.3} />
          <AnimatedList
            items={[
              "ESG strategy development",
              "Implementation support",
              "Performance reporting",
              "Stakeholder engagement",
              "Sustainability compliance",
            ]}
          />

          <CTAButton text="Enhance Your ESG Impact" delay={1.0} />
        </TabPanel>

        {/* Taxation Tab */}
        <TabPanel value={value} index={4}>
          <Typography variant="h4" gutterBottom>
            Taxation Services
          </Typography>

          <Typography paragraph>
            Ensure your business remains compliant with evolving tax regulations
            while optimizing your tax planning strategy.
          </Typography>

          <SectionHeader title="Our Tax Services:" delay={0.3} />
          <AnimatedList
            items={[
              "Corporate tax compliance",
              "VAT registration and compliance",
              "Double Taxation Avoidance",
              "Tax planning and optimization",
              "International tax treaty guidance",
            ]}
          />

          <CTAButton text="Optimize Your Tax Strategy" delay={1.0} />
        </TabPanel>

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
    </div>
  );
}

export default ComplianceServices;
