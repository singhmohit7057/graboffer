import LegalPageLayout from '../../components/LegalPageLayout';
import SEO from '../../components/SEO';

const privacySections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
    <div className="space-y-4">
      <p>
        GrabOn ("we," "our," or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website www.grabon.in or use our services.
      </p>

      <p>
        By accessing or using our services, you agree to the terms of this Privacy
        Policy. If you do not agree with the terms, please do not access our website
        or use our services.
      </p>
    </div>
  ),
},
  {
    id: 'information-collect',
    title: 'Information We Collect',
    content: (
  <div className="space-y-4">
    <p>We collect several types of information from and about users of our services:</p>

    <h4 className="font-semibold text-gray-900">Personal Information</h4>
    <ul className="list-disc pl-5 space-y-1">
      <li>Name, email address, phone number</li>
      <li>Demographic information</li>
      <li>Account credentials</li>
      <li>Payment information</li>
    </ul>

    <h4 className="font-semibold text-gray-900">Non-Personal Information</h4>
    <ul className="list-disc pl-5 space-y-1">
      <li>Browser type and version</li>
      <li>Operating system</li>
      <li>IP address</li>
      <li>Device information</li>
      <li>Usage patterns and browsing history on our site</li>
    </ul>

    <h4 className="font-semibold text-gray-900">
      Cookies and Tracking Technologies
    </h4>
    <p>
      We use cookies, web beacons, and similar technologies to track activity on our
      services and hold certain information to enhance your experience.
    </p>
  </div>
  ),
  },
{
  id: 'information-use',
  title: 'How We Use Your Information',
  content: (
    <div className="space-y-4">
      <p>We use the information we collect for various purposes:</p>

      <h4 className="font-semibold text-gray-900">
        To Provide and Maintain Our Services:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Process your transactions</li>
        <li>Send you coupons and deal alerts</li>
        <li>Respond to your inquiries and support requests</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        To Improve Our Services:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Analyze usage patterns to enhance user experience</li>
        <li>Develop new features and functionality</li>
        <li>Conduct research and analytics</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        To Communicate With You:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Send promotional emails and newsletters (with opt-out options)</li>
        <li>Notify you about changes to our services</li>
        <li>Provide customer support</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        For Marketing and Advertising:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Deliver targeted advertisements</li>
        <li>Measure the effectiveness of our campaigns</li>
        <li>Personalize content and recommendations</li>
      </ul>
    </div>
  ),
},

  {
  id: 'information-sharing',
  title: 'Information Sharing and Disclosure',
  content: (
    <div className="space-y-4">
      <p>We may share your information in the following circumstances:</p>

      <h4 className="font-semibold text-gray-900">
        With Service Providers:
      </h4>
      <p>
        We engage third-party companies to facilitate our services, such as hosting
        providers, analytics services, and email delivery services. These providers
        have access to your information only to perform specific tasks on our behalf.
      </p>

      <h4 className="font-semibold text-gray-900">
        With Business Partners:
      </h4>
      <p>
        We may share information with our partner brands and merchants to provide you
        with relevant offers and coupons.
      </p>

      <h4 className="font-semibold text-gray-900">
        For Legal Reasons:
      </h4>
      <p>
        We may disclose your information if required by law, court order, or
        governmental regulation, or if we believe disclosure is necessary to protect
        our rights, property, or safety.
      </p>

      <h4 className="font-semibold text-gray-900">
        Business Transfers:
      </h4>
      <p>
        In the event of a merger, acquisition, or sale of assets, your information may
        be transferred to the acquiring entity.
      </p>
    </div>
  ),
},

  {
  id: 'data-security',
  title: 'Data Security',
  content: (
    <div className="space-y-4">
      <p>
        We implement appropriate technical and organizational measures to protect
        your personal information:
      </p>

      <h4 className="font-semibold text-gray-900">
        Security Measures:
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Encryption of sensitive data in transit and at rest</li>
        <li>Regular security assessments and audits</li>
        <li>Access controls and authentication mechanisms</li>
        <li>Secure data storage practices</li>
      </ul>

      <h4 className="font-semibold text-gray-900">
        Data Retention:
      </h4>
      <p>
        We retain your personal information only for as long as necessary to fulfill
        the purposes outlined in this Privacy Policy, unless a longer retention period
        is required by law.
      </p>

      <p className="font-semibold text-gray-900">
        Despite our efforts, no method of transmission over the internet or electronic
        storage is 100% secure. We cannot guarantee absolute security of your
        information.
      </p>
    </div>
  ),
},

  {
  id: 'cookies',
  title: 'Cookies Policy',
  content: (
    <div className="space-y-4">
      <p>
        Cookies are small text files stored on your device when you visit our website.
      </p>

      <h4 className="font-semibold text-gray-900">
        Types of Cookies We Use:
      </h4>

      <p>
        <strong>Essential Cookies:</strong> Required for the website to function
        properly. These cannot be disabled.
      </p>

      <p>
        <strong>Analytics Cookies:</strong> Help us understand how visitors interact
        with our website by collecting anonymous information.
      </p>

      <p>
        <strong>Marketing Cookies:</strong> Used to track visitors across websites to
        display relevant advertisements.
      </p>

      <p>
        <strong>Preference Cookies:</strong> Enable the website to remember your
        preferences and settings.
      </p>

      <h4 className="font-semibold text-gray-900">
        Managing Cookies:
      </h4>
      <p>
        You can control cookies through your browser settings. Most browsers allow you
        to refuse cookies or alert you when cookies are being sent. However, disabling
        cookies may affect the functionality of our website.
      </p>
    </div>
  ),
},

  {
  id: 'your-rights',
  title: 'Your Privacy Rights',
  content: (
    <div className="space-y-4">
      <p>
        Depending on your location, you may have certain rights regarding your
        personal information:
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Right to Access:</strong> Request a copy of the personal information
          we hold about you.
        </li>
        <li>
          <strong>Right to Rectification:</strong> Request correction of inaccurate or
          incomplete information.
        </li>
        <li>
          <strong>Right to Erasure:</strong> Request deletion of your personal
          information in certain circumstances.
        </li>
        <li>
          <strong>Right to Restrict Processing:</strong> Request limitation on how we
          use your information.
        </li>
        <li>
          <strong>Right to Data Portability:</strong> Request transfer of your
          information to another service provider.
        </li>
        <li>
          <strong>Right to Object:</strong> Object to the processing of your
          information for marketing purposes.
        </li>
      </ul>

      <p className="font-semibold text-gray-900">
        To exercise these rights, please contact us at privacy@grabon.in.
      </p>
    </div>
  ),
},

  {
  id: 'children',
  title: "Children's Privacy",
  content: (
    <div className="space-y-4">
      <p>
        Our services are not intended for children under the age of 13. We do not
        knowingly collect personal information from children under 13.
      </p>

      <p>
        If we become aware that we have collected personal information from a
        child under 13, we will take steps to delete that information promptly.
      </p>

      <p className="font-medium text-gray-900">
        If you are a parent or guardian and believe your child has provided us
        with personal information, please contact us immediately.
      </p>
    </div>
  ),
},

  {
  id: 'changes',
  title: 'Changes to This Policy',
  content: (
    <div className="space-y-4">
      <p>
        We may update this Privacy Policy from time to time to reflect changes in
        our practices or for other operational, legal, or regulatory reasons.
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Posting the updated policy on this page</li>
        <li>Sending an email notification</li>
        <li>Displaying a prominent notice on our website</li>
      </ul>

      <p className="text-sm text-gray-600">
        The <strong>Last Updated</strong> date at the top of this policy indicates
        when it was last revised. We encourage you to review this policy
        periodically.
      </p>
    </div>
  ),
},

  {
  id: 'contact',
  title: 'Contact Us',
  content: (
    <div className="space-y-4">
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our data practices, please contact us:
      </p>

      <div className="bg-gray-50 rounded-xl p-5 space-y-2">
        <p className="font-semibold text-gray-900">
          GrabOn - Inspirelabs Solutions Ltd
        </p>

        <p className="text-gray-700">
          <strong>Address:</strong><br />
          OneWest Building, Gachibowli,<br />
          Hyderabad, Telangana 500032, India
        </p>

        <p className="text-gray-700">
          <strong>Email:</strong> privacy@grabon.in
        </p>

        <p className="text-gray-700">
          <strong>Phone:</strong> +91-7997443334
        </p>
      </div>

      <p className="text-sm text-gray-600">
        We will respond to your inquiry within 30 days of receipt.
      </p>
    </div>
  ),
},

];

export default function PrivacyPolicy() {
  return (
    <>
    <SEO
      title="Privacy Policy – GrabOffer"
      noIndex
    />

    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
      icon="privacy"
      lastUpdated="January 29, 2026"
      sections={privacySections}
    />
    </>
  );
}
