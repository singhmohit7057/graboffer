import { useEffect, useState } from 'react';
import SEO from '../../components/SEO';
import { Target, Heart, Users, Zap, Award, Globe, TrendingUp, Shield } from 'lucide-react';

const stats = [
  { value: '10K+', label: 'Active Users', icon: Users },
  { value: '500+', label: 'Partner Brands', icon: Globe },
  { value: '10K+', label: 'Coupons Listed', icon: Award },
  { value: '1+', label: 'Years of Trust', icon: Shield },
];

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We prioritize our users needs and work tirelessly to bring them the best savings opportunities.',
    color: '#e91e63',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Every coupon is verified and tested before being listed on our platform.',
    color: '#2196f3',
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'Our platform is designed to help you find and apply deals in seconds.',
    color: '#ff9800',
  },
  {
    icon: Target,
    title: 'Continuous Improvement',
    description: 'We constantly evolve our platform to provide better user experience.',
    color: '#4caf50',
  },
];

const milestones = [
  { year: '2025', event: 'GrabOn founded in Kolkata' },
  { year: '2025', event: 'Crossed 1k users' },
  { year: '2026', event: 'Launched website' },
  { year: '2026', event: 'Partnered with 500+ brands' },
  { year: '2026', event: '10K+ active users milestone' },
];

const team = [
  { name: 'Ashok Reddy', role: 'Founder & CEO', image: 'AR' },
  { name: 'Priya Sharma', role: 'Chief Operating Officer', image: 'PS' },
  { name: 'Rahul Verma', role: 'Head of Technology', image: 'RV' },
  { name: 'Neha Gupta', role: 'Marketing Director', image: 'NG' },
];

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <SEO
      title="About - GrabOffer"
      description="Learn about GrabOffer, our mission, and how we help users save money online."
    />

    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0064c9] via-[#1976d2] to-[#42a5f5] py-20">
        <div className="section-padding">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Know About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              About GrabOn
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              India&apos;s most trusted coupons and deals marketplace, helping millions save money on their everyday purchases since 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-padding -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-7 h-7 text-[#0064c9]" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0064c9] text-sm font-semibold rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Making Savings Accessible to Everyone
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At GrabOn, we believe that everyone deserves to save money on their purchases. Our mission is to bridge the gap between brands and consumers by providing a platform where the best deals and discounts are just a click away.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We partner with over 500 leading brands across various categories including fashion, electronics, travel, food, and more to bring you verified coupons and exclusive deals that help you save up to 90% on your purchases.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-purple-500'].map((color, i) => (
                  <div key={i} className={`w-10 h-10 ${color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">Trusted by 10K+  users</p>
            </div>
          </div>
          
          <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <TrendingUp className="w-8 h-8 text-[#4caf50] mb-3" />
                <p className="text-2xl font-bold text-gray-900">95%</p>
                <p className="text-sm text-gray-500">User Satisfaction</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Award className="w-8 h-8 text-[#f57c00] mb-3" />
                <p className="text-2xl font-bold text-gray-900">#1</p>
                <p className="text-sm text-gray-500">In India</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Globe className="w-8 h-8 text-[#0064c9] mb-3" />
                <p className="text-2xl font-bold text-gray-900">30+</p>
                <p className="text-sm text-gray-500">Categories</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Zap className="w-8 h-8 text-[#e91e63] mb-3" />
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-sm text-gray-500">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at GrabOn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="section-padding py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Our Journey
          </h2>
          <p className="text-gray-600">
            Milestones that mark our growth and success
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 inline-block">
                    <span className="text-[#0064c9] font-bold text-lg">{milestone.year}</span>
                    <p className="text-gray-600 mt-1">{milestone.event}</p>
                  </div>
                </div>
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#0064c9] rounded-full border-4 border-white shadow md:-translate-x-1/2" />
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Meet Our Leadership
            </h2>
            <p className="text-gray-600">
              The passionate team behind GrabOn&apos;s success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#0064c9] to-[#42a5f5] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {member.image}
                </div>
                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding py-16">
        <div className="bg-gradient-to-r from-[#0064c9] to-[#1976d2] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Join the GrabOn Family
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Start saving today! Browse our categories and discover amazing deals from your favorite brands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/popular-offers"
              className="px-8 py-3 bg-white text-[#0064c9] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Offers
            </a>
            <a 
              href="/partner-with-us"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
