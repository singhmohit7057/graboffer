import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Heart, TrendingUp, Percent } from "lucide-react";
import SEO from "../../components/SEO";
import { categories } from "../../data/categories";
import { offers } from "../../data/offers";

const getOfferCount = (key: string) => offers.filter((o) => o.categoryKey.toLowerCase() === key.toLowerCase()).length;

export default function PopularCategoriesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ SEO MUST BE HERE */}
      <SEO
        title="Browse All Categories – GrabOffer"
        description="Explore all deal categories including travel, food, shopping, domain, vpn and more on GrabOffer."
      />

      <div className="pt-[140px] md:pt-[160px] min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#f57c00] to-[#e65100] py-16">
          <div className="section-padding">
            <div
              className={`max-w-3xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Popular Categories</h1>
              <p className="text-xl text-white/80">
                Browse through all categories and find the best deals curated for you.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white shadow-sm">
          <div className="section-padding py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Stat value={`${categories.length}+`} label="Categories" color="#0064c9" />
              <Stat value="1000+" label="Active Offers" color="#f57c00" />
              <Stat value="500+" label="Partner Stores" color="#4caf50" />
              <Stat value="35L+" label="Happy Users" color="#d32f2f" />
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="section-padding py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <Link
                key={cat.id}
                to={cat.isLive ? cat.pagePath ?? "/" : "#"}
                onClick={(e) => {
                  if (!cat.isLive) {
                    e.preventDefault();
                  }
                }}
                className={`group bg-white rounded-2xl shadow-sm transition-all duration-500
                  ${cat.isLive 
                    ? 'hover:shadow-xl cursor-pointer'
                    : 'cursor-not-allowed opacity-90'}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {/* Header */}
                <div
                  className="p-6 transition-all duration-300"
                  style={{ backgroundColor: `${cat.color}15` }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: cat.color }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${cat.color}20`,
                        color: cat.color,
                      }}
                    >
                      {getOfferCount(cat.key)} Offers
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mt-4 text-gray-900">
                    {cat.name}
                  </h3>

                  <p className="text-sm mt-1 text-gray-600">
                    {cat.description}
                  </p>
                  </div>
                  {/* Top Stores */}
                {cat.topStores && cat.topStores.length > 0 && (
                  <div className="px-5 mt-4 mb-4">
                    <p className="text-[11px] font-semibold text-gray-400 mb-2">
                      TOP STORES
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cat.topStores.map((store, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {store}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="px-5 pb-5">
                  <div
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm"
                    style={{
                      backgroundColor: `${cat.color}15`,
                      color: cat.color,
                    }}
                  >
                    View Offers <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>



        {/* Featured Section */}
        <div className="bg-white py-16">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  Why Shop Through Categories?
                </h2>
                <p className="text-gray-600 mb-8">
                  Our curated categories help you find the best deals faster. Whether you are looking for travel,
                  fashion, or electronics, we have got you covered.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Percent className="w-6 h-6 text-[#0064c9]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Best Discounts</h4>
                      <p className="text-sm text-gray-500">Up to 90% off on selected categories</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-[#f57c00]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Trending Deals</h4>
                      <p className="text-sm text-gray-500">Handpicked offers updated daily</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-[#4caf50]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Verified Coupons</h4>
                      <p className="text-sm text-gray-500">All offers tested and verified</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0064c9] to-[#42a5f5] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Subscribe for Category Alerts</h3>
                <p className="text-white/80 mb-6">
                  Get notified when new offers are added to your favorite categories.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <button className="px-6 py-3 bg-white text-[#0064c9] rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Helpers ---------- */

function Stat({ value, label, color }: any) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
