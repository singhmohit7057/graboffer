import LegalPageLayout from '../../components/LegalPageLayout';
import SEO from '../../components/SEO';
const cookieSections = [
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies?',
    content: (
      <div className="space-y-4">
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
        <p>
          Cookies help us recognize your device and remember your preferences, making your browsing experience 
          smoother and more personalized. They also help us understand how you interact with our website so we 
          can improve our services.
        </p>
      </div>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Cookies',
    content: (
      <div className="space-y-4">
        <p>GrabOn uses cookies for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.</li>
          <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
          <li><strong>Preference Cookies:</strong> These remember your settings and preferences to provide a more personalized experience.</li>
          <li><strong>Marketing Cookies:</strong> These are used to track visitors across websites to display relevant advertisements.</li>
          <li><strong>Affiliate Tracking:</strong> These help us track referrals from our partner websites.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'types-of-cookies',
    title: 'Types of Cookies We Use',
    content: (
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Session Cookies</h4>
          <p className="text-sm">These temporary cookies expire when you close your browser. They help us track your activity during a single browsing session.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Persistent Cookies</h4>
          <p className="text-sm">These remain on your device for a set period or until you delete them. They help us remember your preferences for future visits.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-2">First-Party Cookies</h4>
          <p className="text-sm">These are set by GrabOn directly when you visit our website.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Third-Party Cookies</h4>
          <p className="text-sm">These are set by our partners and service providers, such as analytics tools and advertising networks.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'third-party-cookies',
    title: 'Third-Party Cookies',
    content: (
      <div className="space-y-4">
        <p>We work with various third-party service providers who may also set cookies on your device:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Google Analytics:</strong> Helps us analyze website traffic and user behavior.</li>
          <li><strong>Google Ads:</strong> Used for advertising and remarketing purposes.</li>
          <li><strong>Facebook Pixel:</strong> Enables us to measure ad effectiveness and build audiences.</li>
          <li><strong>Affiliate Networks:</strong> Track referrals and commissions from partner websites.</li>
        </ul>
        <p className="mt-4">
          These third parties have their own privacy policies and cookie practices. We encourage you to review 
          their policies for more information.
        </p>
      </div>
    ),
  },
  {
    id: 'managing-cookies',
    title: 'Managing Your Cookie Preferences',
    content: (
      <div className="space-y-4">
        <p>You have several options for managing cookies:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-[#0064c9] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
            <div>
              <strong className="text-gray-900">Browser Settings:</strong>
              <p className="text-sm">Most web browsers allow you to control cookies through their settings. You can usually find these in the &quot;Options&quot; or &quot;Preferences&quot; menu.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-[#0064c9] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
            <div>
              <strong className="text-gray-900">Cookie Consent Banner:</strong>
              <p className="text-sm">When you first visit our site, you can choose which types of cookies to accept or reject.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-[#0064c9] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
            <div>
              <strong className="text-gray-900">Third-Party Tools:</strong>
              <p className="text-sm">You can use tools like Your Online Choices or Network Advertising Initiative to opt out of targeted advertising.</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'cookie-list',
    title: 'List of Cookies We Use',
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 rounded-tl-lg">Cookie Name</th>
                <th className="text-left p-3">Type</th>
                <th className="text-left p-3">Purpose</th>
                <th className="text-left p-3 rounded-tr-lg">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-mono text-xs">_session</td>
                <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Essential</span></td>
                <td className="p-3">Maintains user session</td>
                <td className="p-3">Session</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-mono text-xs">_ga</td>
                <td className="p-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Analytics</span></td>
                <td className="p-3">Google Analytics tracking</td>
                <td className="p-3">2 years</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-mono text-xs">_gid</td>
                <td className="p-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Analytics</span></td>
                <td className="p-3">Google Analytics user ID</td>
                <td className="p-3">24 hours</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-mono text-xs">_prefs</td>
                <td className="p-3"><span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Preference</span></td>
                <td className="p-3">Stores user preferences</td>
                <td className="p-3">1 year</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">_affiliate</td>
                <td className="p-3"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Marketing</span></td>
                <td className="p-3">Tracks affiliate referrals</td>
                <td className="p-3">30 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: (
      <div className="space-y-4">
        <p>
          We may update this Cookies Policy from time to time to reflect changes in technology, legislation, 
          or our data practices.
        </p>
        <p>
          When we make significant changes, we will notify you through a prominent notice on our website 
          or by email if you have subscribed to our communications.
        </p>
        <p>
          The &quot;Last Updated&quot; date at the top of this policy indicates when it was last revised. 
          We encourage you to review this policy periodically.
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
          If you have any questions about our use of cookies or this Cookies Policy, please contact us:
        </p>
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="font-semibold text-gray-900">GrabOn - Inspirelabs Solutions Ltd</p>
          <p className="text-gray-600 mt-2">Email: privacy@grabon.in</p>
          <p className="text-gray-600">Phone: +91-7997443334</p>
          <p className="text-gray-600 mt-2">
            OneWest Building, Gachibowli,<br />
            Hyderabad, Telangana 500032, India
          </p>
        </div>
      </div>
    ),
  },
];

export default function CookiesPolicy() {
  return (
    <>
        <SEO
          title="Cookies Policy – GrabOffer"
          noIndex
        />
    <LegalPageLayout
      title="Cookies Policy"
      subtitle="Understanding how and why we use cookies on our website"
      icon="cookies"
      lastUpdated="January 29, 2026"
      sections={cookieSections}
    />
    </>
  );
}
