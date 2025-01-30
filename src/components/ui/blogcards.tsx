import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

const BlogCards = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Example articles array
  const articles = [
    {
      id: "1",
      title: "UAE VAT Reforms 2024",
      excerpt:
        "The UAE Ministry of Finance (MoF) recently introduced Federal Decree-Law No. 16 of 2024...",
    },
    {
      id: "2",
      title: "The Financial Value of Trademark Registration",
      excerpt:
        "In today's crowded marketplace, a registered trademark is more than a protective measure...",
    },
    {
      id: "3",
      title: "Core Elements of a Governance Framework",
      excerpt:
        "A robust governance framework is essential for driving sustainable business practices...",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-4 p-4">
      {articles.map((article) => (
        <motion.div
          key={article.id}
          className="rounded-xl overflow-hidden"
          initial={false}
        >
          <motion.button
            onClick={() => toggleExpand(article.id)}
            className="w-full text-left"
          >
            <div
              className={`bg-[#5D4A82] p-6 flex justify-between items-center text-white rounded-xl
                ${expandedId === article.id ? "rounded-b-none" : ""}`}
            >
              <h2 className="text-xl font-semibold">{article.title}</h2>
              {expandedId === article.id ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
          </motion.button>

          <AnimatePresence>
            {expandedId === article.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-t-0 border-[#5D4A82] rounded-b-xl"
              >
                <div className="p-6">
                  <p className="text-gray-600">{article.excerpt}</p>
                  <div className="mt-4">
                    <button className="text-[#5D4A82] font-semibold hover:underline">
                      Read full article →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCards;
