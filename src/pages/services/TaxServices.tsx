import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ServiceHero from "../../components/ServiceHero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import videoSource from "../../assets/video/optimized/tax.mp4";

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

const TaxServices: React.FC = () => {
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
      question: "What is the process for VAT registration?",
      answer:
        "We assist businesses with VAT registration by preparing the necessary documents, ensuring compliance with regulatory requirements, and submitting the application to the relevant tax authority.",
    },
    {
      question: "How can you help with corporate tax management?",
      answer:
        "Our corporate tax services include tax planning, compliance, filing corporate tax returns, and minimizing liabilities through strategic tax solutions.",
    },
    {
      question:
        "What documents are required for filing a corporate tax return?",
      answer:
        "To file a corporate tax return in Dubai, businesses are generally required to provide the following documents: Financial Statements, Schedules, Other information as required. It's essential to maintain accurate and up-to-date records to ensure compliance with the Federal Tax Authority's (FTA) requirements and facilitate a smooth tax filing process.",
    },
    {
      question:
        "Who is eligible for corporate tax exemptions, and how can companies claim them?",
      answer:
        "Corporate tax exemptions depend on your company's structure and investments. We guide you in identifying eligible exemptions and claiming them efficiently.",
    },
    {
      question: "What VAT tax services do you provide?",
      answer:
        "We offer comprehensive VAT-related services, including VAT registration, compliance, filing returns, and addressing VAT-related disputes or audits.",
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
        title="Simplify Compliance, Maximize Savings"
        subtitle="Expert Tax Solutions"
        description="We specialize in helping businesses manage corporate tax obligations, optimize tax planning strategies, and ensure compliance with VAT regulations. Our experienced team provides tailored solutions for corporate tax, tax planning, VAT, and tax residency certificates."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        {/* Corporate Tax Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader title="Corporate Tax Services" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Navigating corporate tax in today's business environment requires
            in-depth knowledge of local and international tax laws. In UAE,
            Companies formed after March 1, 2024, must register for corporate
            tax within three months of incorporation. Offshore companies are
            exempt.
          </motion.p>
          <AnimatedList
            items={[
              "Expert guidance on UAE corporate tax regulations",
              "Corporate tax registration assistance",
              "Tax compliance and reporting",
              "Financial statement preparation",
              "Ongoing tax advisory services",
            ]}
          />
        </motion.div>

        {/* Tax Planning Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeader title="Tax Planning" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Effective tax planning is crucial for businesses looking to reduce
            tax exposure and maximize profitability. We provide personalized
            strategies to reduce tax exposure through effective income tax, VAT,
            and transfer pricing planning.
          </motion.p>
          <AnimatedList
            items={[
              "Strategic tax planning and optimization",
              "Tax exposure assessment and reduction",
              "Transfer pricing strategies",
              "Income tax planning",
              "Tax-efficient business structuring",
            ]}
          />
        </motion.div>

        {/* VAT Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeader title="VAT Filing & VAT Registration" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Navigating Value Added Tax (VAT) can be challenging, particularly
            for businesses operating across multiple jurisdictions. VAT Filing
            and VAT Registration are mandatory for companies with turnover above
            AED 375,000 and voluntary for turnovers over AED 187,500.
          </motion.p>
          <AnimatedList
            items={[
              "Seamless VAT registration assistance",
              "Accurate VAT return preparation and filing",
              "VAT audit support and dispute resolution",
              "Compliance monitoring and advisory",
              "Cross-border VAT management",
            ]}
          />
        </motion.div>

        {/* Tax Residency Certificates Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionHeader title="Tax Residency Certificates" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Obtaining a tax residency certificate is essential for businesses
            involved in international trade and cross-border transactions. We
            assist companies in securing tax residency certificates to benefit
            from tax treaties and reduce withholding taxes on foreign income.
          </motion.p>
          <AnimatedList
            items={[
              "Tax residency certificate application support",
              "International tax treaty guidance",
              "Cross-border transaction planning",
              "Withholding tax optimization",
              "Documentation and compliance assistance",
            ]}
          />
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SectionHeader title="Why Choose Us?" />
          <AnimatedList
            items={[
              "Expertise: Our team includes finance professionals with deep knowledge of UAE tax laws",
              "Personalized Service: We provide customized solutions to meet your specific needs",
              "Comprehensive Support: From filings to tax residency certificates, we offer end-to-end support",
              "Client-Centric Approach: Transparent communication to help you understand your tax obligations",
              "Cost-Effective: Value-driven services designed to minimize costs and maximize tax benefits",
            ]}
          />
        </motion.div>

        <CTAButton text="Let's Talk About Your Business" delay={1.0} />

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

export default TaxServices;
