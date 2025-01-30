import React, { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import videoSource from "../../assets/video/optimized/hrpro.mp4";
import ServiceHero from "../../components/ServiceHero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./HRsPROServices.module.css";

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

function HRsPROServices() {
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
      question: "1. What human resources services do you offer? ",
      answer:
        "We provide comprehensive HR services, including recruitment, payroll management, employee contracts, compliance with labor laws. For companies without an in-house HR department, we provide complete HR and PRO services tailored to meet their specific needs. For start-ups and SMEs our HR services are a value addition in terms of cost saving but without compromising on quality or service level. ",
    },
    {
      question: "2. What visa services do you provide? ",
      answer:
        "We offer a range of visa services, including processing work, residency, family, and investor visas and Golden Visas of all categories. Our team handles all aspects of the visa application, ensuring compliance with UAE immigration laws. ",
    },
    {
      question: "3. How can your immigration services assist me? ",
      answer:
        "Our immigration services help individuals and businesses navigate the visa application process, providing expert guidance on obtaining work permits, residency visas, and compliance with UAE immigration regulations. ",
    },
    {
      question:
        "4. What is a PRO service, and how can it benefit my business? ",
      answer:
        "A PRO (Public Relations Officer) service helps businesses manage government-related paperwork, including visa applications, labor permits, and other essential documentation, ensuring smooth and timely transactions with UAE authorities. By outsourced the PRO department you not only save the cost but is taken care holistically with proactive advice on UAE regulations ",
    },
    {
      question: "5. Do you assist with renewing visas and permits? ",
      answer:
        "Yes, we offer renewal services for work visas, residency permits, and labor cards, ensuring that all documents are up to date and comply with local immigration laws. ",
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
    <div className={styles.hrContainer}>
      <ServiceHero
        title="Expert HR & PRO Services For "
        subtitle="Hassle-free Business Operations "
        description="Streamline your business operations with our comprehensive HR & PRO (Public Relations Officer) services. At Luminous Bluewaters, we manage essential administrative and compliance tasks, enabling you to focus on your business growth while ensuring full adherence to UAE labor laws and regulations."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" className={styles.sectionContainer}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="HR and PRO services tabs"
          >
            <Tab label="HR Outsourcing" />
            <Tab label="Visa Services" />
            <Tab label="Visa Processing" />
            <Tab label="License & Governance" />
          </Tabs>
        </Box>

        {/* HR Outsourcing Tab */}
        <TabPanel value={value} index={0}>
          <Typography variant="h4" gutterBottom>
            HR Outsourcing and Advisory
          </Typography>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 text-lg leading-relaxed mb-4"
          >
            Managing HR processes in a dynamic business environment can be
            time-consuming. In Dubai, UAE, for SMEs and startups, acquiring an
            HR team may be challenging. That’s where Luminous Bluewaters
            Consultancy comes in.
            <p>
              We offer fractional Chief Human Resource Officer (CHRO) services
              to handle companies' human resource activities. We give assistance
              in managing all the Human Resources and PRO services related
              matters, the value proposition is you save cost while outsourcing
              to us with our expertise and skills in UAE.
            </p>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            Our HR Outsourcing and Advisory services are designed to reduce
            operational burdens while improving efficiency.
          </motion.p>

          <SectionHeader title="Our Services Include:" delay={0.6} />

          <AnimatedList
            items={[
              "Strategic HR planning and consultation",
              "Employee documentation management",
              "Payroll outsourcing and compliance",
              "Recruitment support and onboarding assistance",
              "Employee grievance handling",
            ]}
          />

          <SectionHeader title="Benefits:" delay={1.6} />

          <AnimatedList
            items={[
              "Cost-effective and scalable solutions",
              "Compliance with local labor laws",
              "Focus on core business activities",
            ]}
          />

          <CTAButton text="Optimize your HR today!" delay={2.0} />
        </TabPanel>

        {/* Visa Services Tab */}
        <TabPanel value={value} index={1}>
          <Typography variant="h4" gutterBottom>
            Visa Services
          </Typography>

          <Typography paragraph>
            The UAE offers a variety of visa options for those planning to visit
            Dubai, whether for long-term residence, short visits, or tourism. We
            assist you in securing the visa that best suits your needs.
          </Typography>

          <SectionHeader title="1. Employment Visa" />
          <Typography paragraph>
            An Employment or Residence Visa allows foreign nationals to legally
            live in the UAE for purposes such as work, education, family
            reunification, or investment.
          </Typography>
          <Typography paragraph>
            Validity: 2 years and can be renewed.
          </Typography>

          <SectionHeader title="2. Investor or Partner Visa" />
          <Typography paragraph>
            Designed for individuals investing in real estate or businesses in
            the UAE.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Key Benefits:
          </Typography>
          <AnimatedList
            items={[
              "Residency: Offers a 2-year renewable residency visa",
              "Family Sponsorship: Allows sponsorship of immediate family members as UAE residents",
              "Ease of Travel: Facilitates travel to GCC countries for business or leisure",
              "Extended Validity: Stay outside the UAE for up to a year without risking visa cancellation",
            ]}
          />

          <SectionHeader title="3. Golden Visa" />
          <Typography paragraph>
            The prestigious Golden Visa offers 10 years of residency in the UAE.
            It is available for specific categories of applicants:
          </Typography>
          <Typography variant="h6" gutterBottom>
            Eligible Categories:
          </Typography>
          <AnimatedList
            items={[
              "Investors: Real estate investors and public investment holders",
              "Entrepreneurs: Innovators with unique business plans",
              "Talented Individuals: Exceptional talents in culture, arts, sports, digital technology, innovation, and invention",
              "Scientists & Researchers: Experts in industrial fields, healthcare, education, and cutting-edge research",
              "Top Graduates: Outstanding graduates from UAE schools/universities or leading international institutions",
              "Humanitarian Pioneers: Individuals recognized for significant contributions to humanitarian activities",
              "First Line of Defense: Healthcare workers, including nurses, paramedics, lab technicians, and pharmacists",
            ]}
          />

          <SectionHeader title="4. Dependent Visa" />
          <Typography paragraph>
            A visa is issued for family sponsorship or work, granting the right
            to live and work in Dubai.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Benefits:
          </Typography>
          <AnimatedList
            items={[
              "Primary Eligibility - Employment, family sponsorship",
              "Duration – 2 years and can be renewed",
            ]}
          />

          <SectionHeader title="5. Freelancer Visa" />
          <Typography paragraph>
            Also known as the Nomad Work Visa, this allows individuals to live
            in the UAE while working remotely for an employer or business
            located outside the country.
          </Typography>

          <SectionHeader title="6. Tourist Visa" />
          <Typography paragraph>
            A Tourism Visa is granted to a foreigner for a single visit for the
            purpose of tourism, with a validity period of 30 or 60 days. A
            multiple-entry Tourism Visa is also issued by the authority.
          </Typography>

          <SectionHeader title="7. Retirement Visa" />
          <Typography paragraph>
            The Retirement Visa allows retirees aged 55 or older to enjoy
            Dubai's world-class lifestyle, healthcare, and safety during their
            retirement years. This visa is generally issued for 5 years and is
            renewable.
          </Typography>

          <CTAButton text="Start Your Visa Process Today" delay={1.5} />
        </TabPanel>

        {/* Visa Processing Tab */}
        <TabPanel value={value} index={2}>
          <Typography variant="h4" gutterBottom>
            Employee Visa Processing and Renewals
          </Typography>

          <Typography paragraph>
            Ensure your workforce is always compliant with UAE immigration
            regulations. We handle the entire visa process, including renewals,
            to save you time and hassle.
          </Typography>
          <SectionHeader title="What we offer" />
          <AnimatedList
            items={[
              "Initial visa applications for employees and dependents",
              "Renewal of visas before expiration",
              "Coordination with immigration authorities",
            ]}
          />

          <SectionHeader title="Work Permit Processing" />
          <Typography paragraph>
            A work permit is mandatory for onboarding employees in the UAE. We
            manage the process from start to finish to ensure timely approvals.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our Expertise Includes:
          </Typography>
          <AnimatedList
            items={[
              "New work permit applications",
              "Renewals for existing permits",
              "Compliance with Ministry of Labor regulations",
            ]}
          />

          <SectionHeader title="GCC Work Permit Processing" />
          <Typography paragraph>
            Expanding into GCC countries? We offer expert assistance with work
            permit processing across the GCC region, ensuring seamless mobility
            for your workforce.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our Services Cover:
          </Typography>
          <AnimatedList
            items={[
              "Work permit applications and approvals",
              "Country-specific documentation and compliance",
              "Coordination with regional labor authorities",
            ]}
          />

          <SectionHeader title="Visa Cancellations" />
          <Typography paragraph>
            Streamline the exit process with our visa cancellation services. We
            ensure smooth coordination with relevant authorities to avoid
            unnecessary delays or complications.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Services Include:
          </Typography>
          <AnimatedList
            items={[
              "Visa cancellation for employees leaving the company",
              "Coordination with immigration and labor departments",
              "Settlement of legal obligations and final clearance",
            ]}
          />

          <SectionHeader title="License Renewal and Governance" />
          <Typography paragraph>
            Keep your business operations uninterrupted with timely license
            renewals and governance support. We ensure your business stays
            compliant with UAE regulations.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Services Include:
          </Typography>
          <AnimatedList
            items={[
              "Trade license renewal assistance",
              "Managing updates to company documentation",
              "Ensuring compliance with regulatory requirements",
            ]}
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl font-bold text-center text-[#2D1B69] mt-12 mb-6"
          >
            Achieve Your Business Goals with
            <br />
            Comprehensive PRO Services
          </motion.h2>

          <CTAButton text="Get Expert Visa Processing Support" delay={1.5} />
        </TabPanel>

        {/* License & Governance Tab */}
        <TabPanel value={value} index={3}>
          <Typography variant="h4" gutterBottom>
            License Renewal and Governance Solutions
          </Typography>

          <Typography paragraph>
            Keep your business operations uninterrupted with timely license
            renewals and governance support. We ensure your business stays
            compliant with UAE regulations.
          </Typography>

          <SectionHeader title="Services Include:" delay={0.4} />
          <AnimatedList
            items={[
              "Trade license renewal assistance",
              "Managing updates to company documentation",
              "Ensuring compliance with regulatory requirements",
            ]}
          />

          <CTAButton text="Ensure Your Business Compliance" delay={1.0} />
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

export default HRsPROServices;
