import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Bus, Laptop, Globe, CreditCard, ArrowRight } from "lucide-react";

const offers = [
  {
    id: 1,
    badge: "GRABON EXCLUSIVE",
    badgeColor: "bg-[#0064c9]",
    title: "Get Up To Rs 500 OFF",
    subtitle: "On Your Bus Ticket Bookings",
    icon: Bus,
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    badge: "Republic Day Special",
    badgeColor: "bg-[#d32f2f]",
    title: "Laptops - Up To 40% OFF",
    subtitle: "Extra 5% OFF On Your Purchases",
    icon: Laptop,
    gradient: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 3,
    badge: "DOMAIN EXCLUSIVE",
    badgeColor: "bg-[#f57c00]",
    title: "Get .Com Domain 1st Year",
    subtitle: "Only at Rs 89*",
    icon: Globe,
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: 4,
    badge: "SITEWIDE OFF",
    badgeColor: "bg-[#4caf50]",
    title: "Flat 87% OFF",
    subtitle: "On Annual & Monthly Plans",
    icon: CreditCard,
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
];

export default function PopularOffers() {
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
      { threshold: 0.2 },
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
        <div className="flex items-center justify-between mb-8">
          <h2
            className={`text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            Popular Offers of the Day
          </h2>
          <Link
            to="/offers"
            className={`hidden sm:flex items-center gap-2 text-[#0064c9] font-semibold hover:gap-3 transition-all duration-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className={`group relative overflow-hidden rounded-xl ${offer.bgColor} p-5 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                <span
                  className={`inline-block px-3 py-1 ${offer.badgeColor} text-white text-xs font-bold rounded-full mb-3`}
                >
                  {offer.badge}
                </span>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0064c9] transition-colors">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{offer.subtitle}</p>

                {/* Icon */}
                <div
                  className={`absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${offer.gradient} flex items-center justify-center opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 left-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#0064c9]">
                    Grab Now
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            );
          })}
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-6 text-center">
          <Link to="/offers" className="inline-flex items-center gap-2 text-[#0064c9] font-semibold">
            View All Offers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
