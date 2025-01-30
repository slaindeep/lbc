import React from 'react';
import { Link } from 'react-router-dom';
import wpsOne from '../../assets/images/blogcontent/wpsone.jpg';
import wpsTwo from '../../assets/images/blogcontent/wpstwo.jpg';
import wpsBanner from '../../assets/images/blogcontent/WPSbanner.jpg';

const WPSBlog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to Insights
        </Link>
      </div>
      
      <article className="prose prose-lg max-w-none prose-h1:text-4xl prose-h1:font-bold prose-h2:text-3xl prose-h2:font-semibold">
        <img src={wpsBanner} alt="WPS in UAE" className="w-full rounded-lg mb-8"/>
        
        <h1>The Critical Role of WPS in UAE Businesses: Ensuring Employee Welfare and Legal Compliance</h1>
        
        <div className="mt-4 text-gray-600 mb-8">December 1, 2024 • By Luminous Legal Partners</div>
        
        <p>The UAE, known for its fast-growing business landscape, is a top destination for entrepreneurs and job seekers alike. Its business-friendly environment, lack of income tax, and strategic location makes it a haven for opportunities. However, to ensure smooth operations and align with the nation's vision, companies are required to adhere to specific rules and regulations—one of the most significant being the Wage Protection System (WPS).</p>

        <h2>What is the Wage Protection System (WPS) in UAE?</h2>
        <p>The Wage Protection System (WPS) was introduced in July 2009 through Ministerial Decree No. 788 by the Ministry of Human Resources and Emiratisation (MOHRE) in collaboration with the Central Bank of UAE...</p>

        <img src={wpsOne} alt="WPS Benefits" className="my-8 rounded-lg"/>

        <h2>Benefits of WPS for Employees</h2>
        <p>The Wage Protection System (WPS) in the UAE offers significant benefits for employees, ensuring their welfare and financial security...</p>

        <h2>Benefits of WPS for Employers</h2>
        <p>WPS are significantly crucial for the employers also. It is contributing to both operational efficiency and legal compliance...</p>

        <img src={wpsTwo} alt="WPS Implementation" className="my-8 rounded-lg"/>

        <h2>How WPS Enhances UAE's Business Environment</h2>
        <p>The WPS has significantly contributed to a positive working environment in the UAE by preventing unethical practices and ensuring transparency in financial transactions...</p>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-bold mb-4">Need Assistance with WPS Compliance?</h2>
          <p>Enabling the Wage Protection System can be a complex task for businesses. At Luminous Bluewaters Consultancy, we are dedicated to helping companies ensure seamless WPS registration and ongoing compliance. Our team of experts is here to guide you through the entire process, ensuring that your business operates efficiently and in full accordance with UAE labor laws.</p>
          <p className="mt-4">Reach out to us today for tailored WPS solutions that empower both your business and employees.</p>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Share this article:</h3>
              <div className="mt-2 flex space-x-4">
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://lumi-blue.com/blog/wps-uae-businesses`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">LinkedIn</a>
                <a href={`https://twitter.com/intent/tweet?url=https://lumi-blue.com/blog/wps-uae-businesses`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">Twitter</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://lumi-blue.com/blog/wps-uae-businesses`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WPSBlog;