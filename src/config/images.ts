// Import service banner images
import accountingBanner from '../assets/images/aboutimg/group-business-people-working-together-meeting-room.jpg';
import auditBanner from '../assets/images/aboutimg/close-up-colleagues-working-together.jpg';
import corporateBanner from '../assets/images/aboutimg/office2.jpg';
import legalBanner from '../assets/images/aboutimg/successful-business-partners-discussing-contract.jpg';
import taxBanner from '../assets/images/aboutimg/top-view-co-workers-planning-strategy.jpg';
import companyFormationBanner from '../assets/images/aboutimg/office2.jpg';
import complianceBanner from '../assets/images/aboutimg/successful-business-partners-discussing-contract.jpg';
import hrsBanner from '../assets/images/aboutimg/group-business-people-working-together-meeting-room.jpg';
import documentationBanner from '../assets/images/aboutimg/close-up-colleagues-working-together.jpg';

// Import process step images
import handshakeTeamImage from '../assets/images/aboutimg/1.png';  // Initial meetings, formal handshakes
import digitalWorkImage from '../assets/images/aboutimg/3.png';    // Digital processing, computer work
import documentConsultationImage from '../assets/images/aboutimg/4.png';  // Document review consultation
import teamCollaborationImage from '../assets/images/aboutimg/5.png';    // Team collaboration
import digitalProcessingImage from '../assets/images/aboutimg/6.png';    // Digital/tablet work
import businessHandshakeImage from '../assets/images/aboutimg/9.png';    // Business deal completion
import financialHandshakeImage from '../assets/images/aboutimg/10.png';  // Financial agreements
import documentSigningImage from '../assets/images/aboutimg/12.png';     // Document signing/review

export const bannerImages = {
  accounting: accountingBanner,
  audit: auditBanner,
  corporate: corporateBanner,
  legal: legalBanner,
  tax: taxBanner,
  formation: companyFormationBanner,
  compliance: complianceBanner,
  hrServices: hrsBanner,
  documentation: documentationBanner,
};

export const processImages = {
  // Company Formation Process
  initialConsultation: handshakeTeamImage,
  documentPreparation: documentSigningImage,
  registrationProcess: digitalProcessingImage,
  postFormationSupport: teamCollaborationImage,

  // Accounting & Financial Process
  financialAssessment: financialHandshakeImage,
  systemSetup: digitalWorkImage,
  monitoring: digitalProcessingImage,
  reporting: documentSigningImage,

  // Legal Process
  legalConsultation: documentConsultationImage,
  legalAnalysis: digitalWorkImage,
  strategyDevelopment: teamCollaborationImage,
  legalImplementation: businessHandshakeImage,

  // Documentation Process
  documentAssessment: documentSigningImage,
  documentProcessing: digitalProcessingImage,
  verification: digitalWorkImage,
  delivery: handshakeTeamImage,

  // HR & PRO Process
  requirementsAnalysis: teamCollaborationImage,
  hrDocumentation: documentSigningImage,
  proProcessing: digitalProcessingImage,
  completionHr: businessHandshakeImage,

  // Tax Process
  taxAssessment: documentConsultationImage,
  taxStrategy: financialHandshakeImage,
  taxImplementation: digitalWorkImage,
  taxMonitoring: digitalProcessingImage,

  // Compliance Process
  complianceAssessment: documentConsultationImage,
  compliancePlanning: teamCollaborationImage,
  complianceImplementation: documentSigningImage,
  complianceMonitoring: digitalProcessingImage,

  // Generic Process Steps (for backward compatibility)
  analysis: documentConsultationImage,
  consultation: handshakeTeamImage,
  planning: teamCollaborationImage,
  implementation: digitalWorkImage,
  support: teamCollaborationImage,
  documentation: documentSigningImage,
  processing: digitalProcessingImage,
  completion: businessHandshakeImage,
  review: documentConsultationImage,
  assessment: documentConsultationImage,
  registration: digitalProcessingImage,
};

export default {
  bannerImages,
  processImages,
};