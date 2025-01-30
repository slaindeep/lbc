import React, { useEffect } from 'react';
import useScrollToTop from '../../../hooks/useScrollToTop';

const FraudAlert: React.FC = () => {
  useScrollToTop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">Fraud Alert</h1>
      <h2 className="text-2xl font-semibold mb-4">Luminous Bluewaters Consulting LLC (LBC)</h2>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <p>
            Luminous Bluewaters Consulting LLC ("LBC") is committed to protecting our clients, partners, and the public from fraudulent activities that misuse our name and reputation. We take this matter seriously and strive to ensure that our identity and services are safeguarded against illegal use.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Identifying Fraudulent Communications</h3>
          <p>
            If you receive any communication that appears to be from Luminous Bluewaters Consulting LLC but raises doubts about its authenticity, we strongly advise you to refrain from responding. Please forward the suspicious communication to{" "}
            <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a>
            {" "}for verification. We recommend that you do not engage with unsolicited offers of employment, investment opportunities, or financial transactions that claim to be associated with LBC.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Unauthorized Use of Our Name and Fraudulent Emails</h3>
          <p>
            There have been instances where unauthorized parties have misused the name of LBC and our professionals in fraudulent schemes. These scams often involve emails inviting recipients to participate in fictitious investment opportunities or business ventures, with the intention of defrauding them. Luminous Bluewaters Consulting LLC has no involvement in such communications, and any documentation attached to these fraudulent emails is not endorsed or issued by our firm.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Email Authenticity and Domain Security</h3>
          <p>
            All genuine emails from LBC will originate from our official domain: <strong>@lumi-blue.com</strong>. We do not send communications from generic email accounts such as Yahoo, Gmail, Hotmail, or other public domains. Any email claiming to represent LBC that does not use our official domain should be treated as suspicious.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Protecting Yourself from Fraud</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Verify Sources:</strong> If you receive an email or communication that references Luminous Bluewaters Consulting LLC, verify the sender's email address and domain before engaging.
            </li>
            <li>
              <strong>Do Not Respond to Suspicious Offers:</strong> Avoid responding to unsolicited offers of employment, financial requests, or investment proposals.
            </li>
            <li>
              <strong>Report Suspicious Activity:</strong> If you suspect you have been targeted by fraudulent activity using our name, immediately report the incident to LBC at{" "}
              <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a>. 
              Additionally, we advise contacting your local law enforcement or regulatory authorities to report the fraudulent activity.
            </li>
            <li>
              <strong>Exercise Caution:</strong> Never share personal or financial information with unknown parties claiming to represent LBC. Always verify authenticity directly with us.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">How to Contact Us</h3>
          <p>For further information or to report fraudulent communications, please contact us at:</p>
          <div className="mt-4">
            <p><a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a></p>
            <p>Luminous Bluewaters Consulting LLC</p>
            <p>PO Box 99123</p>
            <p>First Floor, Office No. 110, Golf Park Building</p>
            <p>Al Garhoud, Dubai, United Arab Emirates</p>
          </div>
        </section>

        <section className="mb-8">
          <p>
            Luminous Bluewaters Consulting LLC values the trust and security of our clients and the public. By remaining vigilant and verifying communications, you can help protect yourself against fraudulent schemes and ensure safe interactions with our firm.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FraudAlert;