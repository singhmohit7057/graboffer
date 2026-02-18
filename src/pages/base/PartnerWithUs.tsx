import { useEffect, useState } from 'react';
import SEO from '../../components/SEO';
import { Handshake, TrendingUp, Users, Target, CheckCircle, ArrowRight, Mail, Phone, Globe, } from 'lucide-react';
import PartnerForm from '@/components/forms/PartnerForm';

const benefits = [
  {
    icon: Users,
    title: 'Reach 5+ Lakh Users',
    description: 'Connect with a massive audience of deal-seeking shoppers across India.',
    color: '#0064c9',
  },
  {
    icon: TrendingUp,
    title: 'Boost Sales',
    description: 'Drive more traffic and increase conversions with targeted coupon campaigns.',
    color: '#4caf50',
  },
  {
    icon: Target,
    title: 'Targeted Marketing',
    description: 'Reach the right customers with our advanced segmentation and analytics.',
    color: '#f57c00',
  },
  {
    icon: Globe,
    title: 'Brand Visibility',
    description: 'Increase brand awareness through featured placements and promotions.',
    color: '#9c27b0',
  },
];

const features = [
  'Dedicated account manager',
  'Real-time campaign analytics',
  'Custom coupon creation',
  'Fraud protection',
  'Multi-channel promotion',
  'Performance reports',
  'API integration support',
  '24/7 technical support',
];

const partnershipTypes = [
  {
    title: 'Coupon Partnership',
    description: 'List your coupons and deals on our platform to drive traffic and sales.',
    icon: CheckCircle,
  },
  {
    title: 'Affiliate Program',
    description: 'Earn commissions by promoting GrabOn coupons on your platform.',
    icon: TrendingUp,
  },
  {
    title: 'API Integration',
    description: 'Integrate our coupon API directly into your website or app.',
    icon: Globe,
  },
  {
    title: 'Sponsored Placements',
    description: 'Get featured placements for maximum visibility and reach.',
    icon: Target,
  },
];

const steps = [
  {
    step: '01',
    title: 'Apply',
    description: 'Fill out the partnership application form with your business details.',
  },
  {
    step: '02',
    title: 'Review',
    description: 'Our team will review your application and get in touch within 48 hours.',
  },
  {
    step: '03',
    title: 'Onboard',
    description: 'Complete the onboarding process and set up your campaigns.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Go live and start reaching millions of potential customers.',
  },
];

export default function PartnerWithUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <SEO
      title="Partner With GrabOffer"
      description="Partner with GrabOffer to promote your brand and reach millions of deal seekers."
    />

    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0064c9] via-[#1976d2] to-[#42a5f5] py-20">
        <div className="section-padding">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Handshake className="w-4 h-4" />
              Partnership Opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Partner With GrabOn
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join India&apos;s leading coupons marketplace and reach millions of deal-seeking customers. Let&apos;s grow together!
            </p>
            <a 
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0064c9] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="section-padding py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Why Partner With Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of joining our partner network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Partnership Types */}
      <div className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Partnership Types
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the partnership model that works best for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#0064c9]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{type.title}</h3>
                      <p className="text-sm text-gray-500">{type.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Everything You Need to Succeed
            </h2>
            <p className="text-gray-600 mb-8">
              We provide all the tools and support you need to run successful coupon campaigns and maximize your ROI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4caf50] flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0064c9] to-[#42a5f5] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white/90 italic mb-3">
                  &quot;Partnering with GrabOn increased our sales by 40% in just three months. The platform is incredibly effective.&quot;
                </p>
                <p className="text-white/70 text-sm">— Marketing Director, Leading E-commerce Brand</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white/90 italic mb-3">
                  &quot;The analytics dashboard helps us track performance in real-time. Best partnership decision we made.&quot;
                </p>
                <p className="text-white/70 text-sm">— CEO, Travel Booking Platform</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white/90 italic mb-3">
                  &quot;Partnering with GrabOn increased our sales by 40% in just three months. The platform is incredibly effective.&quot;
                </p>
                <p className="text-white/70 text-sm">— Marketing Director, Leading E-commerce Brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started is easy. Follow these simple steps to become a partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="apply" className="section-padding py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Apply for Partnership
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will get in touch with you within 48 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <PartnerForm />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to our partnership team for more information.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:partnerships@grabon.in" className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Mail className="w-5 h-5 text-[#0064c9]" />
                <span className="text-gray-700">partnerships@grabon.in</span>
              </a>
              <a href="tel:+917997443334" className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Phone className="w-5 h-5 text-[#0064c9]" />
                <span className="text-gray-700">+91-7997443334</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
