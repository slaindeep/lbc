import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { bannerImages, processImages } from '../../config/images';

const CorporateServices: React.FC = () => {
  const serviceData = {
    title: "Corporate Services",
    description: "Comprehensive corporate solutions to support your business operations and growth objectives.",
    heroImage: bannerImages.corporate,
    keyFeatures: [
      {
        title: "Corporate Structure",
        description: "Expert guidance on optimal corporate structure and governance frameworks.",
        icon: "building"
      },
      {
        title: "Compliance Services",
        description: "Ensure adherence to regulatory requirements and corporate laws.",
        icon: "check_circle"
      },
      {
        title: "Corporate Governance",
        description: "Implementation of effective governance frameworks and policies.",
        icon: "shield"
      },
      {
        title: "Business Planning",
        description: "Strategic business planning and development services.",
        icon: "file_text"
      },
      {
        title: "Corporate Secretarial",
        description: "Complete corporate secretarial and administrative support.",
        icon: "file"
      },
      {
        title: "Restructuring Services",
        description: "Expert assistance with corporate restructuring and reorganization.",
        icon: "refresh"
      }
    ],
    benefits: [
      {
        title: "Streamlined Operations",
        description: "Efficient corporate processes and procedures for optimal business performance.",
        icon: "settings"
      },
      {
        title: "Risk Management",
        description: "Effective management of corporate risks and compliance requirements.",
        icon: "shield_check"
      },
      {
        title: "Professional Support",
        description: "Access to experienced corporate services professionals and expertise.",
        icon: "users"
      },
      {
        title: "Growth Enablement",
        description: "Support for sustainable business growth and development strategies.",
        icon: "trending_up"
      }
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Comprehensive evaluation of corporate requirements and business objectives.",
        image: processImages.consultation
      },
      {
        step: 2,
        title: "Planning",
        description: "Development of tailored corporate service solutions aligned with your goals.",
        image: processImages.planning
      },
      {
        step: 3,
        title: "Implementation",
        description: "Execution of corporate services and support systems with precision.",
        image: processImages.implementation
      },
      {
        step: 4,
        title: "Monitoring",
        description: "Ongoing oversight and optimization of corporate services to ensure effectiveness.",
        image: processImages.support
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default CorporateServices;