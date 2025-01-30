import React from "react";
import { Link } from "react-router-dom";
import trademark from "../assets/images/blogcontent/trademark.png";
import uaeTax from "../assets/images/blogcontent/UAETaxbenefits.png";
import vatReforms from "../assets/images/blogcontent/vatreformsimage.png";
import governance from "../assets/images/blogcontent/scgovernance.png";
import wpsBanner from "../assets/images/blogcontent/WPSbanner.jpg";

const blogPosts = [
  {
    id: "wps-uae-businesses",
    title: "The Critical Role of WPS in UAE Businesses",
    subtitle: "Ensuring Employee Welfare and Legal Compliance",
    date: "January 24, 2025",
    author: "LBC",
    excerpt:
      "Understanding the importance of Wage Protection System (WPS) in UAE businesses and its benefits for both employers and employees.",
    slug: "/blogs/wps-uae-businesses",
    image: wpsBanner,
    category: "Business",
  },
  {
    id: "uae-tax-benefits",
    title: "Unlocking UAE Tax Benefits for Indian Investors",
    subtitle: "Insights from the Latest Tax Ruling",
    date: "November 26, 2024",
    author: "LBC",
    excerpt:
      "Comprehensive analysis of the latest tax ruling affecting Indian investors in the UAE.",
    slug: "/blogs/uae-tax-benefits",
    image: uaeTax,
    category: "Business",
  },
  {
    id: "vat-reforms",
    title: "UAE VAT Reforms Unveiled",
    subtitle: "Key Impacts on Your Business",
    date: "November 18, 2024",
    author: "LBC",
    excerpt:
      "Understanding the latest VAT reforms and their implications for UAE businesses.",
    slug: "/blogs/vat-reforms",
    image: vatReforms,
    category: "Business",
  },
  {
    id: "trademark-essentials",
    title: "Is Your Service Brand Truly Protected?",
    subtitle: "Understanding Trademark Essentials",
    date: "November 8, 2024",
    author: "LBC",
    excerpt: "Essential guide to trademark protection for service brands.",
    slug: "/blogs/trademark-essentials",
    image: trademark,
    category: "Business",
  },
  {
    id: "corporate-governance",
    title: "Building Resilient Corporate Governance Frameworks",
    subtitle: "Ensuring Sustainable Business Success",
    date: "November 1, 2024",
    author: "LBC",
    excerpt:
      "Discover why a resilient governance framework is essential for modern boards and how to implement one.",
    slug: "/blogs/corporate-governance",
    image: governance,
    category: "Business",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Insights</h1>
        <p className="mt-4 text-xl text-gray-600">
          Expert perspectives on legal trends, compliance, and business
          transformation
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={post.slug}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-sm font-semibold text-blue-400">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {post.date} • {post.author}
              </p>
              <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              <span className="mt-4 inline-block text-blue-600 group-hover:text-blue-800">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
