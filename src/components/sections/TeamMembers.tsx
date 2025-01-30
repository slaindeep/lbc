import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import OptimizedImage from "../OptimizedImage";

// Import images directly
import ahmedProfile from "../../assets/images/Ahmed.jpg";
import jayaProfile from "../../assets/images/jayaprofile.jpg";
import jitheeshProfile from "../../assets/images/jitheeshprofilepic.jpg";
import sandeepProfile from "../../assets/images/sandeepProfile.jpg";
import tonyProfile from "../../assets/images/Tonyprofile.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  experience: string;
  imageSrc: string;
  social: {
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jayalakshmi Anand",
    role: "Senior Partner - Corporate Affairs and HR",
    bio: "An accomplished HR professional with over 20 years of extensive experience across consulting, energy, and fintech industries.",
    expertise: [
      "Company Incorporation",
      "Strategic HR Management",
      "PRO Services",
      "Organizational Excellence",
      "Leadership Development",
    ],
    experience: "20+ years",
    imageSrc: jayaProfile,
    social: {
      linkedin: "https://www.linkedin.com/in/jaya-anand-99ab95a",
      email: "jaya@luminousbluewaters.com",
    },
  },
  {
    id: 2,
    name: "Jitheesh Thilak",
    role: "Senior Partner - Legal and Compliance",
    bio: "A pioneering force in investment law and mega contracts negotiation with 23 years of Post-Qualification Experience (PQE).",
    expertise: [
      "International Corporate Law",
      "Investment Strategies",
      "Regulatory Compliance",
      "Contract Negotiations",
    ],
    experience: "23+ years",
    imageSrc: jitheeshProfile,
    social: {
      linkedin: "https://www.linkedin.com/in/legalstrategist/",
      email: "jitheesh@luminouslegal.com",
    },
  },
  {
    id: 3,
    name: "Tony Martin",
    role: "Senior Partner - Finance and Auditing",
    bio: "A distinguished finance professional with international experience in operational and financial auditing.",
    expertise: [
      "Financial Strategy",
      "Operational Auditing",
      "Strategic Planning",
      "Risk Management",
    ],
    experience: "19+ years",
    imageSrc: tonyProfile,
    social: {
      linkedin: "https://www.linkedin.com/in/catonymartin/",
      email: "tony@luminousbluewaters.com",
    },
  },
  {
    id: 4,
    name: "Ahmed Al Shehhi",
    role: "Partner - Business Development",
    bio: "A seasoned Development Director with extensive experience across local and international markets.",
    expertise: [
      "Global Business Development",
      "Strategic Partnerships",
      "Market Entry Strategy",
      "International Relations",
    ],
    experience: "20+ years",
    imageSrc: ahmedProfile,
    social: {
      email: "ahmed@luminousbluewaters.com",
    },
  },
  {
    id: 5,
    name: "Sandeep Vasudevan",
    role: "Partner - Digital Innovation",
    bio: "A strategic digital transformation leader with expertise in driving enterprise-wide innovation.",
    expertise: [
      "Digital Transformation",
      "Innovation Strategy",
      "Process Automation",
      "Data Analytics",
    ],
    experience: "20+ years",
    imageSrc: sandeepProfile,
    social: {
      linkedin: "https://www.linkedin.com/in/sandeep-vasudevan-8755448/",
      email: "sandeep@luminousbluewaters.com",
    },
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl overflow-hidden shadow-lg bg-white group h-[500px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={member.imageSrc}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2">
          <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
          <p className="text-sm font-medium opacity-90">{member.role}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-sm text-gray-200 mb-4">{member.bio}</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {member.expertise.map((skill, index) => (
              <div
                key={index}
                className="text-xs bg-white/10 rounded px-2 py-1 backdrop-blur-sm"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#856BAE] transition-colors"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.social.email && (
              <a
                href={`mailto:${member.social.email}`}
                className="text-white hover:text-[#856BAE] transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#5D4A82] mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 100 years of combined experience, our leadership team
            brings together diverse expertise to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
