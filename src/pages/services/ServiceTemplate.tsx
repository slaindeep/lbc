import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/Buttons";
import { ServiceIcons } from "../../components/services/ServiceIcons";
import OptimizedImage from "../../components/OptimizedImage";

interface Feature {
  title: string;
  byline?: string;
  description: string;
  icon?: string;
  bulletPoints?: string[];
}

interface ServiceProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  description: string;
  heroImage?: string;
  keyFeatures: Feature[];
  benefits: Feature[];
  process: {
    step: number;
    title: string;
    description: string;
    image: string;
  }[];
}

const ServiceTemplate = (props: ServiceProps): JSX.Element => {
  const {
    title,
    subtitle,
    ctaText,
    description,
    heroImage = "/images/services/banners/default/default_1280.webp",
    keyFeatures,
    benefits,
    process,
  } = props;

  const renderIcon = (
    iconName: string | undefined,
    size: "small" | "large"
  ) => {
    if (!iconName) return null;

    const sizes = {
      small: {
        container: "w-12 h-12",
        icon: "w-6 h-6",
      },
      large: {
        container: "w-16 h-16",
        icon: "w-8 h-8",
      },
    };

    const IconComponent =
      (ServiceIcons as any)[iconName] || ServiceIcons.bookkeeping;

    return (
      <div
        className={`bg-[#5D4A82]/10 ${sizes[size].container} ${
          size === "large" ? "rounded-full" : "rounded-lg"
        } flex items-center justify-center mb-4 ${
          size === "large" ? "mx-auto" : ""
        }`}
      >
        <IconComponent className={`${sizes[size].icon} text-[#5D4A82]`} />
      </div>
    );
  };

  const FeatureCard = ({
    feature,
    index,
  }: {
    feature: Feature;
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {feature.icon && renderIcon(feature.icon, "small")}
      <h3 className="text-xl font-semibold text-[#5D4A82] mb-2">
        {feature.title}
      </h3>
      {feature.byline && (
        <h4 className="text-lg font-medium text-[#856BAE] mb-3">
          {feature.byline}
        </h4>
      )}
      <p className="text-gray-600 mb-4">{feature.description}</p>
      {feature.bulletPoints && (
        <div className="mt-4">
          <h4 className="font-semibold text-[#5D4A82] mb-2">Key Benefits:</h4>
          <div className="space-y-2">
            {feature.bulletPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#856BAE]" />
                <span className="text-gray-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );

  const BenefitCard = ({
    benefit,
    index,
  }: {
    benefit: Feature;
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      {benefit.icon && renderIcon(benefit.icon, "large")}
      <h3 className="text-xl font-semibold text-[#5D4A82] mb-3">
        {benefit.title}
      </h3>
      <p className="text-gray-600">{benefit.description}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-16 md:pt-24 mb-12 md:mb-0">
        <div className="absolute inset-0 overflow-hidden h-[800px] md:h-[600px]">
          <OptimizedImage
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5D4A82]/90 to-[#856BAE]/90 mix-blend-multiply" />
        </div>

        <div className="relative container mx-auto px-4 pt-24 md:pt-20 pb-32 md:pb-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-4xl font-bold text-white/90 mb-3 md:mb-4"
              >
                {subtitle}
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/90 mb-6 md:mb-8 whitespace-pre-wrap"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="cta-light"
                onClick={() => (window.location.href = "/get-started")}
              >
                {ctaText || "Get Started →"}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="pt-32 md:pt-20 pb-10 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-[#5D4A82] text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-16 text-[#5D4A82] text-center">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={benefit.title}
                  benefit={benefit}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-16 text-[#5D4A82] text-center">
              Our Process
            </h2>
            <div className="space-y-20">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#5D4A82] text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                        {step.step}
                      </div>
                      <OptimizedImage
                        src={step.image}
                        alt={step.title}
                        className="w-full h-[300px] lg:h-[400px] object-cover rounded-xl shadow-lg"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold text-[#5D4A82] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#5D4A82] mb-4"
            >
              Starting or Expanding Your Business in the UAE?
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-[#856BAE] mb-8"
            >
              Ready to Get Started?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              Contact us today to learn more about our services and how we can
              help your business succeed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="cta"
                onClick={() => (window.location.href = "/get-started")}
              >
                Schedule a Free Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;