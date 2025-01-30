import React from 'react';
import { Link } from 'react-router-dom';
import governance from '../../assets/images/blogcontent/scgovernance.png';

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
            <img src={governance} alt="Corporate Governance" className="object-cover rounded-lg shadow-lg w-full" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Building Resilient Corporate Governance Frameworks
          </h1>
          <div className="mt-4 text-gray-600">
            November 1, 2024 • By Luminous Legal Partners
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Effective corporate governance is crucial for organizational success and sustainability. Discover why a resilient governance framework is essential for modern boards and how to implement one.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Foundation of Resilient Governance</h2>
          <p>
            A resilient governance framework provides the structure for effective decision-making, risk management, and stakeholder engagement.
          </p>
          <p>
            It ensures transparency, accountability, and sustainable business practices while adapting to changing market conditions and regulatory requirements.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Components of Effective Governance</h2>
          <p>
            Clear definition of roles and responsibilities at board and management levels, ensuring proper oversight and execution of strategic objectives.
          </p>
          <p>
            Robust risk management systems and internal controls that can adapt to emerging challenges and opportunities.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Implementing Strong Governance Practices</h2>
          <p>
            Regular board evaluations and training programs to enhance effectiveness and maintain current knowledge of best practices.
          </p>
          <p>
            Development of clear policies and procedures for decision-making, succession planning, and stakeholder communication.
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