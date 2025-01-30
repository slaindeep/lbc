import React from "react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import ServiceHero from "../../components/ServiceHero";
import videoSource from "../../assets/video/optimized/aml.mp4";

function AMLServices() {
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
        title="What Do Our AML Experts Offer?"
        subtitle="Anti-Money Laundering (AML)"
        description="We recognize the complexities and evolving nature of Anti-Money Laundering (AML) and Countering the Financing of Terrorism (CFT) regulations. Our AML consultants provide comprehensive advisory services designed to alleviate the compliance burden, allowing your business to focus on core operations."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 text-lg leading-relaxed mb-8"
        >
          <p className="mb-6">
            Navigating intricate compliance frameworks can place significant
            pressure on organizations, making it essential to mitigate risks
            associated with money laundering and terrorism financing.
          </p>
          <p>
            Whether you are a start-up, SME, or large enterprise in the UAE, we
            tailor our solutions to meet your specific AML/CFT needs, ensuring
            regulatory adherence and safeguarding your organization against
            financial crime.
          </p>
        </motion.div>

        <SectionHeader title="Benefits of Partnering with Us" delay={0.3} />
        <AnimatedList
          items={[
            "Expertise and Insight – Our consultants possess in-depth knowledge of UAE regulations and international AML/CFT standards.",
            "Tailored Compliance Solutions – We design and implement AML frameworks that align with your business model and risk profile.",
            "Operational Efficiency – Our support allows you to streamline compliance processes and allocate resources to strategic business growth.",
            "Risk Mitigation – We help detect vulnerabilities, address regulatory gaps, and minimize exposure to financial and reputational risks.",
          ]}
        />

        <CTAButton text="Reach out to us today!" delay={0.8} />

        <SectionHeader title="AML Policy and Procedures" delay={1.0} />
        <AnimatedList
          items={[
            "Development, Review, and Enhancement of AML Policies and Procedures",
            "Drafting Comprehensive AML Policy and Procedures Manuals",
            "Formulation of Anti-Bribery and Anti-Corruption Policies",
          ]}
        />

        <SectionHeader title="Risk Assessment and Profiling" delay={1.2} />
        <AnimatedList
          items={[
            "Evaluation and Refinement of Customer Risk Assessment Frameworks",
            "Development of Customer Risk Assessment Models in Alignment with UAE National Risk Assessment (NRA) Guidelines on Money Laundering and Terrorism Financing",
            "Facilitation in the Preparation of Risk Registers, Including Risk Identification and Mitigation Strategies",
          ]}
        />

        <SectionHeader title="Compliance Support and Advisory" delay={1.4} />
        <AnimatedList
          items={[
            "Support with Registration and Integration on the GoAML Portal",
            "Ongoing Advisory to AML Compliance Officers for Effective Fulfillment of Daily Responsibilities",
            "Assistance in the Compilation and Submission of Statutory Reports",
            "Design and Delivery of AML Training Programs for Employees",
          ]}
        />

        <Box sx={{ mt: 12, textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="text-2xl font-bold text-[#2D1B69] mb-6"
          >
            Strengthen your compliance framework and safeguard your business
            against financial crime threats.
          </motion.h2>
          <CTAButton text="Contact Our AML Experts" delay={1.8} />
        </Box>
      </Container>
    </Box>
  );
}

export default AMLServices;
