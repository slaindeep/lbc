import React from 'react';
import { Link } from 'react-router-dom';
import trademark from '../../assets/images/blogcontent/trademark.png';

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
            <img src={trademark} alt="Trademark Protection" className="object-cover rounded-lg shadow-lg w-full" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Is Your Service Brand Truly Protected? Understanding Trademark Essentials
          </h1>
          <div className="mt-4 text-gray-600">
            November 8, 2024 • By Luminous Legal Partners
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            In today's competitive market, protecting your service brand through proper trademark registration is crucial. Learn about the essential steps and considerations for securing your brand's identity.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Importance of Trademark Registration</h2>
          <p>
            Trademark registration provides exclusive rights to your brand identity, preventing unauthorized use and potential market confusion.
          </p>
          <p>
            A registered trademark becomes a valuable business asset, enhancing your company's market value and providing legal protection against infringement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Steps in Trademark Protection</h2>
          <p>
            Conduct comprehensive trademark searches before registration to ensure uniqueness and avoid potential conflicts.
          </p>
          <p>
            Consider international trademark registration through the Madrid System for global brand protection, especially important in today's interconnected market.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Maintaining Your Trademark Rights</h2>
          <p>
            Regular monitoring of market activities to detect potential infringement and maintaining proper documentation of trademark usage.
          </p>
          <p>
            Implementing a clear strategy for trademark enforcement and renewal to ensure continuous protection of your brand assets.
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