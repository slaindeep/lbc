import React, { useState } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Globe,
  Factory,
  LayersIcon,
  CheckCircle2,
  ArrowRight,
  Banknote,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Service {
  title: string;
  description: string;
}

interface TabContentProps {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
  benefits: string[];
  freezones?: string[];
  icon?: string;
}

const tabData: TabContentProps[] = [
  {
    title: "Setup Your Freezone Company",
    subtitle: "Get 100% Ownership Without Local Sponsor",
    description:
      "Launch your business with maximum flexibility and benefits. With over 50 Freezones across the UAE, we help you choose the perfect fit for your business vision.",
    services: [
      {
        title: "Business Consultation",
        description:
          "Choose the right Freezone based on your business activity",
      },
      {
        title: "Company Registration",
        description: "Seamless documentation and registration process",
      },
      {
        title: "Bank account opening",
        description: "We can assist you in opening advising the KYC's required",
      },
      {
        title: "License Procurement",
        description:
          "Assistance with trade licenses (commercial, industrial, or professional)",
      },
      {
        title: "Office Setup",
        description: "Virtual office or physical workspace arrangements",
      },
      {
        title: "Visa Services",
        description: "Investor and employee visa processing",
      },
    ],
    benefits: [
      "100% foreign ownership with complete control",
      "Zero corporate and personal income tax",
      "100% repatriation of capital and profits",
      "No currency restrictions",
      "Multiple business activities under one license",
      "World-class infrastructure and facilities",
    ],
    freezones: [
      "Dubai World Trade Centre (DWTC)",
      "DMCC - Dubai Multi Commodity Centre",
      "Sharjah media city",
      "Ras Al Khaimah Economic zone",
      "International Free Zone Authority (IFZA)",
      "Meydan",
      "Dubai Queen Elizabeth (DuQe)",
    ],
    icon: "Freezone",
  },
  {
    title: "Mainland Company Formation",
    subtitle: "Expand Without Limits in the Local Market",
    description:
      "Setting up a Mainland company in the UAE gives you the flexibility to operate anywhere in the country and beyond. A mainland company is an onshore entity registered with the relevant emirate's government body. The Emirate's Department of Economic Development (DED) issues its trade license.",
    services: [
      {
        title: "Business Activity Selection",
        description: "Assistance in identifying appropriate legal structures",
      },
      {
        title: "Local Sponsorship",
        description:
          "Finding reliable UAE-based partners for ownership (if applicable)",
      },
      {
        title: "Company Registration & Licensing",
        description: "Hassle-free government liaison and approvals",
      },
      {
        title: "PRO Services",
        description: "Document clearance, approvals, and visa facilitation",
      },
      {
        title: "Office & Workspace Solutions",
        description: "Helping you establish your operational hub",
      },
    ],
    benefits: [
      "Access to UAE's vast local and global markets",
      "No minimum capital requirements for many activities",
      "Ownership: While certain business activities require a local sponsor or a UAE national partner, 100% ownership for expatriates is now also possible on the mainland",
      "Legal Structures: Various legal structures are available, including Sole Establishment, LLC, Holding Company, Branch, and Civil Company",
      "Commercial Activities: There are no restrictions on certain commercial activities as per your license",
      "Greater flexibility in business operations",
      "Opportunity to work with government contracts",
      "Commercial Activities: Same group activities have no restrictions to be on the license",
    ],
    icon: "Mainland",
  },
  {
    title: "Offshore Company Formation",
    subtitle: "Achieve Global Reach with Privacy & Tax Benefits",
    description:
      "An Offshore company is ideal for businesses that aim to manage wealth, trade internationally, or optimize taxation. Additionally, an offshore company can help manage the ownership of a separate company within the UAE.",
    services: [],
    benefits: [
      "Zero corporate and income taxes",
      "Confidentiality and asset protection",
      "No physical office requirements",
      "Ease of international trade",
    ],
    icon: "Offshore",
  },
  {
    title: "Organizational Restructuring",
    subtitle: "Streamline & Optimize for Growth",
    description:
      "Is your business prepared for the future? Our Organizational Restructuring services ensure your company operates efficiently while adapting to market changes.",
    services: [
      {
        title: "Operational Restructuring",
        description: "Redesigning processes to enhance productivity",
      },
      {
        title: "Financial Restructuring",
        description: "Optimizing debt, assets, and revenue streams",
      },
      {
        title: "Ownership & Shareholding Changes",
        description:
          "Assistance in mergers, acquisitions, or shareholder transitions",
      },
      {
        title: "Legal Entity Transformation",
        description:
          "Switching between Freezone, Mainland, or Offshore structures",
      },
      {
        title: "Workforce Realignment",
        description: "Helping reorganize roles for improved performance",
      },
    ],
    benefits: [
      "Increased efficiency and profitability",
      "Cost reduction through streamlined processes",
      "Better alignment with long-term business goals",
      "Enhanced competitiveness in your market",
    ],
    icon: "Restructuring",
  },
  {
    title: "Liquidation",
    subtitle: "Expert Guidance Through the Liquidation Process",
    description:
      "We understand that going through the liquidation process can be overwhelming and complex. Our expert team is here to guide you every step of the way, providing customized solutions to ensure a smooth transition.",
    services: [
      {
        title: "Comprehensive Assessment",
        description:
          "We start by understanding your unique situation, assessing your assets, liabilities, and goals.",
      },
      {
        title: "Strategic Planning",
        description:
          "Our experts will help you develop a clear plan, outlining the steps needed to achieve a successful liquidation.",
      },
      {
        title: "Documentation Assistance",
        description:
          "From paperwork to regulatory compliance, we handle all necessary documentation, ensuring everything is in order.",
      },
      {
        title: "Asset Valuation",
        description:
          "We conduct detailed valuations to maximize returns, ensuring you get the best possible outcome.",
      },
      {
        title: "Expert Negotiation",
        description:
          "Our team will negotiate with creditors and other stakeholders on your behalf, protecting your interests.",
      },
      {
        title: "End-to-End Support",
        description:
          "We guide you through every phase, from initial planning to final closure, providing ongoing support throughout the process.",
      },
    ],
    benefits: [
      "Professional guidance throughout the entire process",
      "Maximized asset value and returns",
      "Efficient and compliant documentation handling",
      "Protected interests through expert negotiation",
      "Comprehensive support from start to finish",
      "Stress-free transition through complex procedures",
    ],
    icon: "Liquidation",
  },
];

const BusinessTabs: FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleCtaClick = () => {
    navigate("/get-started");
  };

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-[#2D1B69]" };
    switch (iconName) {
      case "Freezone":
        return <Factory {...iconProps} />;
      case "Mainland":
        return <Building2 {...iconProps} />;
      case "Offshore":
        return <Globe {...iconProps} />;
      case "Restructuring":
        return <LayersIcon {...iconProps} />;
      case "Liquidation":
        return <Banknote {...iconProps} />;
      default:
        return null;
    }
  };

  const TabContent = ({ content }: { content: TabContentProps }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="py-8 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D1B69] mb-3">
            {content.title}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#4B3F6B] mb-6">
            {content.subtitle}
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {content.description}
          </p>
        </motion.div>

        {content.services && content.services.length > 0 && (
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-[#2D1B69] mb-6">
              Our {content.title.split(" ")[0]} Services:
            </h4>
            <div className="space-y-4">
              {content.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-duration-300"
                >
                  <span className="text-[#2D1B69] font-semibold min-w-[24px]">
                    {index + 1}.
                  </span>
                  <div>
                    <h5 className="font-semibold text-[#2D1B69]">
                      {service.title}
                    </h5>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {content.freezones && (
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-[#2D1B69] mb-6">
              Popular Freezones We Cover:
            </h4>
            <div className="space-y-4">
              {content.freezones.map((freezone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C4B5FD] flex-shrink-0" />
                  <span className="text-[#2D1B69]">{freezone}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-2xl font-bold text-[#2D1B69] mb-6">
            Key Benefits:
          </h4>
          <div className="space-y-4">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-[#C4B5FD] flex-shrink-0" />
                <span className="text-[#2D1B69]">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4 justify-center">
          {tabData.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                activeTab === index
                  ? "bg-[#2D1B69] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {getIcon(tab.icon || "")}
              {tab.icon}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <TabContent content={tabData[activeTab]} key={activeTab} />
        </AnimatePresence>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-3xl font-bold text-[#2D1B69] mb-2">
            Ready to Transform Your Business?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCtaClick}
            className="group relative px-8 py-4 mt-6 rounded-full bg-[#C4B5FD] text-[#2D1B69] font-medium hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessTabs;
