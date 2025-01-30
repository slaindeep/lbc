import React, { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import videoSource from "../../assets/video/optimized/legal.mp4";
import ServiceHero from "../../components/ServiceHero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";

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

function LegalServices() {
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
      question: "What types of corporate legal services do you provide?",
      answer:
        "We offer comprehensive corporate legal services to cater to any legal need of an organization, including corporate structuring and company formation, compliance, commercial legal advice, contract drafting and negotiation, mergers and acquisitions, disputes management, and corporate governance support.",
    },
    {
      question: "How can you assist with intellectual property protection?",
      answer:
        "Our intellectual property services include global and country specific trademark and patent registrations, copyright protection, IP portfolio management, IP licensing, franchising, and assistance with IP infringement disputes.",
    },
    {
      question: "What are your services under employment law?",
      answer:
        "We provide expert advice on employment contracts, workplace policies, compliance with labor laws, wrongful termination claims, and employee dispute resolution.",
    },
    {
      question: "What is the difference between mediation and arbitration?",
      answer:
        "Mediation is an informal dispute resolution mechanism that involves a neutral third party helping disputing parties reach a mutually agreed solution. Arbitration is a more formal process governed by the respective arbitration laws in a jurisdiction where an arbitrator or arbitrators hears evidence and makes a binding decision.",
    },
    {
      question: "What is a Fractional Chief Legal Officer (CLO)?",
      answer:
        "Engaging a Fractional Chief Legal Officer (CLO) provides businesses with senior-level legal expertise on a part-time or as-needed basis, offering the strategic advantages of an in-house General Counsel without the full-time commitment and associated costs. By integrating a Fractional CLO into their operations, businesses can navigate complex legal landscapes with confidence, benefiting from experienced counsel that contributes to informed decision-making and long-term success.",
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
    <Box>
      <ServiceHero
        title="Expert Legal Solutions in Dubai, UAE"
        subtitle="Corporate Legal Services"
        description="At Luminous Bluewaters Consultancy, we specialize in providing tailored corporate legal solutions to meet your business needs. With over 20 years of expertise in corporate law, our seasoned legal professionals deliver cost-effective, high-quality solutions with professionalism, efficiency, and integrity."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Legal services tabs"
          >
            <Tab label="CLO Services" />
            <Tab label="General Advisory" />
            <Tab label="M&A Services" />
            <Tab label="IP Management" />
            <Tab label="Employment Law" />
            <Tab label="Dispute Resolution" />
            <Tab label="Real Estate & Tourism" />
          </Tabs>
        </Box>

        {/* General Advisory Tab */}
        <TabPanel value={value} index={1}>
          <Typography variant="h4" gutterBottom>
            General Legal Advisory Services
          </Typography>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            We simplify legal complexities with our comprehensive advisory
            services. From compliance and regulatory matters to corporate
            governance, we've got you covered. Our team provides pragmatic and
            strategic legal counsel designed to address the evolving challenges
            businesses face.
          </motion.p>

          <SectionHeader title="Our Services Include:" delay={0.4} />
          <AnimatedList
            items={[
              "Corporate structuring and compliance",
              "Regulatory advisory",
              "Corporate governance support",
              "Contract drafting and negotiation",
              "Legal risk management",
            ]}
          />
          <CTAButton text="Partner with Our Experts Today!" delay={1.0} />
        </TabPanel>

        {/* M&A Services Tab */}
        <TabPanel value={value} index={2}>
          <Typography variant="h4" gutterBottom>
            Mergers & Acquisitions
          </Typography>

          <Typography paragraph>
            Unlock growth opportunities through seamless mergers and
            acquisitions. Our expert team ensures smooth transitions that align
            with your strategic objectives.
          </Typography>

          <SectionHeader title="Our M&A Services:" delay={0.3} />
          <AnimatedList
            items={[
              "Due diligence",
              "Deal structuring",
              "Transaction documentation",
              "Post-merger integration support",
              "Regulatory compliance",
            ]}
          />

          <CTAButton text="Start Your M&A Journey" delay={1.0} />
        </TabPanel>

        {/* IP Management Tab */}
        <TabPanel value={value} index={3}>
          <Typography variant="h4" gutterBottom>
            Intellectual Property Management
          </Typography>

          <Typography paragraph>
            Protect and maximize the value of your intellectual assets with our
            comprehensive IP services.
          </Typography>

          <SectionHeader title="Services Include:" delay={0.3} />
          <AnimatedList
            items={[
              "Trademark and patent registration",
              "Copyright protection",
              "IP portfolio management",
              "Licensing and franchising",
              "IP infringement dispute resolution",
            ]}
          />

          <CTAButton text="Protect Your Intellectual Property" delay={1.0} />
        </TabPanel>

        {/* Employment Law Tab */}
        <TabPanel value={value} index={4}>
          <Typography variant="h4" gutterBottom>
            Employment Law Services
          </Typography>

          <Typography paragraph>
            Empower your workforce while staying compliant with ever-evolving
            labor laws. We provide comprehensive employment law services to
            protect both employers and employees.
          </Typography>

          <SectionHeader title="Our Expertise:" delay={0.3} />
          <AnimatedList
            items={[
              "Employment contracts and policies",
              "Workplace procedures",
              "Labor law compliance",
              "Dispute resolution",
              "Employee relations management",
            ]}
          />

          <CTAButton text="Ensure Employment Compliance" delay={1.0} />
        </TabPanel>

        {/* Dispute Resolution Tab */}
        <TabPanel value={value} index={5}>
          <Typography variant="h4" gutterBottom>
            Mediation, Arbitration & Dispute Resolution
          </Typography>

          <Typography paragraph>
            Resolve conflicts efficiently with our alternative dispute
            resolution services. Our experienced team works diligently to
            achieve fair outcomes while preserving business relationships.
          </Typography>

          <SectionHeader title="Our Services:" delay={0.3} />
          <AnimatedList
            items={[
              "Mediation services",
              "Arbitration representation",
              "Litigation management",
              "Dispute prevention strategies",
              "Settlement negotiation",
            ]}
          />

          <CTAButton text="Resolve Your Disputes" delay={1.0} />
        </TabPanel>

        {/* Real Estate & Tourism Tab */}
        <TabPanel value={value} index={6}>
          <Typography variant="h4" gutterBottom>
            Real Estate, Hospitality, and Tourism Law
          </Typography>

          <Typography paragraph>
            From property acquisitions to hotel development and tourism
            compliance, we ensure your projects proceed without legal
            roadblocks.
          </Typography>

          <SectionHeader title="Areas of Expertise:" delay={0.3} />
          <AnimatedList
            items={[
              "Property acquisitions and management",
              "Hotel development and operations",
              "Tourism compliance and licensing",
              "Management agreements",
              "Franchising and licensing",
            ]}
          />

          <CTAButton text="Get Real Estate Legal Support" delay={1.0} />
        </TabPanel>

        {/* CLO Services Tab */}
        <TabPanel value={value} index={0}>
          <h2 className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-2xl font-bold text-white rounded-lg mb-6">
            Fractional Chief Legal Officer (CLO) and Strategic Legal Counsel
          </h2>

          <Typography paragraph>
            We offer Fractional Chief Legal Officer (CLO) and strategic legal
            counsel services, allowing businesses to access high-level legal
            expertise without the overhead costs associated with employing a
            full-time General Counsel or Chief Legal Officer. This innovative
            model provides tailored, scalable legal solutions that align with
            your operational requirements and growth trajectory.
          </Typography>

          <SectionHeader title="Benefits:" delay={0.3} />
          <AnimatedList
            items={[
              "Senior-level legal expertise on demand",
              "Cost-effective legal solutions",
              "Strategic business guidance",
              "Risk management oversight",
              "Flexible engagement options",
            ]}
          />

          <CTAButton text="Explore CLO Services" delay={1.0} />
        </TabPanel>

        {/* Ready to Transform Section */}
        {/* <div className="text-center mt-16 mb-16">
          <h2 className="text-3xl font-bold text-[#2D1B69] mb-6">
            Ready to Address Your Legal Challenges?
          </h2>
          <button
            onClick={() => navigate("/get-started")}
            className="group relative px-8 py-4 rounded-full bg-[#C4B5FD] text-[#2D1B69] font-medium 
                    hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 
                    transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div> */}

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
}

export default LegalServices;
