import LegalPageLayout from '../../components/LegalPageLayout';
import SEO from '../../components/SEO';

const termsSections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: (
    <div className="space-y-4">
      <p>
        Welcome to GrabOn. By accessing or using our website (www.grabon.in) and
        services, you agree to be bound by these Terms and Conditions ("Terms").
        If you do not agree to these Terms, please do not use our services.
      </p>

      <p>
        These Terms constitute a legally binding agreement between you and
        Inspirelabs Solutions Ltd ("GrabOn," "we," "us," or "our"). By using our
        services, you represent that you are at least 13 years old and have the
        legal capacity to enter into this agreement.
      </p>

      <p>
        We reserve the right to modify these Terms at any time. Changes will be
        effective immediately upon posting on this page. Your continued use of
        our services after any changes indicates your acceptance of the modified
        Terms.
      </p>
    </div>
  ),
},
  {
    id: 'services',
    title: 'Description of Services',
    content: (
    <div className="space-y-4">
      <p>
        GrabOn operates as a coupons and deals aggregator platform that connects
        users with promotional offers, discounts, and coupons from various
        brands and merchants ("Partner Merchants").
      </p>

      <h4 className="font-semibold text-gray-900">
        Our services include:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Curating and displaying coupons, deals, and promotional offers</li>
        <li>Providing a platform for users to discover savings opportunities</li>
        <li>Sending newsletters and deal alerts to subscribed users</li>
        <li>Offering tools to compare deals across different merchants</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Important Disclaimers:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          We are not responsible for the actual products or services offered by
          Partner Merchants
        </li>
        <li>
          All transactions occur directly between you and the Partner Merchant
        </li>
        <li>
          Coupon availability and validity are subject to change without notice
        </li>
        <li>
          We do not guarantee that all coupons will work as advertised
        </li>
      </ul>
    </div>
  ),
},
  {
    id: 'user-accounts',
    title: 'User Accounts and Registration',
    content: (
    <div className="space-y-4">
      <p>
        Certain features of our services may require you to create an account.
      </p>

      <h4 className="font-semibold text-gray-900">
        Account Creation:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>You must provide accurate, current, and complete information during registration</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials</li>
        <li>You agree to notify us immediately of any unauthorized use of your account</li>
        <li>You are solely responsible for all activities that occur under your account</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Account Termination:
      </h4>
      <p>
        We reserve the right to suspend or terminate your account at our sole
        discretion, without prior notice, for any reason, including but not
        limited to:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Violation of these Terms</li>
        <li>Fraudulent or illegal activity</li>
        <li>Misuse of coupons or promotional offers</li>
        <li>Providing false information</li>
      </ul>
    </div>
  ),
},
  {
    id: 'coupon-usage',
    title: 'Coupon Usage Guidelines',
    content: (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900">
        General Rules:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Coupons displayed on our platform are subject to terms set by Partner Merchants</li>
        <li>Each coupon may have specific restrictions, expiration dates, and usage limits</li>
        <li>We strive to keep coupon information accurate but cannot guarantee availability</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Prohibited Activities:
      </h4>
      <p>You agree not to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use automated systems or software to extract coupons</li>
        <li>Sell, trade, or transfer coupons for commercial purposes</li>
        <li>Attempt to use expired or invalid coupons</li>
        <li>Engage in fraudulent activities to obtain discounts</li>
        <li>Circumvent any security measures or access controls</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Coupon Redemption:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>All coupon redemptions are subject to Partner Merchant policies</li>
        <li>We are not responsible if a Partner Merchant refuses to honor a coupon</li>
        <li>Additional terms and conditions may apply at the point of purchase</li>
      </ul>
    </div>
  ),
},
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Rights',
    content: (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900">
        Ownership:
      </h4>
      <p>
        All content, features, and functionality on our website, including but not
        limited to text, graphics, logos, icons, images, audio clips, digital
        downloads, data compilations, and software, are the exclusive property of
        GrabOn or our licensors and are protected by copyright, trademark, and
        other intellectual property laws.
      </p>

      <h4 className="font-semibold text-gray-900">
        Limited License:
      </h4>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable license
        to access and use our services for personal, non-commercial purposes.
      </p>

      <h4 className="font-semibold text-gray-900">
        Restrictions:
      </h4>
      <p>You may not:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Copy, modify, distribute, sell, or lease any part of our services</li>
        <li>Reverse engineer or attempt to extract the source code of our software</li>
        <li>Use our trademarks or logos without prior written consent</li>
        <li>Remove any copyright or proprietary notices from our content</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        User Content:
      </h4>
      <p>
        By submitting any content to our platform (reviews, comments, etc.), you
        grant us a perpetual, irrevocable, worldwide, royalty-free license to use,
        reproduce, modify, and distribute such content.
      </p>
    </div>
  ),
},
  {
    id: 'prohibited-conduct',
    title: 'Prohibited Conduct',
    content: (
    <div className="space-y-4">
      <p>You agree not to engage in any of the following activities:</p>

      <h4 className="font-semibold text-gray-900">
        Illegal Activities:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Using our services for any unlawful purpose</li>
        <li>Violating any applicable laws or regulations</li>
        <li>Infringing upon the rights of others</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Harmful Activities:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Uploading viruses, malware, or other malicious code</li>
        <li>Attempting to disrupt or interfere with our services</li>
        <li>Conducting denial-of-service attacks</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Abusive Behavior:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Harassing, threatening, or intimidating other users</li>
        <li>Posting defamatory, obscene, or offensive content</li>
        <li>Impersonating others or misrepresenting your affiliation</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Commercial Exploitation:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Using our services for unauthorized commercial purposes</li>
        <li>Scraping or data mining our content</li>
        <li>Creating competing services using our data</li>
      </ul>
    </div>
  ),
},
  {
    id: 'disclaimer',
    title: 'Disclaimer of Warranties',
    content: (
    <div className="space-y-4">
      <p className="font-semibold uppercase tracking-wide text-sm text-gray-900">
        OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY
        WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
      </p>

      <h4 className="font-semibold text-gray-900">
        We specifically disclaim:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Any warranty that our services will be uninterrupted, timely, secure, or error-free</li>
        <li>Any warranty as to the accuracy, reliability, or completeness of any information on our platform</li>
        <li>Any warranty that defects will be corrected</li>
        <li>Any warranty regarding the availability or validity of coupons</li>
        <li>Any warranty regarding the products or services of Partner Merchants</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        No Endorsement:
      </h4>
      <p>
        The display of any coupon, deal, or Partner Merchant on our platform does not
        constitute an endorsement, recommendation, or guarantee of quality.
      </p>

      <h4 className="font-semibold text-gray-900">
        Third-Party Links:
      </h4>
      <p>
        Our website may contain links to third-party websites. We are not responsible
        for the content, privacy practices, or availability of such sites.
      </p>
    </div>
  ),
},
  {
    id: 'limitation-liability',
    title: 'Limitation of Liability',
    content: (
    <div className="space-y-4">
      <p className="font-semibold uppercase tracking-wide text-sm text-gray-900">
        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, GRABON AND ITS AFFILIATES,
        OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
      </p>

      <h4 className="font-semibold text-gray-900">
        Direct Damages:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Any direct, indirect, incidental, special, consequential, or punitive damages</li>
        <li>Loss of profits, revenue, data, or business opportunities</li>
        <li>Personal injury or property damage</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Coupon-Related Issues:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Failure of a coupon to work as advertised</li>
        <li>Disputes between you and Partner Merchants</li>
        <li>Quality or fitness of products or services purchased using coupons</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Maximum Liability:
      </h4>
      <p>
        In no event shall our total liability to you exceed the amount you have paid
        us (if any) in the twelve (12) months preceding the claim, or INR 100,
        whichever is greater.
      </p>

      <h4 className="font-semibold text-gray-900">
        Jurisdictional Variations:
      </h4>
      <p>
        Some jurisdictions do not allow the exclusion or limitation of certain
        damages, so the above limitations may not apply to you.
      </p>
    </div>
  ),
},
  {
    id: 'indemnification',
    title: 'Indemnification',
    content: (
    <div className="space-y-4">
      <p>
        You agree to defend, indemnify, and hold harmless GrabOn and its affiliates,
        officers, directors, employees, and agents from and against any and all
        claims, damages, obligations, losses, liabilities, costs, or debt, and
        expenses (including but not limited to attorney&apos;s fees) arising from:
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Your use of and access to our services</li>
        <li>Your violation of any term of these Terms</li>
        <li>
          Your violation of any third-party right, including without limitation
          any copyright, property, or privacy right
        </li>
        <li>Any claim that your content caused damage to a third party</li>
        <li>Your conduct in connection with our services</li>
      </ul>

      <p className="font-medium text-gray-900">
        This indemnification obligation will survive the termination of these Terms
        and your use of our services.
      </p>
    </div>
  ),
},
  {
    id: 'termination',
    title: 'Termination',
    content: (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900">
        Termination by You:
      </h4>
      <p>
        You may terminate your account at any time by contacting us or using the
        account deletion feature (if available).
      </p>

      <h4 className="font-semibold text-gray-900">
        Termination by Us:
      </h4>
      <p>
        We may terminate or suspend your access to our services immediately,
        without prior notice or liability, for any reason, including but not
        limited to:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Breach of these Terms</li>
        <li>Conduct that we believe is harmful to other users or our business</li>
        <li>Extended periods of inactivity</li>
        <li>Legal or regulatory requirements</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Effect of Termination:
      </h4>
      <p>Upon termination:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Your right to use our services will immediately cease</li>
        <li>
          All provisions of these Terms which by their nature should survive
          termination shall survive
        </li>
        <li>
          We may delete your account data in accordance with our Privacy Policy
        </li>
        <li>Any outstanding obligations will remain in effect</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        No Refund:
      </h4>
      <p>
        We do not provide refunds for any reason upon termination.
      </p>
    </div>
  ),
},
  {
    id: 'governing-law',
    title: 'Governing Law and Dispute Resolution',
    content: (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900">
        Governing Law:
      </h4>
      <p>
        These Terms shall be governed by and construed in accordance with the laws
        of India, without regard to its conflict of law provisions.
      </p>

      <h4 className="font-semibold text-gray-900">
        Jurisdiction:
      </h4>
      <p>
        Any legal action or proceeding arising under these Terms will be brought
        exclusively in the courts located in Hyderabad, Telangana, India.
      </p>

      <h4 className="font-semibold text-gray-900">
        Dispute Resolution:
      </h4>
      <p>
        Before initiating any legal action, you agree to first contact us to attempt
        to resolve the dispute informally. If the dispute cannot be resolved within
        30 days, either party may pursue formal legal action.
      </p>

      <h4 className="font-semibold text-gray-900">
        Arbitration:
      </h4>
      <p>
        At our sole discretion, we may require you to submit any disputes arising
        from these Terms or use of our services to final and binding arbitration
        under the Arbitration and Conciliation Act, 1996.
      </p>

      <h4 className="font-semibold text-gray-900">
        Class Action Waiver:
      </h4>
      <p>
        You agree that any proceedings will be conducted only on an individual
        basis and not in a class, consolidated, or representative action.
      </p>
    </div>
  ),
},
  {
    id: 'contact',
    title: 'Contact Information',
    content: (
    <div className="space-y-4">
      <p>
        If you have any questions about these Terms, please contact us:
      </p>

      <div className="bg-gray-50 rounded-xl p-5 space-y-2">
        <p className="font-semibold text-gray-900">
          GrabOn – Inspirelabs Solutions Ltd
        </p>

        <p className="text-gray-700">
          <strong>Address:</strong><br />
          OneWest Building, Gachibowli,<br />
          Hyderabad, Telangana 500032, India
        </p>

        <p className="text-gray-700">
          <strong>Email:</strong> legal@grabon.in
        </p>

        <p className="text-gray-700">
          <strong>Phone:</strong> +91-7997443334
        </p>
      </div>

      <p className="text-sm text-gray-600">
        We will make every effort to respond to your inquiry within 5 business days.
      </p>
    </div>
  ),
},
];

export default function TermsConditions() {
  return (
    <>
    <SEO
      title="Terms and Conditions – GrabOffer"
      noIndex
    />

    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Legal agreement governing your use of GrabOn"
      icon="terms"
      lastUpdated="January 29, 2026"
      sections={termsSections}
    />
    </>
  );
}
