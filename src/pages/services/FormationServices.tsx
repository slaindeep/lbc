import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { processImages } from '../../config/images';

const FormationServices: React.FC = () => {
  const serviceData = {
    title: "Business Formation Services",
    description: "Comprehensive business formation and structuring solutions to help you establish your presence in the UAE. Our expert team guides you through every step of the process.",
    heroImage: "/images/services/banners/formation/formation_1280.webp",
    keyFeatures: [
      {
        title: "Company Setup",
        description: "Complete assistance in establishing your business entity in the UAE.",
        icon: "incorporation"
      },
      {
        title: "License Processing",
        description: "Efficient handling of all business licensing requirements.",
        icon: "licenses"
      },
      {
        title: "Structural Planning",
        description: "Strategic advice on optimal business structure and setup.",
        icon: "planning"
      },
      {
        title: "Documentation",
        description: "Comprehensive preparation and processing of all required documents.",
        icon: "documentation"
      },
      {
        title: "Government Relations",
        description: "Effective liaison with government authorities and departments.",
        icon: "legal"
      },
      {
        title: "Visa Services",
        description: "Complete visa processing services for business owners and employees.",
        icon: "verification"
      }
    ],
    benefits: [
      {
        title: "Fast Setup",
        description: "Efficient and streamlined business formation process.",
        icon: "time"
      },
      {
        title: "Compliance Assured",
        description: "Complete adherence to all legal and regulatory requirements.",
        icon: "compliance"
      },
      {
        title: "Expert Guidance",
        description: "Professional support throughout the formation process.",
        icon: "support"
      },
      {
        title: "Cost Effective",
        description: "Optimized setup costs and efficient resource utilization.",
        icon: "optimization"
      }
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "Understanding your business objectives and formation requirements.",
        image: processImages.consultation
      },
      {
        step: 2,
        title: "Structure Planning",
        description: "Developing the optimal business structure and formation strategy.",
        image: processImages.planning
      },
      {
        step: 3,
        title: "Documentation",
        description: "Preparing and processing all necessary documentation and licenses.",
        image: processImages.documentation
      },
      {
        step: 4,
        title: "Setup Completion",
        description: "Finalizing all formation procedures and ensuring operational readiness.",
        image: processImages.completion
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default FormationServices;