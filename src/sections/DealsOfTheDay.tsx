import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, ShoppingCart } from 'lucide-react';

const deals = [
  {
    id: 1,
    store: 'Flipkart',
    name: 'R TRADER P9headphon Smart Headphones',
    image: '/images/deal-headphones.jpg',
    originalPrice: 900,
    discountedPrice: 516,
    discount: 42,
    discountType: 'percent',
  },
  {
    id: 2,
    store: 'Amazon',
    name: 'HAMMER Drop 5W Bluetooth Wireless Speaker',
    image: '/images/deal-speaker.jpg',
    originalPrice: 3499,
    discountedPrice: 599,
    discount: 83,
    discountType: 'percent',
  },
  {
    id: 3,
    store: 'Myntra',
    name: 'Moda Rapido Men Polo Collar T-shirt',
    image: '/images/deal-tshirt.jpg',
    originalPrice: 999,
    discountedPrice: 259,
    discount: 740,
    discountType: 'amount',
  },
  {
    id: 4,
    store: 'AJIO',
    name: 'NEW ETHNIC 4 YOU Women Striped Straight Kurta',
    image: '/images/deal-kurta.jpg',
    originalPrice: 738,
    discountedPrice: 258,
    discount: 65,
    discountType: 'percent',
  },
];

export default function DealsOfTheDay() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 45, seconds: 30 });

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} id="deals" className="py-12 bg-gray-50">
      <div className="section-padding">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#d32f2f] to-[#b71c1c] rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2
                className={`text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Deals Of The Day
              </h2>
              <p className="text-sm text-gray-500">Hurry! Limited time offers</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div
            className={`flex items-center gap-2 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-sm text-gray-500">Ends in:</span>
            <div className="flex items-center gap-1">
              <span className="px-3 py-1.5 bg-[#d32f2f] text-white text-sm font-bold rounded-lg">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[#d32f2f] font-bold">:</span>
              <span className="px-3 py-1.5 bg-[#d32f2f] text-white text-sm font-bold rounded-lg">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[#d32f2f] font-bold">:</span>
              <span className="px-3 py-1.5 bg-[#d32f2f] text-white text-sm font-bold rounded-lg">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          <a
            href="#all-deals"
            className={`hidden sm:flex items-center gap-2 text-[#0064c9] font-semibold hover:gap-3 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            View More Deals
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#d32f2f] text-white text-sm font-bold rounded-full group-hover:animate-pulse">
                  {deal.discountType === 'percent'
                    ? `${deal.discount}% OFF`
                    : `Rs.${deal.discount} OFF`}
                </div>
                {/* Store Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full">
                  {deal.store}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-3 group-hover:text-[#0064c9] transition-colors">
                  {deal.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    Rs. {deal.discountedPrice}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    Rs {deal.originalPrice}
                  </span>
                </div>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0064c9] text-white rounded-lg font-semibold hover:bg-[#0052a3] transition-colors group/btn">
                  <ShoppingCart className="w-4 h-4" />
                  Grab Deal
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-6 text-center">
          <a
            href="#all-deals"
            className="inline-flex items-center gap-2 text-[#0064c9] font-semibold"
          >
            View More Deals
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
