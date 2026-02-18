import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Search, Copy, ShoppingCart, Sparkles, ArrowRight, CheckCircle, Gift, TrendingUp, Shield, ArrowLeft } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Find Your Deal',
    description: 'Browse through thousands of coupons and deals across 30+ categories. Use our search bar to find offers from your favorite brands or explore trending deals.',
    color: '#0064c9',
  },
  {
    number: '02',
    icon: Copy,
    title: 'Copy the Code',
    description: 'Click the "Copy Code" button to copy the coupon code to your clipboard. For deal offers, simply click "Get Deal" to activate the discount automatically.',
    color: '#f57c00',
  },
  {
    number: '03',
    icon: ShoppingCart,
    title: 'Shop & Save',
    description: 'Visit the store, add items to your cart, and paste the coupon code at checkout. Watch your total drop as the discount is applied instantly!',
    color: '#4caf50',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Verified Coupons',
    description: 'All our coupons are tested and verified before being listed.',
  },
  {
    icon: TrendingUp,
    title: 'Best Deals',
    description: 'We negotiate exclusive deals you won\'t find anywhere else.',
  },
  {
    icon: Gift,
    title: 'Cashback Offers',
    description: 'Earn additional cashback on top of coupon discounts.',
  },
  {
    icon: Sparkles,
    title: 'Daily Updates',
    description: 'New deals added daily so you never miss a saving opportunity.',
  },
];

const tips = [
  {
    title: 'Stack Your Savings',
    description: 'Combine coupons with store sales and cashback offers for maximum savings.',
  },
  {
    title: 'Check Expiry Dates',
    description: 'Always verify the coupon validity before using it at checkout.',
  },
  {
    title: 'Read the Terms',
    description: 'Some coupons have minimum purchase requirements or category restrictions.',
  },
  {
    title: 'Subscribe for Alerts',
    description: 'Get notified about new deals from your favorite brands.',
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <SEO
      title="How GrabOffer Works"
      description="Understand how GrabOffer finds, verifies, and shares the best deals and coupons."
    />

    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#4caf50] to-[#388e3c] py-20">
        <div className="section-padding">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Simple & Easy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              How GrabOn Works
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Saving money has never been easier. Follow these simple steps and start saving today!
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="section-padding py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Save in 3 Easy Steps
            </h2>
            <p className="text-gray-600">
              From finding to applying coupons, it takes less than a minute
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-24 h-24 rounded-2xl flex items-center justify-center relative"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <span 
                        className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </span>
                      <Icon className="w-10 h-10" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -bottom-8 left-12 w-0.5 h-8 bg-gray-200">
                      <ArrowRight className="w-5 h-5 text-gray-300 absolute -bottom-2 -left-2 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Why Choose GrabOn?
            </h2>
            <p className="text-gray-600">
              We make saving money simple, reliable, and rewarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#4caf50]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video/Image Section */}
      <div className="section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0064c9] to-[#1976d2] rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Watch How It Works
            </h2>
            <p className="text-white/80 mb-8">
              See how easy it is to save money with GrabOn in this quick video
            </p>
            <div className="aspect-video bg-white/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white/70">Video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gray-50 py-20">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Pro Saving Tips
            </h2>
            <p className="text-gray-600">
              Maximize your savings with these expert tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 7) * 100}ms` }}
              >
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#f57c00]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{tip.title}</h4>
                  <p className="text-sm text-gray-500">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding pb-20">
        <div className="bg-gradient-to-r from-[#0064c9] to-[#1976d2] rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Ready to Start Saving?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join millions of smart shoppers who save money every day with GrabOn coupons and deals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/offers"
              className="px-8 py-4 bg-white text-[#0064c9] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Offers
            </Link>
            <Link 
              to="/faq"
              className="px-8 py-4 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-colors"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
