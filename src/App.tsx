import React from "react";

import WPSBlog from "./pages/blogs/wps-uae-businesses";
import UAETaxBlog from "./pages/blogs/uae-tax-benefits";
import VATReformsBlog from "./pages/blogs/vat-reforms";
import TrademarkBlog from "./pages/blogs/trademark-essentials";
import GovernanceBlog from "./pages/blogs/corporate-governance";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/auth/AdminLogin";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ProfileProcessorPage from "./components/image/ProfileProcessorPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import BlogPage from "./pages/Blogpage";
import { AppointmentProvider } from "./contexts/AppointmentContext";
import About from "./pages/About";
import Contact from "./pages/contact";
import GetStartedPage from "./pages/GetStartedPage";
import SuccessPage from "./pages/SuccessPage";
import HomePage from "./pages/HomePage";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import SEO from "./components/SEO";
import Company from "./pages/Company";
import TermsAndConditions from "./components/legal/terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./components/legal/privacy-policy/PrivacyPolicy";
import TrademarkPolicy from "./components/legal/trademark-policy/TrademarkPolicy";
import ComplianceStatement from "./components/legal/compliance-statement/ComplianceStatement";
import FraudAlert from "./components/legal/fraud-alert";
// Import animations
import "./styles/animations.css";

// Import Updated Services Pages
import Services from "./pages/Services";
import BusinessSetup from "./pages/services/BusinessSetup";
import AccountingServices from "./pages/services/AccountingServices";
import AuditServices from "./pages/services/AuditServices";
import LegalServices from "./pages/services/LegalServices";
import ComplianceServices from "./pages/services/ComplianceServices";
import HRsPROServices from "./pages/services/HRsPROServices";
import DocumentationClearing from "./pages/services/DocumentServices";
import TaxServices from "./pages/services/TaxServices";
import DataAnalytics from "./pages/services/DataAnalytics";
import AMLServices from "./pages/services/AMLServices";
import ESGServices from "./pages/services/ESGServices";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppointmentProvider>
            <div className="app">
              <Header />
              <main>
                <Routes>
                  {/* Main Pages */}
                  <Route
                    path="/"
                    element={
                      <>
                        <SEO
                          title="Expert Business Consulting Services, UAE | Luminous Bluewaters"
                          description="Leading corporate service provider in Dubai, UAE. Specializing in business consulting, HR services, audit, and data analytics solutions."
                          canonicalUrl="https://lumi-blue.com/"
                        />
                        <HomePage />
                      </>
                    }
                  />

                  {/* Terms and Conditions Page */}
                  <Route
                    path="/terms-and-conditions"
                    element={
                      <>
                        <SEO
                          title="Terms and Conditions | Luminous Bluewaters Consultancy"
                          description="Terms and conditions for using Luminous Bluewaters Consultancy's services and website."
                          canonicalUrl="https://lumi-blue.com/terms-and-conditions"
                        />
                        <TermsAndConditions />
                      </>
                    }
                  />

                  {/* Privacy Policy Page */}
                  <Route
                    path="/privacy-policy"
                    element={
                      <>
                        <SEO
                          title="Privacy Policy | Luminous Bluewaters Consultancy"
                          description="Privacy policy outlining how Luminous Bluewaters Consultancy handles and protects your personal information."
                          canonicalUrl="https://lumi-blue.com/privacy-policy"
                        />
                        <PrivacyPolicy />
                      </>
                    }
                  />

                  {/* Trademark Policy Page */}
                  <Route
                    path="/trademark-policy"
                    element={
                      <>
                        <SEO
                          title="Trademark Policy | Luminous Bluewaters Consultancy"
                          description="Trademark policy outlining the use and protection of Luminous Bluewaters Consultancy's brand assets and intellectual property."
                          canonicalUrl="https://lumi-blue.com/trademark-policy"
                        />
                        <TrademarkPolicy />
                      </>
                    }
                  />

                  {/* Compliance Statement Page */}
                  <Route
                    path="/compliance-statement"
                    element={
                      <>
                        <SEO
                          title="Compliance Statement | Luminous Bluewaters Consultancy"
                          description="Learn about our commitment to ethical business practices, anti-money laundering, data protection, and professional standards in Dubai, UAE."
                          canonicalUrl="https://lumi-blue.com/compliance-statement"
                        />
                        <ComplianceStatement />
                      </>
                    }
                  />
                  {/* Fraud Alert Page */}
                  <Route
                    path="/fraud-alert"
                    element={
                      <>
                        <SEO
                          title="Fraud Alert | Luminous Bluewaters Consultancy"
                          description="Important information about protecting yourself from fraudulent activities and unauthorized use of Luminous Bluewaters Consultancy's name."
                          canonicalUrl="https://lumi-blue.com/fraud-alert"
                        />
                        <FraudAlert />
                      </>
                    }
                  />

                  {/* About Page */}
                  <Route
                    path="/about"
                    element={
                      <>
                        <SEO
                          title="About Us | Luminous Bluewaters Consultancy"
                          description="Learn about Luminous Bluewaters Consultancy's mission, values, and expertise in providing corporate services in Dubai, UAE."
                          canonicalUrl="https://lumi-blue.com/about"
                        />
                        <About />
                      </>
                    }
                  />

                  {/* Company Page */}
                  <Route
                    path="/company"
                    element={
                      <>
                        <SEO
                          title="Our Company | Luminous Bluewaters Consultancy"
                          description="Meet our expert team at Luminous Bluewaters Consultancy. Over 100 years of combined experience in corporate services, legal, finance, and business solutions."
                          canonicalUrl="https://lumi-blue.com/company"
                        />
                        <Company />
                      </>
                    }
                  />

                  {/* Blog Page */}
                  <Route
                    path="/blog"
                    element={
                      <>
                        <SEO
                          title="Blog | Luminous Bluewaters Consultancy"
                          description="Stay informed with insights on business, corporate services, and UAE market trends from our expert team."
                          canonicalUrl="https://lumi-blue.com/blog"
                        />
                        <BlogPage />
                      </>
                    }
                  />
                  {/* Blog Post Page */}
                  <Route
                    path="/blogs/wps-uae-businesses"
                    element={<WPSBlog />}
                  />
                  <Route
                    path="/blogs/uae-tax-benefits"
                    element={<UAETaxBlog />}
                  />
                  <Route
                    path="/blogs/vat-reforms"
                    element={<VATReformsBlog />}
                  />
                  <Route
                    path="/blogs/trademark-essentials"
                    element={<TrademarkBlog />}
                  />
                  <Route
                    path="/blogs/corporate-governance"
                    element={<GovernanceBlog />}
                  />

                  {/* Get Started Page */}
                  <Route
                    path="/get-started"
                    element={
                      <>
                        <SEO
                          title="Get Started | Luminous Bluewaters Consultancy"
                          description="Begin your journey with Luminous Bluewaters Consultancy. Schedule a consultation for our corporate services in Dubai."
                          canonicalUrl="https://lumi-blue.com/get-started"
                        />
                        <GetStartedPage />
                      </>
                    }
                  />

                  {/* Contact Page */}
                  <Route
                    path="/contact"
                    element={
                      <>
                        <SEO
                          title="Contact Us | Luminous Bluewaters Consultancy"
                          description="Get in touch with our team for expert corporate services in Dubai. We're here to help your business succeed."
                          canonicalUrl="https://lumi-blue.com/contact"
                        />
                        <Contact />
                      </>
                    }
                  />

                  {/* Services Main Page */}
                  <Route
                    path="/services"
                    element={
                      <>
                        <SEO
                          title="Our Services | Luminous Bluewaters Consultancy"
                          description="Explore our comprehensive range of corporate services in Dubai, from business setup to advisory and compliance solutions."
                          canonicalUrl="https://lumi-blue.com/services"
                        />
                        <Services />
                      </>
                    }
                  />

                  {/* Services Sub-Pages */}
                  <Route
                    path="/services/business-setup"
                    element={
                      <>
                        <SEO
                          title="Business Setup Services Dubai | Luminous Bluewaters Consultancy"
                          description="Complete business setup services in Dubai including Freezone, Mainland, and Offshore solutions with expert guidance."
                          canonicalUrl="https://lumi-blue.com/services/business-setup"
                        />
                        <BusinessSetup />
                      </>
                    }
                  />

                  <Route
                    path="/services/accounting"
                    element={
                      <>
                        <SEO
                          title="Accounting Services Dubai | Luminous Bluewaters Consultancy"
                          description="Professional accounting services in Dubai including revenue accounting, financial reporting, and corporate finance."
                          canonicalUrl="https://lumi-blue.com/services/accounting"
                        />
                        <AccountingServices />
                      </>
                    }
                  />

                  <Route
                    path="/services/audit-assurance"
                    element={
                      <>
                        <SEO
                          title="Audit & Assurance Services Dubai | Luminous Bluewaters Consultancy"
                          description="Comprehensive audit services including statutory audits, internal audits, and assurance services in Dubai."
                          canonicalUrl="https://lumi-blue.com/services/audit-assurance"
                        />
                        <AuditServices />
                      </>
                    }
                  />

                  <Route
                    path="/services/legal"
                    element={
                      <>
                        <SEO
                          title="Legal Services Dubai | Luminous Bluewaters Consultancy"
                          description="Expert legal services including corporate law, M&A, IP management, and dispute resolution in Dubai."
                          canonicalUrl="https://lumi-blue.com/services/legal"
                        />
                        <LegalServices />
                      </>
                    }
                  />

                  <Route
                    path="/services/compliance"
                    element={
                      <>
                        <SEO
                          title="Compliance Services Dubai | Luminous Bluewaters Consultancy"
                          description="Comprehensive compliance services including regulatory affairs, AML, ESG, and corporate governance in Dubai."
                          canonicalUrl="https://lumi-blue.com/services/compliance"
                        />
                        <ComplianceServices />
                      </>
                    }
                  />

                  <Route
                    path="/services/hr-pro"
                    element={
                      <>
                        <SEO
                          title="HR PRO Services Dubai | Luminous Bluewaters Consultancy"
                          description="Complete HR and PRO services including visa processing, work permits, and license renewals in Dubai."
                          canonicalUrl="https://lumi-blue.com/services/hr-pro"
                        />
                        <HRsPROServices />
                      </>
                    }
                  />

                  <Route
                    path="/services/aml"
                    element={
                      <>
                        <SEO
                          title="Anti-Money Laundering Services Dubai | Luminous Bluewaters Consultancy"
                          description="Expert AML compliance services including policy development, risk assessment, and regulatory advisory for UAE businesses."
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
                    path="/services/documentation"
                    element={
                      <>
                        <SEO
                          title="Documentation Services Dubai | Luminous Bluewaters Consultancy"
                          description="Professional documentation services including attestation, notarisation, and certified translations in Dubai."
                          canonicalUrl="https://lumi-blue.com/services/documentation"
                        />
                        <DocumentationClearing />
                      </>
                    }
                  />

                  <Route
                    path="/services/tax"
                    element={
                      <>
                        <SEO
                          title="Tax Services Dubai | Luminous Bluewaters Consultancy"
                          description="Comprehensive tax services including corporate tax, VAT, tax planning, and residency certificates in Dubai."
                          canonicalUrl="https://lumi-blue.com/services/tax"
                        />
                        <TaxServices />
                      </>
                    }
                  />

                  <Route
                    path="/services/data-analytics"
                    element={
                      <>
                        <SEO
                          title="Data Analytics Services Dubai | Luminous Bluewaters Consultancy"
                          description="Transform your business with our comprehensive data analytics solutions including BI, predictive analytics, and process automation in Dubai."
                          canonicalUrl="https://lumi-blue.com/services/data-analytics"
                        />
                        <DataAnalytics />
                      </>
                    }
                  />

                  {/* Admin and Protected Routes */}
                  <Route path="/login" element={<AdminLogin />} />
                  <Route path="/success" element={<SuccessPage />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile-processor"
                    element={
                      <ProtectedRoute>
                        <ProfileProcessorPage />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
              <FloatingWhatsApp
                phoneNumber="+971562886878"
                message="Hello! I'm interested in exploring how Luminous Bluewaters Consultancy can help transform my business. Could you provide more information about your services?"
              />
            </div>
          </AppointmentProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};
export default App;
