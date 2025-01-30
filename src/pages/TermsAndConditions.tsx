import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";

const TermsAndConditions: React.FC = () => {
  useScrollToTop();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to LBC. By accessing and using our website, you accept and
          agree to be bound by the terms and conditions set forth below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the
          materials (information or software) on LBC's website for personal,
          non-commercial transitory viewing only.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          The materials on LBC's website are provided on an 'as is' basis. LBC
          makes no warranties, expressed or implied, and hereby disclaims and
          negates all other warranties including, without limitation, implied
          warranties or conditions of merchantability, fitness for a particular
          purpose, or non-infringement of intellectual property or other
          violation of rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
        <p className="mb-4">
          In no event shall LBC or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on LBC's website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Revisions and Errata</h2>
        <p className="mb-4">
          The materials appearing on LBC's website could include technical,
          typographical, or photographic errors. LBC does not warrant that any
          of the materials on its website are accurate, complete or current.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
        <p className="mb-4">
          LBC has not reviewed all of the sites linked to its website and is not
          responsible for the contents of any such linked site. The inclusion of
          any link does not imply endorsement by LBC of the site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Site Terms of Use Modifications
        </h2>
        <p className="mb-4">
          LBC may revise these terms of use for its website at any time without
          notice. By using this website you are agreeing to be bound by the then
          current version of these Terms and Conditions of Use.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws and you irrevocably submit to the exclusive jurisdiction
          of the courts in that location.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
