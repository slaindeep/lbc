import { motion } from "framer-motion";
import {
  BookOpen,
  Crown,
  Globe,
  Lightbulb,
  Scale,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeamMembers from "../components/sections/TeamMembers"; // Import TeamMembers component

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const idealValues = [
    {
      letter: "I",
      icon: Lightbulb,
      title: "Innovation & Integrity",
      description:
        "Pioneering solutions while maintaining unwavering ethical standards. We combine creative thinking with strong moral principles to deliver exceptional results.",
    },
    {
      letter: "D",
      icon: Shield,
      title: "Dependability",
      description:
        "Your trusted partner in business transformation. We remain steadfast in our commitments and reliable in our delivery, ensuring consistent excellence in every engagement.",
    },
    {
      letter: "E",
      icon: Zap,
      title: "Empowering",
      description:
        "Enabling organizations and individuals to reach their full potential. We provide the tools, knowledge, and support needed to drive sustainable growth and success.",
    },
    {
      letter: "A",
      icon: Scale,
      title: "Accountability",
      description:
        "Taking ownership of outcomes and delivering measurable results. We hold ourselves to the highest standards and take full responsibility for achieving our clients' objectives.",
    },
    {
      letter: "L",
      icon: Crown,
      title: "Leadership",
      description:
        "Guiding transformation through expertise and vision. We lead by example, providing strategic direction and empowering teams to achieve exceptional results through collaborative excellence.",
    },
  ];

  const statsData = [
    {
      icon: BookOpen,
      value: "20+",
      label: "Years Regional Experience",
    },
    {
      icon: Users,
      value: "100+",
      label: "Years Combined Expertise",
    },
    {
      icon: Globe,
      value: "5",
      label: "Strategic Locations",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5D4A82] to-[#856BAE] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow delay-700" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
              <span className="text-white/90 font-medium">
                Your IDEAL Consulting Partner in UAE & GCC
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Transforming Businesses Through
              <span className="bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent block mt-2 leading-normal pb-2">
                Strategic Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
              Bridging global expertise with local insight to deliver
              comprehensive business solutions across the UAE and GCC region.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-16">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-white/80 mb-4 mx-auto" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* IDEAL Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
              Our IDEAL Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five core principles that define our commitment to excellence and
              drive transformative results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {idealValues.map((value, index) => (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group perspective h-full"
              >
                <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-10 h-full">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform-style-3d group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center mb-6">
                        <span className="text-6xl font-bold bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-transparent bg-clip-text">
                          {value.letter}
                        </span>
                      </div>
                      <value.icon className="w-12 h-12 text-[#5D4A82] mb-4 mx-auto" />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-[#5D4A82] mb-3 text-center">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-center mt-auto">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TeamMembers />
      </motion.div>
    </div>
  );
};

export default About;
