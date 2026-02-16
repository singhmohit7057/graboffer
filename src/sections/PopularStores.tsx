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
  const trackRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState(0);

  const CARD_WIDTH = 192 + 24; // md:w-48 + gap-6
  const AUTO_SPEED = 1; // smaller = slower movement

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

  // 🔥 AUTO SCROLL (Right → Left)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!trackRef.current) return;

      const containerWidth =
        trackRef.current.parentElement?.offsetWidth || 0;

      const trackWidth = trackRef.current.scrollWidth;

      const maxOffset = -(trackWidth - containerWidth);

      setOffset(prev => {
        if (prev <= maxOffset) return 0; // reset to start
        return prev - AUTO_SPEED;
      });
    }, 16); // ~60fps smooth

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeft = () => {
    setOffset(prev => Math.min(prev + CARD_WIDTH * 2, 0));
  };

  const scrollRight = () => {
    if (!trackRef.current) return;

    const containerWidth =
      trackRef.current.parentElement?.offsetWidth || 0;

    const trackWidth = trackRef.current.scrollWidth;

    const maxOffset = -(trackWidth - containerWidth);

    setOffset(prev =>
      Math.max(prev - CARD_WIDTH * 2, maxOffset)
    );
  };

  return (
    <section
      ref={sectionRef}
      id="stores"
      className="py-12 bg-gray-50"
    >
      <div className="section-padding mb-8 flex items-center justify-between">
        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-600 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
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

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Arrows */}
        {isHovered && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
            >
              ←
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
            >
              →
            </button>
          </>
        )}

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{
            transform: `translateX(${offset}px)`
          }}
        >
          {stores.map((store, index) => (
            <Link
              key={`${store.id}-${index}`}
              to={store.pagePath}
              className="flex-shrink-0 w-40 md:w-48 group cursor-pointer"
            >
              <div className="relative bg-white rounded-xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-gray-100 hover:border-transparent">
                <div
                  className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${store.color}15` }}
                >
                  <img
                    src={store.logo}
                    alt={`${store.name} Coupons & Discount Offers`}
                    loading="lazy"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3 className="text-center font-semibold text-gray-900 mb-1 group-hover:text-[#0064c9] transition-colors">
                  {store.name}
                </h3>

                <p className="text-center text-sm text-gray-500">
                  {getStoreOfferCount(store.name)} Offers
                </p>

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