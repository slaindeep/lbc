import React from "react";
import CompanyOverview from "../components/sections/CompanyOverview";
import SEO from "../components/SEO";

const Company: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Company | Luminous Bluewaters Consultancy"
        description="Meet our expert team at Luminous Bluewaters Consultancy. Over 100 years of combined experience in corporate services, legal, finance, and business solutions."
        canonicalUrl="https://lumi-blue.com/company"
      />
      <CompanyOverview />
    </>
  );
};

export default Company;
