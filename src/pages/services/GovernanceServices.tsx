import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { processImages } from '../../config/images';

const GovernanceServices: React.FC = () => {
  const serviceData = {
    title: "Corporate Governance Services",
    description: "Establish robust governance frameworks and ensure regulatory compliance with our comprehensive corporate governance solutions. We help you build sustainable business practices.",
    heroImage: "/images/services/banners/governance/governance_1280.webp",
    keyFeatures: [
      {
        title: "Governance Framework",
        description: "Development and implementation of effective governance structures.",
        icon: "professional"
      },
      {
        title: "Policy Development",
        description: "Creation of comprehensive corporate policies and procedures.",
        icon: "documents"
      },
      {
        title: "Risk Management",
        description: "Implementation of robust risk management frameworks.",
        icon: "compliance"
      },
      {
        title: "Compliance Programs",
        description: "Development of comprehensive compliance monitoring systems.",
        icon: "compliance_check"
      },
      {
        title: "Board Advisory",
        description: "Expert guidance on board structure and effectiveness.",
        icon: "consulting"
      },
      {
        title: "Internal Controls",
        description: "Design and implementation of effective control systems.",
        icon: "operations"
      }
    ],
    benefits: [
      {
        title: "Enhanced Transparency",
        description: "Improved business transparency and stakeholder confidence.",
        icon: "quality"
      },
      {
        title: "Risk Mitigation",
        description: "Effective identification and management of business risks.",
        icon: "compliance"
      },
      {
        title: "Operational Efficiency",
        description: "Streamlined operations through improved governance structures.",
        icon: "performance"
      },
      {
        title: "Stakeholder Trust",
        description: "Increased trust from investors, partners, and regulators.",
        icon: "partnership"
      }
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Comprehensive evaluation of current governance structures and needs.",
        image: processImages.assessment
      },
      {
        step: 2,
        title: "Framework Design",
        description: "Development of tailored governance frameworks and policies.",
        image: processImages.planning
      },
      {
        step: 3,
        title: "Implementation",
        description: "Systematic implementation of governance structures and controls.",
        image: processImages.implementation
      },
      {
        step: 4,
        title: "Monitoring",
        description: "Ongoing oversight and refinement of governance systems.",
        image: processImages.monitoring
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default GovernanceServices;