import React from 'react';
import { Link } from 'react-router-dom';
import vatReforms from '../../assets/images/blogcontent/vatreformsimage.png';

const BlogPost = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to Insights
        </Link>
      </div>
      
      <article>
        <header className="mb-8">
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img src={vatReforms} alt="UAE VAT Reforms" className="object-cover rounded-lg shadow-lg w-full" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            UAE VAT Reforms Unveiled: Key Impacts on Your Business
          </h1>
          <div className="mt-4 text-gray-600">
            November 18, 2024 • By Luminous Legal Partners
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The UAE Federal Tax Authority has introduced significant VAT reforms effective from November 15, 2024, bringing important changes to registration thresholds and compliance requirements.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">New VAT Registration Thresholds</h2>
          <p>
            The mandatory VAT registration threshold remains at AED 375,000 in annual taxable turnover, while the voluntary registration threshold is maintained at AED 187,500.
          </p>
          <p>
            Businesses anticipating to exceed the mandatory threshold within 30 days must initiate registration procedures immediately to ensure compliance.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Changes in VAT Regulations</h2>
          <p>
            The amendments introduce new rules for digital economy transactions and expand provisions for cross-border services.
          </p>
          <p>
            Significant changes have been made to input tax recovery rules and the treatment of specific business sectors, including real estate and financial services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Compliance and Reporting Updates</h2>
          <p>
            Enhanced documentation requirements have been introduced for certain transactions, particularly those involving zero-rated supplies and exempt activities.
          </p>
          <p>
            The reforms include updated penalties for non-compliance and late registration, emphasizing the importance of timely adherence to VAT obligations.
          </p>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Share this article:</h3>
              <div className="mt-2 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-500">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-gray-500">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-gray-500">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;