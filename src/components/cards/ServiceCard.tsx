import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  detailedServices?: string[];
  popularFreezones?: string[];
  icon: LucideIcon;
  image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  benefits,
  detailedServices,
  popularFreezones,
  icon: Icon,
  image
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <Icon className="w-8 h-8 text-[#8364e8]" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-700">{description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Key Benefits</h4>
            <ul className="list-disc list-inside space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">{benefit}</li>
              ))}
            </ul>
          </div>

          {detailedServices && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Our Services</h4>
              <ul className="list-disc list-inside space-y-1">
                {detailedServices.map((service, index) => (
                  <li key={index} className="text-gray-700">{service}</li>
                ))}
              </ul>
            </div>
          )}

          {popularFreezones && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Popular Freezones</h4>
              <ul className="list-disc list-inside space-y-1">
                {popularFreezones.map((freezone, index) => (
                  <li key={index} className="text-gray-700">{freezone}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};