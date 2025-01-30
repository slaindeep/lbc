import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ServiceHero from "../../components/ServiceHero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import videoSource from "../../assets/video/optimized/accounting.mp4";

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
        <span className="text-lg font-medium text-left">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const AccountingServices: React.FC = () => {
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
        "What is a balance sheet, and why is it important for my business?",
      answer:
        "A balance sheet provides a snapshot of your business's financial health by listing assets, liabilities, and equity. It helps you understand the financial position of your company and is essential for decision-making, attracting investors, and ensuring compliance with regulations.",
    },
    {
      question:
        "Can your firm help with financial statements for small businesses?",
      answer:
        "Yes, we specialize in preparing accurate and comprehensive financial statements for small businesses. These statements include income statements, balance sheets, and cash flow statements, tailored to meet your specific business needs and regulatory requirements.",
    },
    {
      question:
        "What are financial reporting standards, and why do they matter?",
      answer:
        "Financial reporting standards ensure consistency and transparency in financial reporting. We follow globally recognized standards, such as IFRS (International Financial Reporting Standards), to ensure that your financial statements are accurate, reliable, and compliant with local laws.",
    },
    {
      question:
        "How does your accounting and reporting service benefit my business?",
      answer:
        "Our accounting and reporting services help you maintain accurate financial records, ensure compliance with UAE regulations, and provide you with actionable insights to manage your business more effectively and support growth.",
    },
    {
      question:
        "Do you assist with financial audits as part of your accounting services?",
      answer:
        "Yes, we offer financial auditing as part of our comprehensive accounting services. Our team ensures your financial records are accurate and compliant with applicable laws, providing assurance to stakeholders and regulatory authorities.",
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
        title="Accurate Accounting & Comprehensive Reporting For Your UAE Business"
        subtitle="Accounting & Reporting Services"
        description="At Luminous Bluewaters Consultancy, we offer a comprehensive range of expert accounting and Reporting services designed to meet the unique needs of businesses in the UAE. Our aim is to help you understand and manage your financial health effectively, enabling informed decision-making."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        {/* CFO Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-2xl font-bold text-white rounded-lg mb-6">
            CFO Services for Business
          </h2>
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            For many companies, it's not always cost-effective to hire a
            full-time CFO. To meet this need, we offer fractional CFO services,
            providing strategic financial guidance on a part-time basis.
          </motion.p>
          <AnimatedList
            items={[
              "Strategic financial leadership",
              "Financial planning and analysis",
              "Performance metrics development",
              "Business growth strategy",
              "Financial risk management",
            ]}
          />
        </motion.div>

        {/* Revenue Accounting Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader title="Revenue Accounting" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our team of experienced accountants specializes in tracking,
            analyzing, and reporting all revenue streams for your business. We
            ensure compliance with relevant accounting standards to guarantee
            accuracy.
          </motion.p>
          <AnimatedList
            items={[
              "Comprehensive revenue tracking and analysis",
              "Detailed sales reporting and monitoring",
              "Revenue recognition compliance",
              "Income source analysis",
              "Profitability assessments",
            ]}
          />
        </motion.div>

        {/* Expenses Accounting Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeader title="Expenses Accounting" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            Efficient expense management is crucial for financial success. Our
            expenses accounting service records, categorizes, and reports all
            business expenses accurately. We help you keep track of operational
            costs, ensuring that you are maximizing efficiency and minimizing
            waste.
          </motion.p>
          <AnimatedList
            items={[
              "Expense categorization and tracking",
              "Cost analysis and optimization",
              "Budget variance analysis",
              "Operational cost monitoring",
              "Expense report generation",
            ]}
          />
        </motion.div>

        {/* Financial Reporting Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeader title="Financial Reporting" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            We offer comprehensive financial reporting services to provide a
            clear picture of your business's financial health. Our reports
            include balance sheets, income statements, and cash flow statements,
            giving you a complete overview of your financial status.
          </motion.p>
          <AnimatedList
            items={[
              "Balance sheet preparation",
              "Income statement analysis",
              "Cash flow management",
              "Financial statement compilation",
              "Stakeholder reporting",
            ]}
          />
        </motion.div>

        {/* Corporate Finance Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionHeader title="Corporate Finance" />
          <motion.p className="text-gray-700 text-lg leading-relaxed mb-6">
            From budgeting and forecasting to strategic financial planning, our
            corporate finance experts guide your business through complex
            financial decisions. We assist with capital structure optimization,
            investment strategies, and cash flow management.
          </motion.p>
          <AnimatedList
            items={[
              "Strategic financial planning",
              "Investment analysis",
              "Capital structure optimization",
              "Risk management",
              "Financial forecasting",
            ]}
          />
        </motion.div>

        <CTAButton
          text="Transform Your Financial Reporting Today"
          delay={1.0}
        />

        {/* FAQ Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2D1B69] mb-8">
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

export default AccountingServices;
