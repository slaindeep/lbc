import React from "react";
import { Route, Routes } from "react-router-dom";
import LegalServices from "../pages/services/LegalServices";
import CorporateServices from "../pages/services/CorporateServices";
import BusinessSetup from "../pages/services/BusinessSetup";
import TaxServices from "../pages/services/TaxServices";
import BusinessAdministrationServices from "../pages/services/BusinessAdministrationServices";
import AMLServices from "../pages/services/AMLServices";
import ESGServices from "../pages/services/ESGServices";
import TermsAndConditions from "../components/legal/terms-and-conditions/TermsAndConditions";
import SEO from "../components/SEO";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/services/legal" element={<LegalServices />} />
      <Route path="/services/corporate" element={<CorporateServices />} />
      <Route path="/services/business-setup" element={<BusinessSetup />} />
      <Route path="/services/tax" element={<TaxServices />} />
      <Route
        path="/services/aml"
        element={
          <>
            <SEO
              title="AML Services Dubai | Luminous Bluewaters Consultancy"
              description="Expert Anti-Money Laundering (AML) compliance services, including policy development, risk assessment, and advisory for businesses in Dubai."
              canonicalUrl="https://lumi-blue.com/services/aml"
            />
            <AMLServices />
          </>
        }
      />
      <Route
        path="/services/esg-sustainability"
        element={
          <>
            <SEO
              title="ESG and Sustainability Advisory Dubai | Luminous Bluewaters Consultancy"
              description="Expert ESG and sustainability advisory services helping UAE businesses achieve sustainable growth through comprehensive environmental, social, and governance solutions."
              canonicalUrl="https://lumi-blue.com/services/esg-sustainability"
            />
            <ESGServices />
          </>
        }
      />
      <Route
        path="/services/administration"
        element={<BusinessAdministrationServices />}
      />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
};

export default AppRoutes;