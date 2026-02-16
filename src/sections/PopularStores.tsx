import { useEffect, useRef, useState } from 'react';
import { stores } from '../data/stores';
import { offers } from '../data/offers';
import { Link } from 'react-router-dom';

const getStoreOfferCount = (storeName: string) =>
  offers.filter(
    o => o.store.toLowerCase() === storeName.toLowerCase()
  ).length;

export default function PopularStores() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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

  // Duplicate stores for seamless loop
  const duplicatedStores = [...stores, ...stores];

  return (
    <section ref={sectionRef} id="stores" className="py-12 bg-gray-50 overflow-hidden">
      <div className="section-padding mb-8 flex items-center justify-between">
        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
        >
          Popular Stores
        </h2>
        <a
          href="/store"
          className="text-[#0064c9] font-semibold hover:underline"
        >
          View all stores →
        </a>  
      </div>

      {/* Marquee Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          className={`flex gap-6 ${isPaused ? '' : 'animate-marquee'}`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'fit-content',
          }}
        >
          {duplicatedStores.map((store, index) => (
          <Link
            key={`${store.id}-${index}`}
            to={store.pagePath}
            className="flex-shrink-0 w-40 md:w-48 group"
          >
            <div className="relative bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-transparent">
            
            {/* Store Logo Placeholder */}
                <div
                  className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${store.color}15` }}
                >
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Store Name */}
                <h3 className="text-center font-semibold text-gray-900 mb-1 group-hover:text-[#0064c9] transition-colors">
                  {store.name}
                </h3>

                {/* Coupon Count */}
                <p className="text-center text-sm text-gray-500">
                  {getStoreOfferCount(store.name)} Offers
                </p>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ backgroundColor: `${store.color}20` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
