import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CreditCard, Wallet, ShieldCheck, Server } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Amex',
    descriptionLine1: 'Get 4000 Membership Reward Point.*',
    descriptionLine2: 'Welcome Gift of 11,000 Bonus points.*',
    descriptionLine3: 'Complimentary access to international and domestic airport lounges across India.',
    
    ctaText: 'Apply Now',
    link: 'https://americanexpress.com/en-in/referral/platinum-reserve?ref=mOHITS5yix&XL=MNANS',
    icon: CreditCard,
    gradient: 'from-blue-500 to-blue-700',
    bgColor: 'bg-red-50',
  },
  {
    id: 2,
    name: 'Cred',
    descriptionLine1: 'Pay Credit Card Bills Seamlessly',
    descriptionLine2: 'Earn up to ₹250 in assured cashback.',
    descriptionLine3: 'Rewards on Every Payment',
    ctaText: 'Join Now',
    link:'https://app.cred.club/spQx/rjc3sxet',
    icon: Wallet,
    gradient: 'from-red-500 to-red-700',
    bgColor: 'bg-blue-50',
  },
  {
    id: 3,
    name: 'Hosting',
    descriptionLine1: 'Big Discounts on Domain & Hosting',
    descriptionLine2: 'Free Domain + Free SSL on Annual Plans.',
    descriptionLine3: 'Get an extra 20% discount.',
    ctaText: 'Claim Deal',
    link:'https://hostinger.in?REFERRALCODE=GKWTHEMADRUD',
    icon: Server,
    gradient: 'from-purple-500 to-purple-700',
    bgColor: 'bg-purple-50',
  },
  {
    id: 4,
    name: 'Vpn',
    descriptionLine1: 'Browse securely & privately',
    descriptionLine2: 'Unlock geo-restricted content',
    ctaText: 'Get VPN',
    link:'https://nordvpn.com',
    icon: ShieldCheck,
    gradient: 'from-green-500 to-green-700',
    bgColor: 'bg-green-50',
  },
];

export default function Collections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="section-padding">
        {/* Section Header */}
        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-900 mb-8 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
        >
          GrabOn Exclusive
        </h2>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((collection, index) => {
            const Icon = collection.icon;
            return (
              <div
                key={collection.id}
                className={`group relative overflow-hidden rounded-xl p-6 flex flex-col min-h-[300px] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${collection.bgColor} ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${collection.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0064c9] transition-colors">
                  {collection.name}
                </h3>
                <p className="text-sm text-gray-600 leading-snug">
                  {collection.descriptionLine1}
                </p>
                <div className="text-sm text-gray-500 mt-1">
                  <p>{collection.descriptionLine2}</p>
                  <p>{collection.descriptionLine3}</p>
                </div>
              </div>

                {/* CTA */}
                {collection.link && (
                  <a
                    href={collection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#0064c9] rounded-lg hover:bg-[#0052a3] transition-all duration-300"
                  >
                    {collection.ctaText}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                )}


                {/* Decorative Gradient */}
                <div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${collection.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
