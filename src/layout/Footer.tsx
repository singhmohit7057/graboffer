import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Partner With Us', href: '/partner-with-us' },
    { name: 'Careers', href: '/careers' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Feedback', href: '/feedback' },
    { name: 'Contact Us', href: '/contact-us' }, 
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms-conditions' },
    { name: 'Cookies Policy', href: '/cookies-policy' },
  ],
  business: [
    { name: 'Popular Offers', href: '/offers' },
    { name: 'Popular Categories', href: '/categories' },
    { name: 'Submit Coupon', href: '/coming-soon' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#facebook', color: '#1877f2' },
  { name: 'Twitter', icon: Twitter, href: '#twitter', color: '#1da1f2' },
  { name: 'Instagram', icon: Instagram, href: '#instagram', color: '#e4405f' },
  { name: 'LinkedIn', icon: Linkedin, href: '#linkedin', color: '#0077b5' },
  { name: 'YouTube', icon: Youtube, href: '#youtube', color: '#ff0000' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Mission Statement */}
      <div className="border-b border-gray-800">
        <div className="section-padding py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lg text-gray-300 text-center md:text-left">
              Striving towards making the world a{' '}
              <span className="text-[#f57c00] font-semibold">
                better place to shop
              </span>{' '}
              with great savings! ;)
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-[#d32f2f]" />
              <span>Made with love in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0064c9] to-[#42a5f5] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                GrabOn
              </span>
            </Link>

            <p className="text-gray-400 mb-6 max-w-sm">
              We help you save on everything. Find the best coupons, deals, and
              offers from your favorite brands and stores.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contact@grabon.in"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[#0064c9]" />
                contact@grabon.in
              </a>
              <a
                href="tel:+917997443334"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-[#0064c9]" />
                +91-7997443334
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#0064c9] flex-shrink-0 mt-0.5" />
                <span>
                  Inspirelabs Solutions Ltd,
                  <br />
                  OneWest Building, Gachibowli,
                  <br />
                  Hyderabad, TG, 500032
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1f2937';
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Business Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Business</h3>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © Copyright {new Date().getFullYear()}. GrabOn is Registered Trademark of
              Inspirelabs Solutions Ltd. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500">
              Proudly Designed By{' '}
              <span className="text-[#f57c00]">GrabOn Design Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
