import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Ticket, Gift, Star } from 'lucide-react';

export default function FeaturedStore() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div
            className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <img
              src="/images/featured-store.jpg"
              alt="Featured Store"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            {/* Overlay Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-[#f57c00] text-white text-sm font-bold rounded-full flex items-center gap-2">
              <Star className="w-4 h-4" />
              Featured
            </div>
          </div>

          {/* Content */}
          <div
            className={`lg:pl-8 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Label */}
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0064c9] text-sm font-semibold rounded-full mb-4">
              Featured Store Of The Month
            </span>

            {/* Store Name */}
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              BigRock
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get the best deals on domain registration, web hosting, and more.
              BigRock offers affordable and reliable web solutions for businesses
              of all sizes.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 px-5 py-3 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-[#0064c9] rounded-lg flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">43</p>
                  <p className="text-sm text-gray-500">Coupons</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-[#f57c00] rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">7</p>
                  <p className="text-sm text-gray-500">Offers Available</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group flex items-center gap-3 px-8 py-4 bg-[#0064c9] text-white rounded-full font-semibold text-lg hover:bg-[#0052a3] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              View All Offers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
