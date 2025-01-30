import { motion } from "framer-motion";

const IdealPartner = () => {
  const idealValues = [
    {
      letter: "I",
      words: "Innovative & Integrity",
      description:
        "We are Innovative in our approach while maintaining Integrity",
      color: "from-purple-600 to-indigo-600",
    },
    {
      letter: "D",
      words: "Dependability",
      description: "We remain Dependable in our commitments",
      color: "from-indigo-600 to-blue-600",
    },
    {
      letter: "E",
      words: "Empowering",
      description: "We focus on Empowering our clients and team",
      color: "from-blue-600 to-cyan-600",
    },
    {
      letter: "A",
      words: "Accountability",
      description: "We take Accountability for our actions",
      color: "from-cyan-600 to-teal-600",
    },
    {
      letter: "L",
      words: "Leadership",
      description: "We demonstrate Leadership in our industry",
      color: "from-teal-600 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#5D4A82]/5 to-[#856BAE]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
            The IDEAL Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our values define who we are and how we work
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {idealValues.map((value, index) => (
            <motion.div
              key={value.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300
                border border-gray-100 h-full flex flex-col items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center mb-4"
                >
                  <span className="text-6xl font-bold bg-gradient-to-r from-[#5D4A82] to-[#856BAE] 
                    text-transparent bg-clip-text">
                    {value.letter}
                  </span>
                </motion.div>
                <h3 className="text-lg font-bold text-[#5D4A82] mb-2 text-center">
                  {value.words}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealPartner;