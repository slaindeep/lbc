import React, { useEffect } from 'react';
import useScrollToTop from '../../../hooks/useScrollToTop';

const TrademarkPolicy: React.FC = () => {
  useScrollToTop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">Trademark Policy</h1>
      <h2 className="text-2xl font-semibold mb-4">Luminous Bluewaters Consulting LLC (LBC)</h2>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
          <p>
            Trademarks are vital assets of Luminous Bluewaters Consulting LLC ("Luminous Bluewaters," "LBC," or "we"), representing our brand identity, reputation, and goodwill. The protection and integrity of our trademarks are fundamental to preserving the value associated with our name and visual identity. We are committed to enforcing and safeguarding our intellectual property rights globally, ensuring that unauthorized use or infringement is addressed diligently and effectively.
          </p>
          <p className="mt-4">
            This Trademark Policy outlines the principles governing the use of Luminous Bluewaters trademarks, ensuring consistent application and preventing misuse. Unauthorized use of our trademarks in any form is strictly prohibited unless prior written approval has been granted by Luminous Bluewaters Consulting LLC. Any unauthorized association or use that implies endorsement, sponsorship, or affiliation with LBC is prohibited and subject to legal action.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">2. Luminous Bluewaters Trademarks</h3>
          <p>
            The trademarks owned by Luminous Bluewaters Consulting LLC include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Our Name:</strong> Luminous Bluewaters</li>
            <li><strong>Our Logo:</strong> Visual representations of the Luminous Bluewaters brand</li>
            <li><strong>Our Tagline:</strong> Any associated brand messaging linked to our identity</li>
            <li><strong>Distinctive Shapes:</strong> Unique designs and shapes associated with the Luminous Bluewaters brand</li>
            <li><strong>Brand Colors:</strong> The distinctive color palette representative of Luminous Bluewaters</li>
          </ul>
          <p className="mt-4">
            These trademarks are protected by applicable intellectual property laws and regulations across jurisdictions in which we operate.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">3. Permitted Use of Luminous Bluewaters Trademarks</h3>
          <p>
            Use of Luminous Bluewaters trademarks is permitted only with express written consent from Luminous Bluewaters Consulting LLC. Any approved usage must strictly adhere to the guidelines outlined in this policy to maintain the integrity and consistency of our brand. By seeking permission, users acknowledge and agree to comply with the following conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Accuracy in Representation:</strong> Trademarks must be used in their exact form, maintaining proper spelling, format, and capitalization. No abbreviations, acronyms, or modifications are permitted.</li>
            <li><strong>No Alterations:</strong> The appearance, design, and visual identity of Luminous Bluewaters trademarks must not be distorted, modified, or altered in any way, including through resizing, rotation, or color changes.</li>
            <li><strong>Prohibited Combinations:</strong> Luminous Bluewaters trademarks may not be used alongside or in combination with other trademarks, logos, or brand identifiers without prior authorization.</li>
            <li><strong>No Misleading Associations:</strong> Trademarks must not be used in a manner that implies endorsement, certification, sponsorship, or partnership by Luminous Bluewaters Consulting LLC without explicit written approval.</li>
            <li><strong>Respect for Reputation:</strong> The trademarks may not be displayed in any context that could harm, disparage, or negatively affect the reputation and credibility of Luminous Bluewaters Consulting LLC.</li>
            <li><strong>Avoid Confusion:</strong> Users must refrain from adopting trademarks, domain names, trade names, or slogans that are confusingly similar to those of Luminous Bluewaters.</li>
            <li><strong>No Registrations of LBC Trademarks:</strong> Third parties are prohibited from registering or attempting to register any Luminous Bluewaters trademarks, or similar marks, under their name.</li>
            <li><strong>Descriptive Use:</strong> Luminous Bluewaters trademarks must always be used as adjectives describing a product or service, never as nouns or verbs.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">4. Unauthorized Use and Enforcement</h3>
          <p>
            Luminous Bluewaters Consulting LLC will take legal action to prevent unauthorized use of its trademarks. This includes pursuing litigation against parties that attempt to register, misuse, or infringe upon our intellectual property. Users found in violation of this policy may face termination of partnerships, contracts, or any ongoing business relationships.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">5. Domain Names and Social Media</h3>
          <p>
            The registration or use of domain names, social media accounts, or digital handles that incorporate Luminous Bluewaters trademarks without express written permission is strictly prohibited. Any unauthorized digital presence will be subject to takedown requests and further legal enforcement if necessary.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">6. Point of Contact</h3>
          <p>
            For queries or requests concerning the use of Luminous Bluewaters trademarks, or to seek approval for permitted use, please contact our Brand Protection Team at:
          </p>
          <p className="mt-4">
            <a href="mailto:info@lumi-blue.com" className="text-purple-600 hover:text-purple-800">info@lumi-blue.com</a>
          </p>
          <p className="mt-4">
            Luminous Bluewaters Consulting LLC reserves the right to modify this Trademark Policy at any time. Users are encouraged to regularly review this policy to ensure ongoing compliance with the latest trademark usage guidelines.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TrademarkPolicy;