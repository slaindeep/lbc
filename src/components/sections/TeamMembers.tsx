import { Linkedin, Mail } from "lucide-react";
import ahmedProfile from "../../assets/images/Ahmed.jpg";
import baluProfile from "../../assets/images/Balugprofile.jpg";
import jayaProfile from "../../assets/images/jayaprofile.jpg";
import jitheeshProfile from "../../assets/images/jitheeshprofilepic.jpg";
import joshuaProfile from "../../assets/images/Joshua_Headshot.jpg";
import sandeepProfile from "../../assets/images/sandeepProfile.jpg";
import stevenProfile from "../../assets/images/StevenA.jpg";
import tonyProfile from "../../assets/images/Tonyprofile.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;

  bio: string;
  education: string[];
  certifications: string[];
  responsibilities: string[];
  imageSrc: string;
  social: {
    linkedin?: string;
    email?: string;
  };
  featured?: boolean;
}

const TeamMembers = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Jayalakshmi Anand",
      role: "Senior Partner - Corporate Affairs and HR",

      bio: `An accomplished HR professional with over 20 years of extensive experience across consulting, energy, and fintech industries. As the Leadership Development Director at Luminous Bluewaters Group, she drives organizational excellence through strategic HR initiatives and innovative leadership programs.`,
      responsibilities: [
        "Designs and implements comprehensive leadership development programs",
        "Oversees talent acquisition and management strategies",
        "Leads organizational development initiatives",
        "Establishes HR best practices and corporate culture",
        "Drives employee engagement and retention strategies",
      ],
      education: [
        "PhD Candidate in Organizational Development and HR - Indian Institute of Management Kozhikode",
        "Master's degree in Business Management",
        "CIPD Associate Diploma in People Management",
      ],
      certifications: ["Certified NLP Practitioner", "Certified Coach"],
      social: {
        linkedin: "https://www.linkedin.com/in/jaya-anand-99ab95a",
        email: "jaya@luminousbluewaters.com",
      },
      featured: true,
      imageSrc: jayaProfile,
    },
    {
      id: 2,
      name: "Jitheesh Thilak",
      role: "Senior Partner - Legal and  Compliance",

      bio: `A pioneering force in investment law and mega contracts negotiation with 23 years of Post-Qualification Experience (PQE). As Advisory Services Director, he leads our strategic consulting initiatives, bringing extensive expertise in international corporate law and investment strategies to our clients.`,
      responsibilities: [
        "Leads strategic advisory services for complex corporate matters",
        "Oversees legal compliance and regulatory frameworks",
        "Directs cross-border transaction strategies",
        "Manages high-stakes contract negotiations",
        "Provides expert guidance on corporate governance",
      ],
      education: [
        "LLM, International Economic Law - University of Warwick (2001-2002)",
        "BA, LLB (Hons.), Law - Bangalore University (1996-2001)",
      ],
      certifications: [
        "Visiting Professor at International Law Universities (UAE, France, Canada, USA)",
        "Published Author of 20+ International Publications",
        "Expert in Corporate Governance and Investment Law",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/legalstrategist/",
        email: "jitheesh@luminouslegal.com",
      },
      featured: true,
      imageSrc: jitheeshProfile,
    },

    {
      id: 3,
      name: "Tony Martin",
      role: "Senior Partner - Finance and Auditing",

      bio: `A distinguished finance professional with 19 years of international experience, serving as Partner at RKA Global Chartered Accountants L.L.C., Dubai. Demonstrates exceptional expertise in financial leadership, strategic decision-making, and enterprise solutions across manufacturing, retail, wholesale, automotive, real estate, and contracting sectors.`,
      responsibilities: [
        "Leads enterprise-wide financial strategy and operational excellence",
        "Oversees complex project financing and international negotiations",
        "Directs cost optimization and efficiency improvement initiatives",
        "Manages strategic acquisitions and business restructuring",
        "Implements comprehensive financial control systems and risk management",
      ],
      education: [
        "Chartered Accountant - The Institute of Chartered Accountants of India",
        "CIMA, Accounting and Finance - The Chartered Institute of Management Accountants (2015-2016)",
        "Certificate Course on Forensic Accounting and Fraud Detection (2021-2022)",
      ],
      certifications: [
        "Certified CIMA and CGMA (UK)",
        "Expert in International Accounting Standards",
        "Specialist in Project Finance and Fund Raising ($70M+ portfolio)",
        "Proficient in Multiple ERP Systems",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/catonymartin/",
        email: "tony@luminousbluewaters.com",
      },
      featured: true,
      imageSrc: tonyProfile,
    },

    // {
    //   id: 4,
    //   name: "Steven Anzaldua",
    //   role: "Information Security Director",
    //   bio: `A distinguished cybersecurity expert with over 20 years of experience across major financial institutions. Specializes in information security governance, identity management, and fraud prevention. Known for developing innovative security solutions and leading comprehensive risk management programs.`,
    //   responsibilities: [
    //     "Leads enterprise-wide information security strategy and governance",
    //     "Oversees identity and access management programs",
    //     "Directs security risk assessment and compliance initiatives",
    //     "Manages fraud prevention and detection systems",
    //     "Develops and implements security control frameworks",
    //   ],
    //   education: [
    //     "Bachelor of Applied Science - Amercan Public University",
    //     "Multiple Industry Certifications in Information Security",
    //   ],
    //   certifications: [
    //     "Expert in Identity and Access Management (IAM)",
    //     "Patent Holder: Mutual Authentication System (ES-1900.00|09142-8253.US00)",
    //     "Specialist in Data-Driven Security Operations",
    //   ],
    //   social: {
    //     linkedin: "https://www.linkedin.com/in/steven-a-73080131/",
    //     email: "steven@luminousbluewaters.com",
    //   },
    //   featured: true,
    //   imageSrc: stevenProfile,
    // },

    {
      id: 5,
      name: "Ahmed Al Shehhi",
      role: "Partner - Business Development and Strategic Alliance",
      bio: `A seasoned Development Director with over 20 years of high-level experience across local and international markets. With expertise spanning the Middle East, Europe, and Asia, Ahmed has established himself as a transformative leader in business development and strategic partnerships. His entrepreneurial mindset and deep industry knowledge have consistently driven sustainable growth and excellence across diverse sectors.`,
      responsibilities: [
        "Leads global business development initiatives and strategic partnerships",
        "Develops and executes international market entry strategies",
        "Oversees high-level client relationships and business negotiations",
        "Drives operational innovation and excellence",
        "Manages executive-level partnerships across multiple regions",
      ],
      education: [
        "Post Graduate Diploma in Strategic Planning and Business Excellence - Carolina International University",
        "Advanced Diploma in Business Administration - Arabian Global Academy, UAE",
      ],
      certifications: [
        "Executive Board Member for multiple regional and international companies",
        "Certified Strategic Planning Professional",
        "Expert in International Business Development",
        "Specialist in Business Excellence and Innovation",
      ],
      social: {
        email: "ahmed@luminousbluewaters.com",
      },
      featured: true,
      imageSrc: ahmedProfile,
    },

    // {
    //   id: 6,
    //   name: "Balu Gopalakrishnan",
    //   role: "Legal Director - Corporate & Construction",
    //   bio: `A distinguished legal professional with over 20 years of experience specializing in corporate and construction law across the UAE and India. As Managing Partner at Luminous Legal Partners, Balu brings extensive expertise in dispute resolution, contract negotiation, and corporate governance. His comprehensive understanding of international business law and proven track record in managing complex legal affairs makes him an invaluable asset in navigating the intricate legal landscape of cross-border business operations.`,
    //   responsibilities: [
    //     "Leads corporate legal strategy and compliance initiatives",
    //     "Oversees complex contract negotiations and dispute resolutions",
    //     "Manages international legal partnerships and joint ventures",
    //     "Directs construction law and property development matters",
    //     "Provides strategic legal counsel on corporate governance",
    //   ],
    //   education: [
    //     "LLB, Law - Karnatak University (1997-2004)",
    //     "Multiple Specialized Certifications in Corporate and Construction Law",
    //   ],
    //   certifications: [
    //     "Expert in Corporate Law and Governance",
    //     "Specialist in Construction Law and Dispute Resolution",
    //     "Certified in International Contract Law",
    //     "Advanced Certification in Legal Writing and Research",
    //   ],
    //   social: {
    //     linkedin: "https://www.linkedin.com/in/balu-gopalakrishnan-72451814/",
    //     email: "balu@luminouslegal.com",
    //   },
    //   featured: true,
    //   imageSrc: baluProfile,
    // },
    // {
    //   id: 7,
    //   name: "Joshua Seibert",
    //   role: "Director of Audit & Analytics",
    //   bio: `A distinguished audit and analytics professional with over 15 years of experience in operational and financial auditing. Joshua brings expertise in transforming audit processes through advanced data analytics and visualization. His background spans Big Four consulting at Ernst & Young and corporate leadership at Marathon Petroleum Corporation, where he pioneered data-driven audit methodologies and led cross-functional teams in implementing innovative solutions.`,
    //   responsibilities: [
    //     "Leads data-driven audit strategies and methodologies",
    //     "Oversees operational and financial audit programs",
    //     "Directs implementation of analytics solutions",
    //     "Manages cross-functional audit teams and projects",
    //     "Develops and implements audit efficiency initiatives",
    //   ],
    //   education: [
    //     "Masters of Accountancy - Texas State University (2003-2008)",
    //     "Certified Public Accountant (CPA) - Texas State Board of Public Accountancy",
    //   ],
    //   certifications: [
    //     "Certified Public Accountant (CPA)",
    //     "Expert in Data Analytics and Visualization",
    //     "Specialist in Microsoft Power Platform (Power BI, Power Apps, Power Query)",
    //     "Advanced Certification in SAP ERP and ACL Analytics",
    //   ],
    //   social: {
    //     linkedin: "https://www.linkedin.com/in/joshua-seibert-91699546/",
    //     email: "joshua@luminousbluewaters.com",
    //   },
    //   featured: true,
    //   imageSrc: joshuaProfile,
    // },

    {
      id: 8,
      name: "Sandeep Vasudevan",
      role: "Partner - Digital Innovation and Analytics",
      bio: `A strategic digital transformation leader with over 20+ years of expertise in driving enterprise-wide innovation across Internal Audit, Banking, and Process Automation. Patent holder and recognized innovator in developing data-driven solutions that revolutionize business processes. At Marathon Petroleum Corporation, Sandeep has demonstrated excellence in architecting solutions that bridge business intelligence with operational excellence, achieving 100% stakeholder satisfaction across 32+ major enterprise projects.`,
      responsibilities: [
        "Plays a key role in executing enterprise-wide digital transformation initiatives",
        "Develops and implements advanced analytics solutions",
        "Directs process automation and optimization strategies",
        "Manages cross-functional innovation projects",
        "Oversees business intelligence and data visualization programs",
      ],
      education: [
        "BA, Economics - Bangalore University (1997-2001)",
        "Multiple Advanced Certifications in Data Analytics and Business Intelligence",
      ],
      certifications: [
        "Patent Holder: Enterprise-Wide Complaint Aggregation System",
        "Expert in Advanced Analytics & Data Visualization",
        "Certified in Business Intelligence (Power BI, Tableau)",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/sandeep-vasudevan-8755448/",
        email: "sandeep@luminousbluewaters.com",
      },
      featured: true,
      imageSrc: sandeepProfile,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving excellence through our IDEAL leadership framework
          </p>
        </div>

        {/* Featured Team Members */}
        <div className="space-y-8">
          {teamMembers.map(
            (member) =>
              member.featured && (
                <div
                  key={member.id}
                  className="transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="grid md:grid-cols-2 items-stretch">
                      {/* Image Section */}
                      <div className="relative h-[350px] md:h-auto aspect-[4/5]">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <svg className="w-48 h-48" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="#5D4A82" />
                            <text
                              x="50"
                              y="50"
                              textAnchor="middle"
                              dy=".3em"
                              fill="white"
                              fontSize="40"
                            >
                              LBC
                            </text>
                          </svg>
                        </div>
                        <img
                          src={member.imageSrc}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5D4A82]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content Section */}
                      <div className="p-6 md:p-8 flex flex-col h-full">
                        <div className="space-y-3">
                          <div className="mb-3">
                            <h3 className="text-2xl font-bold text-[#5D4A82] mb-1">
                              {member.name}
                            </h3>
                            <p className="text-[#856BAE] font-medium text-lg">
                              {member.role}
                            </p>
                            <p className="text-[#856BAE] text-sm italic"></p>
                          </div>

                          <p className="text-gray-600 leading-relaxed text-sm">
                            {member.bio}
                          </p>

                          {/* Key Responsibilities */}
                          <div className="mb-2">
                            <h4 className="text-[#5D4A82] font-semibold mb-1">
                              Key Responsibilities
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                              {member.responsibilities.map((resp, index) => (
                                <li key={index} className="text-sm">
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Education */}
                          <div className="mb-2">
                            <h4 className="text-[#5D4A82] font-semibold mb-1">
                              Education
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                              {member.education.map((edu, index) => (
                                <li key={index} className="text-sm">
                                  {edu}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Certifications */}
                          <div className="mb-2">
                            <h4 className="text-[#5D4A82] font-semibold mb-1">
                              Certifications & Achievements
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                              {member.certifications.map((cert, index) => (
                                <li key={index} className="text-sm">
                                  {cert}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 mt-3 pt-3 border-t border-gray-100">
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#5D4A82] hover:text-[#856BAE] transition-colors flex items-center space-x-2"
                            >
                              <Linkedin className="w-5 h-5" />
                              <span className="text-sm">LinkedIn Profile</span>
                            </a>
                          )}
                          {member.social.email && (
                            <a
                              href={`mailto:${member.social.email}`}
                              className="text-[#5D4A82] hover:text-[#856BAE] transition-colors flex items-center space-x-2"
                            >
                              <Mail className="w-5 h-5" />
                              <span className="text-sm">Email</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
