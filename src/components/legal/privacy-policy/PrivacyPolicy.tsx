import React, { useEffect } from 'react';
import useScrollToTop from '../../../hooks/useScrollToTop';

const PrivacyPolicy: React.FC = () => {
  useScrollToTop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <h2 className="text-2xl font-semibold mb-4">Luminous Bluewaters Consultancy LLC (LBC)</h2>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
          <p>
            Luminous Bluewaters Consultancy LLC ("LBC," "we," "us," or "our"), located at PO Box 99123, First Floor, Office No. 110, Golf Park Building, Al Garhoud, Dubai, United Arab Emirates, is committed to safeguarding the privacy and protection of personal information. This Privacy Policy outlines how we collect, process, and store personal data in accordance with applicable data protection laws, including the DIFC Data Protection Law and other relevant regulations. This Policy applies to all entities within LBC and may be supplemented by jurisdiction-specific addendums.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">2. Data Controller</h3>
          <p>
            For the purposes of applicable data protection laws, LBC is typically the "data controller" of personal information provided to us. In certain cases, where we process personal data on behalf of clients, we may act as a "data processor." This Policy applies to personal data collected through our website [lumi-blue.com], mobile platforms, or in the course of providing services to clients.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">3. Collection of Personal Information</h3>
          <p>
            We collect personal information as part of our business operations, client engagements, and through interactions with our website or mobile app. This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Identity and Contact Information:</strong> Name, job title, employer, contact details, and social media profiles.</li>
            <li><strong>Verification Data:</strong> Passport details, national ID, tenancy contracts, or publicly available records.</li>
            <li><strong>Demographic Data:</strong> Date of birth, gender, nationality, and language preferences.</li>
            <li><strong>Financial Information:</strong> Bank account details, payment records, and billing information.</li>
            <li><strong>Technical Data:</strong> IP addresses, browser types, website usage, and location data.</li>
            <li><strong>Engagement Information:</strong> Details of services requested, meetings attended, and events participated in.</li>
            <li><strong>Health and Accessibility Information:</strong> Dietary preferences or accessibility requirements for events.</li>
            <li><strong>Other Information:</strong> Any additional information voluntarily provided by you.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">4. How We Collect Personal Information</h3>
          <p>
            We collect personal information directly from you, through your interaction with our website, and from third-party sources such as clients, employers, regulators, credit agencies, and publicly available records. Data may also be gathered during business development, recruitment, and when providing legal services.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">5. Use of Personal Information</h3>
          <p>Your personal information is processed for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Providing consultancy services.</li>
            <li>Verifying identities for compliance and risk management.</li>
            <li>Managing client relationships, payments, and invoicing.</li>
            <li>Sending marketing communications, newsletters, and event invitations.</li>
            <li>Ensuring the security of our premises and IT systems.</li>
            <li>Meeting legal and regulatory obligations, including anti-money laundering (AML) and sanctions compliance.</li>
            <li>Conducting internal audits, investigations, and responding to regulatory authorities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">6. Legal Basis for Processing</h3>
          <p>We process personal data on the basis of:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Your consent, where required.</li>
            <li>Performance of a contract or to take steps prior to entering into a contract.</li>
            <li>Compliance with legal obligations.</li>
            <li>Legitimate interests pursued by LBC or third parties, except where overridden by your rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">7. Data Security and Confidentiality</h3>
          <p>
            LBC implements robust administrative, technical, and physical security measures to protect personal data from unauthorized access, misuse, or alteration. All employees and third-party service providers are bound by confidentiality obligations.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">8. Sharing and Transfers of Personal Information</h3>
          <p>LBC may share personal information with:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Affiliates and offices within our network.</li>
            <li>External service providers (e.g., IT services, cloud platforms).</li>
            <li>Regulators, government authorities, and legal entities where required by law.</li>
            <li>Event organizers, professional advisors, and third parties assisting in the delivery of services.</li>
          </ul>
          <p className="mt-4">
            Where data is transferred internationally, we ensure appropriate safeguards are in place, in accordance with applicable data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">9. Retention of Personal Information</h3>
          <p>
            Personal data is retained for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. This includes legal, tax, and accounting requirements or for the defense of legal claims.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">10. Your Rights</h3>
          <p>Subject to applicable laws, you have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Access, correction, and deletion of your personal data.</li>
            <li>Objection to or restriction of data processing.</li>
            <li>Data portability, where applicable.</li>
            <li>Withdrawal of consent at any time, without affecting prior processing.</li>
            <li>Lodging a complaint with the relevant data protection authority.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">11. Marketing and Communications</h3>
          <p>
            You may opt out of receiving marketing communications at any time by contacting us at <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a> or using the unsubscribe link in our emails.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">12. Cookies and Tracking Technologies</h3>
          <p>
            Our website uses cookies to enhance user experience and track visitor analytics. You may adjust your browser settings to disable cookies, though this may limit website functionality. For more information, refer to our Cookie Policy.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">13. Third-Party Websites</h3>
          <p>
            Our website may contain links to external websites. LBC is not responsible for the privacy practices or content of third-party sites. Users are encouraged to review the privacy policies of those sites.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">14. Updates to this Privacy Policy</h3>
          <p>
            LBC may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices. Material changes will be communicated through our website. Please review this page periodically for the latest information.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">15. Contact Us</h3>
          <p>
            For questions or concerns regarding this Privacy Policy or how we handle your personal data, please contact:
          </p>
          <div className="mt-4">
            <p>Chief Risk & Compliance Officer</p>
            <p><a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a></p>
            <p>Luminous Bluewaters Consultancy LLC</p>
            <p>PO Box 99123</p>
            <p>First Floor, Office No. 110, Golf Park Building</p>
            <p>Al Garhoud, Dubai, United Arab Emirates</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;