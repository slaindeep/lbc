import React, { useState } from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';

function BusinessSetup() {
  useScrollToTop();
  const [activeType, setActiveType] = useState('Freezone');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-[#5D4A82] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Set up your business in Dubai, UAE</h1>
            <p className="text-xl md:text-2xl text-gray-100">
              We make it Simple and Seamless
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8">
            Navigate Dubai's diverse business landscape with expert guidance from Luminous
            Bluewaters Corporate Services. Whether you're considering a Freezone, Mainland, or
            Offshore setup, we ensure your journey from vision to execution is seamless and
            successful.
          </p>

          {/* Service Types */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {['Freezone', 'Mainland', 'Offshore', 'Restructuring', 'Liquidation'].map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeType === type
                    ? 'bg-[#5D4A82] text-white'
                    : 'bg-white text-[#5D4A82] hover:bg-[#856BAE] hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#5D4A82] mb-4">
              Setup Your Freezone Company
            </h2>
            <h3 className="text-xl text-gray-700 mb-6">
              Get 100% Ownership Without Local Sponsor
            </h3>
            <p className="text-gray-600 mb-8">
              Launch your business with maximum flexibility and benefits. With over 50 Freezones across the
              UAE, we help you choose the perfect fit for your business vision.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-[#5D4A82] mb-4">Our Setup Services:</h4>
                <ol className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#856BAE] font-bold">1.</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">Business Consultation</h5>
                      <p className="text-gray-600">Choose the right Freezone based on your business activity</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#856BAE] font-bold">2.</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">Company Registration</h5>
                      <p className="text-gray-600">Seamless documentation and registration process</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#856BAE] font-bold">3.</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">Bank account opening</h5>
                      <p className="text-gray-600">We can assist you in opening, advising the KYC's required</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#5D4A82] mb-4">Popular Freezones We Cover:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-[#856BAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Dubai South Free Zone (DWC)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-[#856BAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    DMCC (Dubai Multi Commodities Centre)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#5D4A82] mb-4">Key Benefits:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-[#856BAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    100% foreign ownership with complete control
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-[#856BAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Tax exemptions on corporate profits
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#5D4A82] mb-4">Ready to Transform Your Business?</h2>
            <button className="bg-[#5D4A82] text-white px-8 py-3 rounded-lg hover:bg-[#856BAE] transition-colors duration-300">
              Free Business Consultation
            </button>
          </div>

          {/* Partners Section */}
          <div className="mt-16">
            <h3 className="text-center text-xl font-semibold text-[#5D4A82] mb-8">OUR FREE ZONE SERVICE CHANNEL PARTNERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Add partner logos here */}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-center text-xl font-semibold text-[#5D4A82] mb-8">Frequently Asked Questions</h3>
            {/* Add FAQ items here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSetup;