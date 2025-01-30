import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WhyUsHome = () => {
  const challengeSections = [
    {
      id: "Business Setup in UAE",
      image: "/images/aboutimg/10-process.webp",
      title: "Business setup in UAE",
      content:
        "The process of establishing a business in the UAE can be substantial. With various legal requirements and market entry strategies, many entrepreneurs struggle to grasp the regulations, licensing, and local compliance.",
      stats:
        "50% of business owners in the UAE find it challenging to select the appropriate legal structure, jurisdiction, and manage tasks such as opening a bank account. ",
      path: "/services/business-setup",
    },
    {
      id: "legal",
      image: "/images/aboutimg/11.png",
      title: "Legal & Compliance Challenges",
      content:
        "SMEs in Dubai navigate a complex landscape of commercial regulations and licensing requirements. Many operate without proper legal documentation, risking unforeseen liabilities and disputes.",
      stats: "43% face talent issues tied to legal compliance",
      path: "/services/legal",
    },
    {
      id: "tech",
      image: "/images/aboutimg/technology.png",
      title: "Technology & Digital Transformation",
      content:
        "The rapid pace of technological advancement creates significant challenges for SMEs. From finding skilled developers to managing implementation costs, businesses struggle to keep up.",
      stats: "77% of UAE businesses investing in cloud technology",
      path: "/services/data-analytics",
    },
    {
      id: "accounting",
      image: "/images/aboutimg/12.png",
      title: "Accounting & Reporting",
      content:
        "The UAE is introducing new financial laws and regulations to safeguard the country's financial health. Adapting to these evolving tax laws and compliance requirements calls for businesses to stay well-informed to avoid penalties and maintain accuracy. ",
      stats:
        "Numerous SMEs lack the necessary tools and expertise for precise financial planning and forecasting, which can hinder their long-term growth. ",
      path: "/services/accounting",
    },
    {
      id: "audit",
      image: "/images/aboutimg/aa.webp",
      title: "Challenges in Auditing & Assurance",
      content:
        "Auditing and assurance involve handling intricate regulations, ensuring financial compliance, and upholding transparency. Businesses require expert advice on these financial matters to adhere to evolving laws and regulations and to avoid hefty fines.",
      stats:
        "The UAE market is projected to grow at a CAGR of 5.8% from 2024 to 2030",
      path: "/services/audit-assurance",
    },
    {
      id: "hr",
      image: "/images/aboutimg/8.png",
      title: "Human Resource Management",
      content:
        "In a competitive market with high living costs, Dubai SMEs struggle with talent acquisition and retention. Managing a diverse workforce in a multicultural society presents unique challenges.",
      stats: "90% of private sector jobs, yet face low productivity",
      path: "/services/hrs-pro",
    },
  ];

  const visionSection = {
    title: "Our Vision: Transforming Challenges into Opportunities",
    content:
      "At LBC, we understand these intricate challenges facing Dubai's SMEs. Our vision is to be more than a service provider – we aim to be a transformative partner in your business journey. By combining local expertise with global standards, we provide comprehensive solutions that address the core challenges while maintaining cost-effectiveness.",
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#5D4A82]/10 to-[#856BAE]/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat text-h2 font-h2 text-[#5D4A82] mb-5">
            Your Ideal Business Partner in the UAE
          </h2>
          <p className="font-outfit text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Luminous Bluewaters Consultancy is your trusted partner for business
            success in the UAE. As more than just a business consultancy, we
            collaborate closely with our clients, helping them to overcome
            challenges and unlock growth opportunities. Our vision is built on a
            strong foundation of market insight, seamlessly integrating global
            expertise with local business needs to drive sustainable success.
          </p>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {challengeSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[2px] p-4">
                  <p className="font-outfit text-body-sm text-white">
                    {section.stats}
                  </p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-montserrat text-h5 font-h5 text-[#5D4A82] mb-3">
                  {section.title}
                </h3>
                <p className="font-outfit text-body text-gray-600 leading-relaxed flex-grow">
                  {section.content}
                </p>
                <Link
                  to={section.path}
                  className="self-end mt-4 w-10 h-10 rounded-full bg-[#5D4A82] hover:bg-[#856BAE] transition-colors duration-300 flex items-center justify-center group"
                  aria-label={`Learn more about ${section.title}`}
                >
                  <svg
                    className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300"
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
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl"
        >
          <h2 className="font-montserrat text-h3 font-h3 text-[#5D4A82] mb-6 text-center">
            {visionSection.title}
          </h2>
          <p className="font-outfit text-body-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
            {visionSection.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsHome;
