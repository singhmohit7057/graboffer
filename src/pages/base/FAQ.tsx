import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { HelpCircle, Search, ChevronDown, MessageCircle, Mail, ArrowLeft } from 'lucide-react';

const faqCategories = [
  {
    id: 'General',
    name: 'General',
    faqs: [
      {
        question: 'What is GrabOn?',
        answer: 'GrabOn is India\'s leading coupons and deals marketplace. We help millions of users save money by providing verified coupons, exclusive deals, and cashback offers from over 500+ partner brands across various categories like fashion, electronics, travel, food, and more.',
      },
      {
        question: 'Is GrabOn free to use?',
        answer: 'Yes, GrabOn is completely free for users. You can browse, search, and use all coupons without any charges. We earn a commission from our partner merchants when you make a purchase using our coupons.',
      },
      {
        question: 'How do I find coupons on GrabOn?',
        answer: 'You can find coupons by searching for your favorite brand in the search bar, browsing through categories, or checking our popular offers section. You can also subscribe to our newsletter to get the latest deals delivered to your inbox.',
      },
      {
        question: 'Do I need to create an account to use coupons?',
        answer: 'No, you don\'t need an account to browse and use most coupons. However, creating an account allows you to save your favorite stores, get personalized recommendations, and receive exclusive member-only deals.',
      },
    ],
  },
  {
    id: 'Using Coupons',
    name: 'Using Coupons',
    faqs: [
      {
        question: 'How do I use a coupon code?',
        answer: 'Simply click on the "Copy Code" button next to the coupon you want to use. The code will be copied to your clipboard. Then, click on "Go to Store" to visit the merchant website, add items to your cart, and paste the code at checkout in the promo/coupon code field.',
      },
      {
        question: 'Why is my coupon code not working?',
        answer: 'Coupon codes may not work for several reasons: the code may have expired, it may not be applicable to the items in your cart, you may not have met the minimum purchase requirement, or the code may be for new users only. Always check the terms and conditions of the coupon before using it.',
      },
      {
        question: 'Can I use multiple coupons on one order?',
        answer: 'This depends on the merchant\'s policy. Most stores allow only one coupon code per order. However, some merchants may allow stacking coupons with other offers like free shipping or site-wide discounts. Check the merchant\'s terms for details.',
      },
      {
        question: 'How often are coupons updated?',
        answer: 'Our team updates coupons daily to ensure you have access to the latest and most valid offers. We also remove expired coupons regularly to provide you with a seamless experience.',
      },
    ],
  },
  {
    id: 'Deals & Offers',
    name: 'Deals & Offers',
    faqs: [
      {
        question: 'What is the difference between a coupon and a deal?',
        answer: 'A coupon requires you to enter a code at checkout to get the discount. A deal is an automatic discount or offer that applies without needing a code - you simply click through to the store and the discount is applied automatically.',
      },
      {
        question: 'How do I know if a deal is still valid?',
        answer: 'Each deal on GrabOn shows its expiration date. We regularly verify and update our deals to ensure they are active. If a deal has expired, it will be marked accordingly or removed from the platform.',
      },
      {
        question: 'What are "GrabOn Exclusive" deals?',
        answer: 'GrabOn Exclusive deals are special offers that we have negotiated directly with our partner merchants. These deals are only available through GrabOn and often provide higher discounts than standard offers.',
      },
    ],
  },
  {
    id: 'Account & Privacy',
    name: 'Account & Privacy',
    faqs: [
      {
        question: 'How do I create an account?',
        answer: 'Click on the "Log In / Sign Up" button in the top right corner of the page. You can sign up using your email address or through social login options like Google or Facebook. The process takes less than a minute.',
      },
      {
        question: 'How do I unsubscribe from emails?',
        answer: 'You can unsubscribe from our emails by clicking the "Unsubscribe" link at the bottom of any email we send you. Alternatively, you can manage your email preferences in your account settings.',
      },
      {
        question: 'Is my personal information safe with GrabOn?',
        answer: 'Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your personal information. We never sell your data to third parties. You can read more in our Privacy Policy.',
      },
    ],
  },
  {
    id: 'For Partners',
    name: 'For Partners',
    faqs: [
      {
        question: 'How can my business partner with GrabOn?',
        answer: 'We welcome partnerships with brands and merchants. Visit our Partner With Us page to learn more about partnership opportunities and submit your application. Our team will review and get back to you within 48 hours.',
      },
      {
        question: 'What are the benefits of partnering with GrabOn?',
        answer: 'Partnering with GrabOn gives you access to over 35 lakh active users, increased brand visibility, targeted marketing opportunities, and detailed analytics to track your campaign performance.',
      },
      {
        question: 'How much does it cost to list coupons on GrabOn?',
        answer: 'We offer flexible partnership models including pay-per-performance and flat fee options. Contact our partnerships team for detailed pricing information tailored to your business needs.',
      },
    ],
  },
];

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (faqId: string) => {
    setOpenFaqs(prev => 
      prev.includes(faqId) 
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const filteredFaqs = faqCategories.flatMap(cat => 
    cat.faqs.map((faq, idx) => ({ ...faq, category: cat.name, id: `${cat.id}-${idx}` }))
  ).filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <SEO
      title="Frequently Asked Questions – GrabOffer"
      description="Find answers to common questions about GrabOffer, coupons, and deals."
    />

    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#9c27b0] to-[#7b1fa2] py-16">
        <div className="section-padding">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Find answers to common questions about GrabOn and how to save money with our coupons.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="section-padding -mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-xl shadow-lg border-0 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="section-padding py-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-[#9c27b0] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Questions
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#9c27b0] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="section-padding pb-16">
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="text-xs text-purple-600 font-medium uppercase tracking-wide">{faq.category}</span>
                    <h3 className="font-semibold text-gray-900 mt-1">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaqs.includes(faq.id) ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaqs.includes(faq.id) && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="section-padding pb-16">
        <div className="bg-gradient-to-r from-[#0064c9] to-[#1976d2] rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Still have questions?</h2>
          <p className="text-white/80 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <Link 
            to="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0064c9] rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
