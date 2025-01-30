import React, { useEffect } from 'react';
import useScrollToTop from '../../../hooks/useScrollToTop';

const ComplianceStatement: React.FC = () => {
  useScrollToTop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">Compliance Statement</h1>
      <h2 className="text-2xl font-semibold mb-4">Luminous Bluewaters Consultancy LLC (LBC)</h2>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">1. Ethics and Professional Standards</h3>
          <p>
            Luminous Bluewaters Consultancy LLC ("LBC") upholds the highest ethical and professional standards across all operations. Our commitment to compliance with applicable laws, rules, and regulations is unwavering and applies to all employees, regardless of their role, and across all our offices. Integrity, transparency, and accountability form the cornerstone of our business practices.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">2. Anti-Bribery and Corruption</h3>
          <p>
            LBC enforces a strict zero-tolerance policy against bribery and corruption in all jurisdictions where we operate. We are dedicated to maintaining the highest levels of ethical conduct and will not engage in, condone, or facilitate any form of bribery, facilitation payments, kickbacks, or other improper financial inducements. Employees, agents, and third parties representing LBC are prohibited from soliciting, accepting, or offering bribes, whether directly or indirectly.
          </p>
          <p className="mt-4">
            For further details on our anti-bribery policies and procedures, please contact our AML Officer at{" "}
            <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">3. Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF)</h3>
          <p>
            LBC's AML and CTF policies reflect the highest regulatory standards in the jurisdictions in which we operate. These policies apply universally across all our offices and business activities. Our firm implements rigorous internal procedures to detect and report any suspicious activity related to money laundering or terrorist financing to the relevant authorities, ensuring full compliance with our legal obligations.
          </p>
          <p className="mt-4">
            For additional information on our AML and CTF policies, please contact our AML Officer at{" "}
            <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">4. Data Privacy and Protection</h3>
          <p>
            LBC places the utmost importance on data privacy and the protection of personal information. Acting as a data controller, we ensure that personal data collected or provided during our business operations is safeguarded in compliance with applicable data protection laws. Our practices reflect our commitment to maintaining confidentiality and respecting the privacy rights of individuals. For further information, please refer to our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">5. Diversity and Inclusion</h3>
          <p>
            At LBC, we celebrate diversity and promote an inclusive environment where everyone is afforded equal opportunity. Our business strategy prioritizes diversity as a fundamental driver of innovation and success. We are committed to fostering a workplace culture that values and respects different perspectives, encouraging professional growth for all employees regardless of their background.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">6. Human Rights and Labor Practices</h3>
          <p>
            LBC respects and supports internationally recognized human rights principles. We are committed to conducting our business with integrity, ensuring that we are not complicit in human rights abuses. Our firm upholds employment rights and is dedicated to eliminating all forms of forced, compulsory, and child labor within our operations and supply chain.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">7. Code of Conduct</h3>
          <p>
            Our Code of Conduct governs the professional behavior of all LBC personnel, including directors, partners, associates, support staff, and temporary employees. We extend these high ethical standards to subcontractors, suppliers, agents, and other third parties with whom we engage. We expect our partners and service providers to adhere to the same principles of integrity and ethical conduct that define our operations.
          </p>
          <p className="mt-4">
            A copy of our Code of Conduct is available upon request at{" "}
            <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">8. Professional Indemnity Insurance</h3>
          <p>
            LBC maintains professional indemnity insurance to safeguard the interests of our clients and mitigate potential risks associated with our services. For details regarding our coverage, please contact{" "}
            <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">9. Feedback and Concerns</h3>
          <p>
            LBC is committed to delivering exceptional legal services. We welcome feedback from clients as part of our continuous effort to improve service quality. If you encounter any concerns or issues regarding our services, we encourage you to reach out directly. We treat all feedback with the highest priority and view it as an opportunity to enhance our offerings.
          </p>
          <p className="mt-4">
            Please contact{" "}
            <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a>
            {" "}for any inquiries, concerns, or suggestions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ComplianceStatement;