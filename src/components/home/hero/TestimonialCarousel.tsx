import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "../../../components/ui/Typography";

interface Testimonial {
  name: string;
  position: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jean-Baptiste Recher",
    position:
      "Regional Vice President Development Luxury Brands Middle East, Africa and Türkiye at Accor",
    content: `I had the privilege of working with Jitheesh. He is highly knowledgeable, business-driven, detail-oriented, and an outstanding team player. Jitheesh's deep understanding of the hospitality industry makes him an invaluable asset to any company looking for expertise and dedication in this field.`,
  },
  {
    name: "Jerome Briet",
    position:
      "Chief Development Officer, Europe, Middle East & Africa at Marriott International",
    content: `Jitheesh is one of the most thorough and professional counsels I've had the pleasure of working with. His exceptional ability to find solutions to complex issues, combined with his professional and courteous demeanor, makes him an invaluable asset to any organization.`,
  },
  {
    name: "Jeremy Barker",
    position: "Legal Director at Moët Hennessy Europe",
    content: `Jitheesh has extensive experience and a deep understanding of the hotel industry across the Middle East and Africa. He is not only highly skilled but also approachable.`,
  },
  {
    name: "AJesh Avirah",
    position: "CEO, INGENUITY POD",
    content: `Starting with market research, HR support, promptly advocated to VC's, industry networks and negotiated competitive contract deals, sorted all visa deals! Cost effective supply chain and logistic operations, thanks to the apt location research. A2Z company set up in superb turnaround time! We could focus, as they did, analyze and improve the quality of our business system.`,
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-carousel relative overflow-visible w-full py-12 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 * direction }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 * direction }}
          transition={{ duration: 0.5 }}
          className="testimonial-content w-full overflow-visible"
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="testimonial-text max-w-4xl mx-auto">
              <p className="text-base md:text-testimonial text-center text-gray-600 italic mb-8">
                "{currentTestimonial.content}"
              </p>
            </div>
            <div className="author-info relative z-10 overflow-visible mb-8">
              <h3 className="text-lg md:text-testimonial-name text-center font-semibold text-[#5D4A82] mb-3">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm md:text-testimonial-title text-center text-gray-500 max-w-xl mx-auto font-semibold">
                {currentTestimonial.position}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#5D4A82] scale-125" : "bg-gray-300"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
