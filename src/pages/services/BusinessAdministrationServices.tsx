import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { processImages } from '../../config/images';

const BusinessAdministrationServices: React.FC = () => {
  const serviceData = {
    title: "Business Administration Services",
    description: "Comprehensive business administration solutions to streamline your operations and enhance efficiency. We handle the administrative complexities while you focus on growing your business.",
    heroImage: "/images/services/banners/business-admin/business-admin_1280.webp",
    keyFeatures: [
      {
        title: "Office Management",
        description: "Complete office administration and management services.",
        icon: "professional"
      },
      {
        title: "Document Management",
        description: "Efficient handling and organization of business documentation.",
        icon: "documentation"
      },
      {
        title: "Process Optimization",
        description: "Streamlining administrative processes for maximum efficiency.",
        icon: "optimization"
      },
      {
        title: "Resource Management",
        description: "Effective coordination and allocation of business resources.",
        icon: "operations"
      },
      {
        title: "Workflow Automation",
        description: "Implementation of automated administrative systems.",
        icon: "innovation"
      },
      {
        title: "Support Services",
        description: "Comprehensive administrative support for all business functions.",
        icon: "assistance"
      }
    ],
    benefits: [
      {
        title: "Increased Efficiency",
        description: "Streamlined operations and improved administrative processes.",
        icon: "performance"
      },
      {
        title: "Cost Reduction",
        description: "Optimized resource utilization and reduced operational costs.",
        icon: "growth"
      },
      {
        title: "Time Savings",
        description: "More time to focus on core business activities and growth.",
        icon: "time"
      },
      {
        title: "Better Organization",
        description: "Improved document management and business organization.",
        icon: "documents"
      }
    ],
    process: [
      {
        step: 1,
        title: "Needs Analysis",
        description: "Comprehensive assessment of your administrative requirements.",
        image: processImages.analysis
      },
      {
        step: 2,
        title: "Solution Design",
        description: "Development of tailored administrative solutions and processes.",
        image: processImages.planning
      },
      {
        step: 3,
        title: "Implementation",
        description: "Systematic deployment of administrative systems and procedures.",
        image: processImages.implementation
      },
      {
        step: 4,
        title: "Optimization",
        description: "Continuous monitoring and improvement of administrative processes.",
        image: processImages.monitoring
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default BusinessAdministrationServices;