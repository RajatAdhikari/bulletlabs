import LegalPage, { LegalSection } from "@/components/boltlabs/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026" testId="privacy-policy-page">
      <LegalSection heading="1. Introduction">
        <p>
          Boltlabs ("we", "our", or "us") operates the website you are currently visiting (the "Site"). Boltlabs is a
          Social Media Marketing and Web Development agency headquartered in Delhi, India. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you visit our Site, interact with our
          advertisements, or contact us for our services.
        </p>
        <p>
          By using this Site, you consent to the practices described in this Privacy Policy. If you do not agree with
          the terms of this policy, please do not access the Site.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-white">Information you provide directly:</span> When you fill out our contact form,
            we collect your name, email address, and any project details or messages you submit.
          </li>
          <li>
            <span className="text-white">Automatically collected information:</span> When you visit the Site, we may
            automatically collect certain information about your device, including your IP address, browser type,
            operating system, referring URLs, pages viewed, and the dates/times of your visits.
          </li>
          <li>
            <span className="text-white">Cookies and tracking technologies:</span> We and our advertising partners use
            cookies, pixels, and similar technologies to analyse traffic and measure the effectiveness of our
            marketing campaigns.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your enquiries and provide our services.</li>
          <li>To send you information about your project or our offerings when you have requested it.</li>
          <li>To operate, maintain, and improve the Site and our marketing efforts.</li>
          <li>To measure and improve the performance of our advertising campaigns.</li>
          <li>To comply with legal obligations and protect our legal rights.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Advertising & Analytics (Meta and Google)">
        <p>
          We run advertising campaigns on platforms including Meta (Facebook and Instagram) and Google. These platforms
          may use cookies, pixels (such as the Meta Pixel), and similar technologies to collect information about your
          interactions with our Site and advertisements. This data helps us deliver relevant ads, build custom
          audiences, and measure campaign performance.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You can learn how Google uses data at{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#B26CE8] hover:underline">
              policies.google.com/technologies/partner-sites
            </a>.
          </li>
          <li>
            You can manage Meta ad preferences at{" "}
            <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-[#B26CE8] hover:underline">
              facebook.com/adpreferences
            </a>.
          </li>
          <li>
            You can opt out of personalised Google ads at{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#B26CE8] hover:underline">
              adssettings.google.com
            </a>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Cookies">
        <p>
          Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to
          indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our Site or our
          ad measurement may not function optimally.
        </p>
      </LegalSection>

      <LegalSection heading="6. Sharing of Information">
        <p>We do not sell your personal information. We may share information with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service providers who help us operate the Site (e.g., hosting, email delivery, analytics).</li>
          <li>Advertising platforms (Meta, Google) as described in Section 4.</li>
          <li>Authorities when required by law or to protect our rights.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="7. Data Retention & Security">
        <p>
          We retain contact form submissions for as long as necessary to respond to your enquiry and maintain our
          business records. We implement reasonable technical and organisational measures to protect your information;
          however, no method of transmission over the internet is 100% secure.
        </p>
      </LegalSection>

      <LegalSection heading="8. Your Rights">
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, or delete your personal
          information, or to object to or restrict certain processing. To exercise any of these rights, contact us at{" "}
          <a href="mailto:boltlabs1@gmail.com" className="text-[#B26CE8] hover:underline">boltlabs1@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection heading="9. Children's Privacy">
        <p>
          Our Site and services are not directed at children under the age of 13, and we do not knowingly collect
          personal information from children.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last
          updated" date at the top of this page. Continued use of the Site after changes constitutes acceptance of the
          revised policy.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact Us">
        <p>If you have questions about this Privacy Policy, contact us:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Email: <a href="mailto:boltlabs1@gmail.com" className="text-[#B26CE8] hover:underline">boltlabs1@gmail.com</a></li>
          <li>Phone: <a href="tel:+919971210492" className="text-[#B26CE8] hover:underline">+91 9971210492</a></li>
          <li>Boltlabs Agency, Delhi, India</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
