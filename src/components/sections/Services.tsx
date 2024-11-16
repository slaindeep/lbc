import { motion } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  ClipboardCheck,
  FileCheck,
  Landmark,
  LineChart,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

function Services() {
  const services: Service[] = [
    // Legal & Compliance Services
    {
      id: 1,
      title: "Legal & Corporate Services",
      description:
        "Comprehensive legal solutions including corporate and commercial law, trademark protection, and infringement resolution. Expert guidance for all your business legal needs.",
      icon: <Scale className="w-8 h-8" />,
      category: "Legal & Compliance",
    },
    {
      id: 2,
      title: "Corporate Governance",
      description:
        "Establishing robust governance frameworks and ensuring regulatory compliance. We help structure your organization for transparency and accountability.",
      icon: <Shield className="w-8 h-8" />,
      category: "Legal & Compliance",
    },
    {
      id: 3,
      title: "Formation & Structuring",
      description:
        "Expert assistance in business formation, corporate structuring, and strategic organizational planning for optimal business efficiency.",
      icon: <Landmark className="w-8 h-8" />,
      category: "Legal & Compliance",
    },

    // Financial Services
    {
      id: 4,
      title: "Financial Services",
      description:
        "Strategic financial planning, management, and advisory services to drive your business growth and ensure fiscal health.",
      icon: <Briefcase className="w-8 h-8" />,
      category: "Financial Services",
    },
    {
      id: 5,
      title: "Audit & Assurance",
      description:
        "Comprehensive audit services ensuring operational efficiency, risk management, and compliance with international standards.",
      icon: <ClipboardCheck className="w-8 h-8" />,
      category: "Financial Services",
    },

    // People & Culture
    {
      id: 6,
      title: "People & Culture",
      description:
        "Building strong organizational cultures and implementing effective people strategies that drive engagement and performance.",
      icon: <Users className="w-8 h-8" />,
      category: "People & Operations",
    },
    {
      id: 7,
      title: "HR Transformation",
      description:
        "Modernizing HR practices through digital transformation, process optimization, and innovative talent management solutions.",
      icon: <Building2 className="w-8 h-8" />,
      category: "People & Operations",
    },

    // Business Excellence
    {
      id: 8,
      title: "Data Analytics",
      description:
        "Advanced data analysis and business intelligence solutions providing actionable insights for informed decision-making.",
      icon: <LineChart className="w-8 h-8" />,
      category: "Business Excellence",
    },
    {
      id: 9,
      title: "Quality Assurance",
      description:
        "Implementing comprehensive quality management systems and continuous improvement processes to ensure operational excellence.",
      icon: <BadgeCheck className="w-8 h-8" />,
      category: "Business Excellence",
    },
    {
      id: 10,
      title: "Business Administration",
      description:
        "End-to-end administrative support and process optimization to streamline your business operations and enhance efficiency.",
      icon: <FileCheck className="w-8 h-8" />,
      category: "Business Excellence",
    },
  ];

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to meet your
            organizational needs
          </p>
        </motion.div>

        {/* Services by Category */}
        {Object.entries(groupedServices).map(([category, categoryServices]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-[#5D4A82] mb-8 text-center">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            className="bg-gradient-to-r from-[#5D4A82] to-[#856BAE] 
            text-white px-8 py-4 rounded-lg font-semibold text-lg
            hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Learn More About Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
