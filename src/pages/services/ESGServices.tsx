import React from "react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import ServiceHero from "../../components/ServiceHero";
import videoSource from "../../assets/video/optimized/esg.mp4";

function ESGServices() {
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
        title="How Are You Contributing to ESG?"
        subtitle="ESG and Sustainability Advisory"
        description="Navigate ESG and Sustainability Challenges with Luminous Bluewater Consultancy. Environmental, Social, and Governance (ESG) considerations are now central to the strategic agendas of organizations globally."
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
            We provide comprehensive advisory services to assist organizations
            in addressing sustainability challenges, aligning with investor
            expectations, enhancing ESG performance, and ensuring transparent
            reporting and disclosures.
          </p>
          <p className="mb-6">
            LBC's multidisciplinary teams collaborate with clients throughout
            their sustainability journeys, crafting internal frameworks and risk
            management strategies to accelerate transitions, decarbonize supply
            chains, and embed green practices into core operations.
          </p>
          <p>
            Together, we can build a better tomorrow by addressing climate
            change and other environmental issues. It's our duty to contribute
            to sustainability and work towards achieving the United Nations
            SDGs.
          </p>
        </motion.div>

        <SectionHeader title="Our Expertise Includes" delay={0.3} />
        <AnimatedList
          items={[
            "Navigating policy developments",
            "Guiding clients on their implications",
            "Securing incentives and funding opportunities",
            "Ensuring compliance with evolving tax and reporting requirements",
          ]}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 mb-8 text-gray-700"
        >
          <p>
            Our integrated approach leverages our legal, financial,
            technological, and workforce expertise to navigate the complexities
            of sustainability transitions. We unite insights from government
            bodies, businesses, NGOs, and financial institutions to craft
            innovative solutions and drive measurable sustainability outcomes.
          </p>
        </motion.div>

        <SectionHeader title="Key Benefits of Partnering with us" delay={0.7} />
        <AnimatedList
          items={[
            "Strengthen sustainability and supply chain strategies for greater value",
            "Mitigate risks and enhance reputations to secure growth opportunities",
            "Drive cost efficiencies through sustainable practices",
            "Improve decision-making and operational performance for long-term value",
          ]}
        />

        <SectionHeader
          title="Our Core ESG Legal and Advisory Services"
          delay={0.9}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h4 className="text-xl font-semibold text-[#2D1B69] mb-3">
              Environmental Sustainability:
            </h4>
            <AnimatedList
              items={[
                "Advising on climate change and renewable energy",
                "Structuring green agreements and clean tech investments",
                "Incorporating environmental factors into financial strategies",
                "Ensuring regulatory compliance",
              ]}
            />
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#2D1B69] mb-3">
              Workforce Sustainability and Compliance:
            </h4>
            <AnimatedList
              items={[
                "Ensuring compliance with employment and diversity regulations",
                "Developing policies for employee well-being and safety",
                "Addressing pay equity, whistleblower, and human rights policies",
                "Designing anti-discrimination and conduct frameworks",
              ]}
            />
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#2D1B69] mb-3">
              ESG Due Diligence:
            </h4>
            <AnimatedList
              items={[
                "Identifying ESG risks in transactions and supply chains",
                "Assessing vendor and supplier sustainability",
                "Ensuring contract compliance and remediation",
              ]}
            />
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#2D1B69] mb-3">
              Sustainable Finance Law and Regulation:
            </h4>
            <AnimatedList
              items={[
                "Advising on ESG factors in lending and investment",
                "Assisting financial institutions with ESG-linked products",
                "Guiding clients on accessing ESG-related funding",
                "Navigating disclosure and market communication requirements",
              ]}
            />
          </div>
        </motion.div>

        <Box sx={{ mt: 12, textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-2xl font-bold text-[#2D1B69] mb-6"
          >
            Empower your organization with enhanced ESG and sustainability
            reporting.
          </motion.h2>
          <CTAButton text="Make a difference today!" delay={1.5} />
        </Box>
      </Container>
    </Box>
  );
}

export default ESGServices;
