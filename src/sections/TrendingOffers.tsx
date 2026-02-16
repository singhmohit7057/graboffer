import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Percent } from 'lucide-react';

const trendingOffers = [
  {
    id: 1,
    store: 'Adidas',
    title: 'End Of Season Sale',
    offer: 'Flat 40% OFF + Extra 15% OFF',
    description: 'On Your Collections',
    gradient: 'from-gray-900 to-gray-700',
    bgImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  },
  {
    id: 2,
    store: 'Cred',
    title: 'Pay Minimum Bill of ₹1000',
    offer: 'Get ₹250 Cashback',
    description: 'On Any Bill Payment',
    gradient: 'from-green-600 to-green-800',
    bgImage: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    id: 3,
    store: 'Air India Express',
    title: 'Flight Bookings Special',
    offer: 'Up To 20% OFF',
    description: 'Zero Convenience Fee',
    gradient: 'from-red-600 to-red-800',
    bgImage: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
  },
  {
    id: 4,
    store: 'Hostinger',
    title: 'Web Hosting Deal',
    offer: 'Up To 75% OFF + Extra 10%',
    description: '3 Months FREE Hosting',
    gradient: 'from-purple-600 to-purple-800',
    bgImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 5,
    store: 'Ultahost',
    title: 'Hosting Plans Sale',
    offer: 'Flat 40% OFF + Extra 10%',
    description: 'On All Hosting Plans',
    badge: 'GRABON EXCLUSIVE',
    gradient: 'from-blue-600 to-blue-800',
    bgImage: 'linear-gradient(135deg, #0061ff 0%, #60efff 100%)',
  },
  {
    id: 6,
    store: 'Kapiva',
    title: 'Health & Wellness',
    offer: 'Up To 50% OFF + Extra 20%',
    description: 'On Orders Above Rs 499',
    badge: 'GRABON EXCLUSIVE',
    gradient: 'from-orange-600 to-orange-800',
    bgImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
];

export default function TrendingOffers() {
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
      { threshold: 0.1 }
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
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-[#f57c00] to-[#e65100] rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2
            className={`text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Trending Offers
          </h2>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trendingOffers.map((offer, index) => (
            <div
              key={offer.id}
              className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: offer.bgImage,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Badge */}
              {offer.badge && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                  {offer.badge}
                </span>
              )}

              {/* Content */}
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
                  {offer.store}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  {offer.title}
                </h3>

                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-yellow-300" />
                  <span className="text-2xl font-bold text-yellow-300">
                    {offer.offer}
                  </span>
                </div>

                <p className="text-white/80 text-sm mb-6">{offer.description}</p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                  Visit {offer.store} Now
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
