"use client";

import LegalPage, { LegalSection } from "@/components/boltlabs/LegalPage";

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" updated="June 2026" testId="terms-page">
      <LegalSection heading="1. Agreement to Terms">
        <p>
          These Terms & Conditions ("Terms") govern your use of the Boltlabs website (the "Site") and any services
          provided by Boltlabs ("we", "our", or "us"), a Social Media Marketing and Web Development agency
          headquartered in Delhi, India. By accessing the Site or engaging our services, you agree to be bound by these
          Terms. If you do not agree, please do not use the Site.
        </p>
      </LegalSection>

      <LegalSection heading="2. Services">
        <p>
          Boltlabs provides digital services including, but not limited to, social media marketing, content creation,
          React-based website development, landing page design, and 3D web experiences. The specific scope,
          deliverables, timelines, and fees for any engagement will be defined in a separate proposal, quotation, or
          agreement between you and Boltlabs.
        </p>
      </LegalSection>

      <LegalSection heading="3. Quotes, Payments & Refunds">
        <ul className="list-disc pl-6 space-y-2">
          <li>All quotations are valid for 30 days unless stated otherwise.</li>
          <li>Projects may require an advance payment before work commences, as specified in the project agreement.</li>
          <li>Fees for completed work and third-party costs (e.g., ad spend, hosting, licences) are non-refundable unless otherwise agreed in writing.</li>
          <li>Late payments may result in suspension of work or services.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Client Responsibilities">
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide timely access to content, brand assets, accounts, and approvals required for the project.</li>
          <li>Ensure that all materials supplied to us do not infringe any third-party rights.</li>
          <li>Review and approve deliverables within the agreed review periods.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Intellectual Property">
        <p>
          Upon full payment, ownership of final deliverables created specifically for you transfers to you, unless
          otherwise agreed. Boltlabs retains ownership of pre-existing tools, frameworks, and know-how used in
          producing the deliverables. We reserve the right to showcase completed work in our portfolio and marketing
          materials unless you request otherwise in writing.
        </p>
      </LegalSection>

      <LegalSection heading="6. Marketing Results Disclaimer">
        <p>
          While we apply data-driven strategies and industry best practices, results from social media marketing,
          advertising campaigns, and conversion optimisation depend on many factors outside our control (including
          platform algorithms, market conditions, and budgets). We do not guarantee specific outcomes such as
          follower counts, engagement rates, lead volumes, or revenue figures.
        </p>
      </LegalSection>

      <LegalSection heading="7. Third-Party Platforms">
        <p>
          Our services may involve third-party platforms such as Meta (Facebook/Instagram), Google, and hosting
          providers. Your use of those platforms is governed by their own terms and policies. We are not responsible
          for changes, outages, or account actions taken by third-party platforms.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Boltlabs shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or loss of profits or revenues, arising from your use of the Site or our
          services. Our total liability for any claim shall not exceed the amount paid by you to Boltlabs for the
          specific service giving rise to the claim.
        </p>
      </LegalSection>

      <LegalSection heading="9. Termination">
        <p>
          Either party may terminate an engagement with written notice as specified in the project agreement. Upon
          termination, you agree to pay for all work completed up to the date of termination.
        </p>
      </LegalSection>

      <LegalSection heading="10. Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject
          to the exclusive jurisdiction of the courts of Delhi, India.
        </p>
      </LegalSection>

      <LegalSection heading="11. Changes to These Terms">
        <p>
          We may revise these Terms at any time. The updated version will be indicated by the "Last updated" date at
          the top of this page. Continued use of the Site after changes constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="12. Contact Us">
        <ul className="list-disc pl-6 space-y-2">
          <li>Email: <a href="mailto:boltlabs1@gmail.com" className="text-[#B26CE8] hover:underline">boltlabs1@gmail.com</a></li>
          <li>Phone: <a href="tel:+919971210492" className="text-[#B26CE8] hover:underline">+91 9971210492</a></li>
          <li>Boltlabs Agency, Delhi, India</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
