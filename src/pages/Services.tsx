import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Buttons";
import useScrollToTop from "../hooks/useScrollToTop";

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  path: string;
  features: string[];
}

const serviceCards: ServiceCard[] = [
  {
    title: "Business Setup",
    description: "Complete company formation services in UAE's Freezone, Mainland, and Offshore jurisdictions.",
    icon: "🏢",
    path: "/services/business-setup",
    features: [
      "Freezone Setup",
      "Mainland Formation",
      "Offshore Companies",
      "Organization Restructuring",
    ],
  },
  {
    title: "Legal Services",
    description: "Expert legal solutions for business operations and compliance.",
    icon: "⚖️",
    path: "/services/legal",
    features: [
      "Corporate Legal Advisory",
      "Mergers & Acquisitions",
      "Intellectual Property",
      "Employment Law",
    ],
  },
  {
    title: "Compliance Services",
    description: "Ensuring adherence to regulatory requirements and standards.",
    icon: "🛡️",
    path: "/services/compliance",
    features: [
      "Regulatory Affairs",
      "Corporate Governance",
      "AML Compliance",
      "ESG Services",
    ],
  },
  {
    title: "HR & PRO Services",
    description: "Complete HR and PRO services for business operations in UAE.",
    icon: "👥",
    path: "/services/hrs-pro",
    features: [
      "Visa Processing",
      "Work Permits",
      "License Renewal",
      "HR Outsourcing",
    ],
  },
  {
    title: "Technology",
    description: "Cutting-edge technology solutions to drive business growth and efficiency.",
    icon: "💻",
    path: "/services/data-analytics",
    features: [
      "Data Analytics",
      "Digital Transformation",
      "Cloud Solutions",
      "Business Intelligence",
    ],
  },
  {
    title: "AML",
    description: "Comprehensive Anti-Money Laundering solutions to protect your business.",
    icon: "🔒",
    path: "/services/aml",
    features: [
      "Risk Assessment",
      "Due Diligence",
      "Transaction Monitoring",
      "Compliance Training",
    ],
  },
  {
    title: "ESG and Sustainability",
    description: "Environmental, Social, and Governance consulting for sustainable business practices.",
    icon: "🌱",
    path: "/services/esg-sustainability",
    features: [
      "ESG Strategy Development",
      "Sustainability Reporting",
      "Carbon Footprint Assessment",
      "Stakeholder Engagement",
    ],
  },
  {
    title: "Audit & Assurance",
    description: "Comprehensive audit and assurance services for business confidence.",
    icon: "📊",
    path: "/services/audit-assurance",
    features: [
      "Financial Audits",
      "Internal Controls Review",
      "Risk Assessment",
      "Compliance Audits",
    ],
  },
  {
    title: "Accounting",
    description: "Professional accounting services to maintain financial accuracy and compliance.",
    icon: "📚",
    path: "/services/accounting",
    features: [
      "Bookkeeping",
      "Financial Reporting",
      "Payroll Services",
      "Tax Accounting",
    ],
  },
  {
    title: "Tax Services",
    description: "Expert tax planning and compliance services for UAE businesses.",
    icon: "💰",
    path: "/services/tax",
    features: [
      "VAT Compliance",
      "Tax Planning",
      "Corporate Tax",
      "International Tax Advisory",
    ],
  },
];

function Services() {
  useScrollToTop();
  const [selectedService, setSelectedService] = useState(serviceCards[0]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Comprehensive business solutions tailored to help your organization thrive in the UAE market.
            </p>
          </div>
        </div>
      </div>

      {/* Services Navigation and Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Service Navigation */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {serviceCards.map((service) => (
            <button
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedService.title === service.title
                  ? "bg-[#5D4A82] text-white"
                  : "bg-white text-[#5D4A82] hover:bg-[#856BAE] hover:text-white"
              } shadow-md`}
            >
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Selected Service Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-[#5D4A82] mb-4">
                  {selectedService.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {selectedService.description}
                </p>
                <div className="space-y-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-2 text-[#856BAE]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    to={selectedService.path}
                    className="inline-flex items-center px-6 py-3 bg-[#5D4A82] text-white rounded-lg hover:bg-[#856BAE] transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md bg-gradient-to-br from-[#5D4A82] to-[#856BAE] rounded-2xl p-6 text-white">
                  <div className="text-5xl mb-4">{selectedService.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">Why Choose Our {selectedService.title}?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Expert Team
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Tailored Solutions
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Fast Turnaround
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#5D4A82] text-white mt-8">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
            Contact us for a free consultation to discuss your business needs and how we can help you succeed in the UAE market.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="cta"
              size="lg"
              onClick={() => (window.location.href = "/get-started")}
              className="bg-white text-[#5D4A82] hover:bg-gray-100"
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = "/about")}
              className="border-2 border-white hover:bg-white hover:text-[#5D4A82]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;