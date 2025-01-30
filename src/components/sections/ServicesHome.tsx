import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, Landmark, BadgeCheck, ClipboardCheck, FileCheck } from 'lucide-react';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: "Legal & Corporate Services",
    description: "Comprehensive legal solutions including corporate and commercial law, trademark protection, and expert guidance.",
    icon: <Scale className="w-8 h-8" />,
    path: "/services/legal"
  },
  {
    title: "Corporate Governance",
    description: "Establishing robust governance frameworks and ensuring regulatory compliance for transparency.",
    icon: <Shield className="w-8 h-8" />,
    path: "/services/corporate"
  },
  {
    title: "Formation & Structuring",
    description: "Expert assistance in business formation, corporate structuring, and strategic planning.",
    icon: <Landmark className="w-8 h-8" />,
    path: "/services/formation"
  },
  {
    title: "Tax & Audit Services",
    description: "Comprehensive tax planning and audit services ensuring compliance and optimization.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    path: "/services/tax"
  },
  {
    title: "Business Advisory",
    description: "Strategic guidance and advisory services for sustainable business growth.",
    icon: <BadgeCheck className="w-8 h-8" />,
    path: "/services/advisory"
  },
  {
    title: "Business Administration",
    description: "End-to-end administrative support and process optimization for enhanced efficiency.",
    icon: <FileCheck className="w-8 h-8" />,
    path: "/services/administration"
  }
];

const ServicesHome = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to meet your organizational needs in the UAE market
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className="flex items-center justify-center w-16 h-16 mb-6
                bg-gradient-to-br from-[#5D4A82] to-[#856BAE] rounded-lg
                text-white group-hover:scale-110 transition-transform duration-300"
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#5D4A82] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 text-[#856BAE] font-semibold flex items-center">
                Learn More 
                <span className="transform group-hover:translate-x-2 transition-transform ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-[#5D4A82] to-[#856BAE] 
              text-white px-8 py-4 rounded-lg font-semibold text-lg
              hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;