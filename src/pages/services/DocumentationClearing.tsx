import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { bannerImages, processImages } from '../../config/images';

const DocumentationClearing: React.FC = () => {
  const serviceData = {
    title: "Documentation Clearing Services",
    description: "Professional document attestation, legalization, and translation services for all your business needs. We ensure your documents meet all legal requirements for use in the UAE and internationally.",
    heroImage: bannerImages.documentation,
    keyFeatures: [
      {
        title: "Document Attestation",
        description: "Comprehensive document attestation services for all types of official documents.",
        icon: "verification"
      },
      {
        title: "Legal Translation",
        description: "Professional translation services with legal certification and authentication.",
        icon: "documentation"
      },
      {
        title: "Document Legalization",
        description: "Complete legalization services for international document recognition.",
        icon: "legal"
      },
      {
        title: "Certificate Attestation",
        description: "Educational and professional certificate attestation services.",
        icon: "licenses"
      },
      {
        title: "Commercial Documentation",
        description: "Processing and attestation of commercial and business documents.",
        icon: "contracts"
      }
    ],
    benefits: [
      {
        title: "Legal Recognition",
        description: "Ensure your documents are legally recognized in the UAE and internationally",
        icon: "compliance_check"
      },
      {
        title: "Time Efficiency",
        description: "Fast-tracked processing of all documentation requirements",
        icon: "time"
      },
      {
        title: "Quality Assurance",
        description: "High-quality translations and professional attestation services",
        icon: "quality"
      },
      {
        title: "Expert Support",
        description: "Professional handling of your important documents by specialists",
        icon: "support"
      }
    ],
    process: [
      {
        step: 1,
        title: "Document Assessment",
        description: "Comprehensive review and assessment of your documentation requirements.",
        image: processImages.documentAssessment
      },
      {
        step: 2,
        title: "Processing & Translation",
        description: "Professional handling of attestation, translation, or legalization process.",
        image: processImages.documentProcessing
      },
      {
        step: 3,
        title: "Verification",
        description: "Thorough quality check and verification of completed documents.",
        image: processImages.verification
      },
      {
        step: 4,
        title: "Secure Delivery",
        description: "Safe and secure delivery of your processed documents.",
        image: processImages.delivery
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default DocumentationClearing;