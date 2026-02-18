import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import { stores } from "../../data/stores";
import { offers } from "../../data/offers";

import SEO from '../../components/SEO';
import { Map, Home, Tag, Grid, Info, Shield, Handshake, HelpCircle, Mail, Phone, ExternalLink } from 'lucide-react';

const sitemapData = [
  {
    title: 'Main Pages',
    icon: Home,
    color: '#0064c9',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Popular Offers', href: '/offers' },
      { name: 'Popular Categories', href: '/categories' },
      { name: 'Stores', href: '/store' },
       { name: 'Category', href: '/category' },
      { name: 'Submit a Coupon', href: '/coming-soon' },
    ],
  },
  {
    title: 'Company',
    icon: Info,
    color: '#4caf50',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Partner With Us', href: '/partner-with-us' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    icon: Shield,
    color: '#f57c00',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Cookie Policy', href: '/cookies-policy' },
    ],
  },
  {
    title: 'Support',
    icon: HelpCircle,
    color: '#9c27b0',
    links: [
      { name: 'FAQs', href: '/faqs' },
      { name: 'Feedback', href: '/feedback' },
      { name: 'Contact Us', href: '/contact-us' },
    ],
  },
];

export default function Sitemap() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

      // ✅ Live Categories
    const liveCategories = categories.filter(c => c.isLive);

    // ✅ Live Stores
    const liveStores = stores.filter(s => s.isLive);

    // ✅ Live Offers (only if store + category live)
    const liveOffers = offers.filter(offer => {
      const categoryLive = liveCategories.some(
        c => c.key.toLowerCase() === offer.categoryKey.toLowerCase()
      );

      const storeLive = liveStores.some(
        s => s.name.toLowerCase() === offer.store.toLowerCase()
      );

      return categoryLive && storeLive;
    });

  return (
    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0064c9] to-[#0052a3] py-16">
        <div className="section-padding">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Map className="w-4 h-4" />
              Navigation Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Sitemap
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Find your way around GrabOn. Explore all our pages, categories, and sections.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding py-12">
        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sitemapData.map((section, index) => {
            const Icon = section.icon;
            return (
              <>
              <SEO
                title="Sitemap – GrabOffer"
                noIndex
              />

              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="p-4 flex items-center gap-3"
                  style={{ backgroundColor: `${section.color}15` }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: section.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-gray-600 hover:text-[#0064c9] transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#0064c9] transition-colors" />
                          {link.name}
                          {link.href.startsWith('http') && (
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </>
            );
          })}
        </div>

        {/* Live Stores Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-[#0064c9]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">All Stores</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {liveStores.map((store) => (
                <Link
                  key={store.slug}
                  to={`/store/${store.slug}`}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-[#0064c9] transition-all"
                >
                  <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm font-bold text-gray-400">
                    {store.name.charAt(0)}
                  </span>
                  <span className="text-sm font-medium">{store.name}</span>
                </Link>
              ))}
            </div>
          </div>

        {/* Live Categories Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Grid className="w-5 h-5 text-[#f57c00]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">All Categories</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {liveCategories.map((category) => (
                <Link
                  key={category.key}
                  to={`/category/${category.key}`}
                  className="flex items-center justify-center px-4 py-3 bg-gray-50 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-[#f57c00] transition-all"
                >
                  <span className="text-sm font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>

        {/* Live Offers Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">All Offers</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {liveOffers.map((offer) => (
                <Link
                  key={offer.id}
                  to={`/offer/${offer.slug}`}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition"
                >
                  <p className="font-medium text-sm text-gray-800">
                    {offer.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {offer.store}
                  </p>
                </Link>
              ))}
            </div>
          </div>


        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#0064c9] to-[#1976d2] rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-white/80 mb-6">
                Our support team is here to help. Reach out to us and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:support@grabon.in"
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  support@grabon.in
                </a>
                <a 
                  href="tel:+917997443334"
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91-7997443334
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <Handshake className="w-24 h-24 text-white/30 mx-auto md:ml-auto" />
            </div>
          </div>
        </div>

        {/* SEO Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Last updated: January 29, 2026 | Total Pages: 50+ | Total Categories: 30+
          </p>
        </div>
      </div>
    </div>
  );
}
