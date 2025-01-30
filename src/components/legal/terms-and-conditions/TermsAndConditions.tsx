import React, { useEffect } from 'react';
import useScrollToTop from '../../../hooks/useScrollToTop';

const TermsAndConditions: React.FC = () => {
  useScrollToTop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-20"> {/* Added mt-20 for top margin */}
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <h2 className="text-2xl font-semibold mb-4">Luminous Bluewaters Consulting LLC (LBC)</h2>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">1. Agreement to Terms</h3>
          <p>
            These Terms and Conditions ("Terms") govern your use of the Luminous Bluewaters Consulting LLC ("LBC") website [lumi-blue.com]. By accessing or using this website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, you should refrain from using this website. LBC reserves the right to amend these Terms at any time without prior notice. It is your responsibility to review these Terms regularly to stay informed of any changes. Continued use of the website constitutes your acceptance of the updated Terms. These Terms form a binding legal agreement between you ("User") and LBC ("us," "we," or "our").
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">2. Use of the Website</h3>
          <p>
            This website is owned and operated by LBC. The content provided is for informational purposes only and is not intended as legal, financial, or professional advice. The materials on this website do not constitute legal representation or establish a solicitor-client or advisor-client relationship. You should not act on the information contained herein without obtaining professional legal or financial advice. Use of this website does not create any formal relationship between you and LBC.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">3. Confidentiality and Communications</h3>
          <p>
            Communications through this website or via email do not establish an advisor-client relationship with LBC. Any information submitted before the establishment of a formal engagement may not be treated as confidential and may be used in the interest of existing clients. Until a formal advisor-client relationship is established through signed terms of engagement, please refrain from transmitting confidential or sensitive information through this website or to any email address listed herein.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">4. Intellectual Property</h3>
          <p>
            Unless explicitly stated otherwise, all content on this website, including text, graphics, logos, images, and software, is the property of LBC or is used under license. This content is protected by applicable copyright, trademark, and intellectual property laws. You may not copy, reproduce, republish, distribute, or modify the website's content for commercial purposes without the express written permission of LBC. Personal, non-commercial use is permitted, provided no modifications are made to the original material.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">5. Privacy and Data Collection</h3>
          <p>
            LBC may collect personal information from users who communicate via email links, access password-protected areas, or submit data through this website. Non-personal information, such as IP addresses and browser data, may also be collected through the use of cookies. This information helps LBC track website performance and improve user experience. Users may disable cookies, but doing so may limit website functionality. LBC will not disclose your personal information to third parties without your consent, except as required by law. LBC is not responsible for the privacy practices of third-party sites linked to or from this website.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">6. Third-Party Links and Content</h3>
          <p>
            This website may contain links to external websites operated by third parties. LBC does not endorse or assume responsibility for the accuracy, legality, or content of these external sites. Users acknowledge that accessing third-party websites is at their own risk. LBC disclaims liability for any damages or losses arising from the use of third-party content, products, or services linked to this website.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">7. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, LBC disclaims all liability for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website. This includes, but is not limited to, loss of data, business interruption, and lost profits. LBC makes no warranties regarding the accuracy or completeness of website content and is not liable for errors or omissions.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">8. Jurisdiction and Governing Law</h3>
          <p>
            These Terms are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the UAE courts. LBC does not warrant that the materials on this website comply with the laws of jurisdictions outside the UAE. Users accessing the website from other countries do so at their own initiative and are responsible for compliance with local laws.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">9. Compliance with International Laws</h3>
          <p>
            LBC provides services in accordance with the laws and regulations of the jurisdictions in which it operates. However, LBC does not assert authority to offer legal or tax advice in jurisdictions outside its operational scope. Content and services may vary based on local laws and regulatory requirements.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">10. Contact Information</h3>
          <p>
            For questions or concerns regarding these Terms or the website, please contact Luminous Bluewaters Consulting LLC through the "Contact Us" section of the website. If you encounter technical difficulties, please notify us promptly using the same contact methods.
          </p>
        </section>

        <section className="mt-8">
          <p className="italic">
            Thank you for visiting our website. We value your interest and cooperation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;