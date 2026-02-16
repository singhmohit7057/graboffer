import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero-flipkart.jpg',
    title: 'Up To 80% OFF',
    subtitle: 'On Fashion, Electronics & More',
    cta: 'SHOP NOW',
    ctaColor: 'bg-[#f57c00] hover:bg-[#e65100]',
  },
  {
    id: 2,
    image: '/images/hero-uber.jpg',
    title: 'Flat 50% OFF',
    subtitle: 'On Your First 3 Rides',
    cta: 'GRAB NOW',
    ctaColor: 'bg-[#4caf50] hover:bg-[#388e3c]',
  },
  {
    id: 3,
    image: '/images/hero-booking.jpg',
    title: 'Up To 60% OFF',
    subtitle: 'Extra 10% OFF On Your Bookings',
    cta: 'GRAB NOW',
    ctaColor: 'bg-[#f57c00] hover:bg-[#e65100]',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative pt-[140px] md:pt-[160px] pb-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-padding">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Slides Container */}
          <div
            className="flex transition-transform duration-600 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 relative"
              >
                <div className="aspect-[16/9] md:aspect-[21/9] relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#0064c9] transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#0064c9] transition-colors" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            <span className="font-semibold text-[#0064c9]">India's Leading</span>{' '}
            Coupons & Deals Marketplace
          </p>
        </div>
      </div>
    </section>
  );
}
