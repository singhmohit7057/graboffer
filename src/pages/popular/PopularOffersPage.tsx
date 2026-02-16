import { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import { offers } from '../../data/offers';
import { categories } from '../../data/categories';
import {Search, Filter, Copy, Check, ExternalLink,} from 'lucide-react';

export default function PopularOffersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const filteredOffers = offers.filter((offer) => {
  const matchesCategory =
    selectedCategory === 'all' ||
    offer.categoryKey === selectedCategory;

  const matchesSearch =
    offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.store.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
});

  const copyCode = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filterCategories = [
    { key: 'all', name: 'All' },
    ...categories.map((c) => ({
      key: c.key,
      name: c.name,
    })),
  ];

  return (
    <>
    <SEO
      title="Popular Offers – GrabOffer"
      description="Browse today’s best verified offers, coupon codes, and discounts from leading brands."
    />

    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0064c9] to-[#0052a3] py-16">
        <div className="section-padding">
          <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Popular Offers
            </h1>
            <p className="text-xl text-white/80">
              Discover the best deals and discounts from top brands. Save big on every purchase!
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="section-padding py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search offers by store or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl border-2 border-transparent focus:border-[#0064c9] focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === cat.key
                    ? 'bg-[#0064c9] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredOffers.length}</span> offers
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOffers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <a
                key={offer.id}
                href={offer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >

                {/* Header */}
                <div className={`${offer.bgColor} p-5`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-3 py-1 ${offer.badgeColor} text-white text-xs font-bold rounded-full`}>
                      {offer.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${offer.gradient} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{offer.title}</h3>
                  <p className="text-sm text-gray-600">{offer.subtitle}</p>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{offer.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>Store: <span className="font-medium text-gray-600">{offer.store}</span></span>
                    <span>{offer.usage}</span>
                  </div>

                  <div className="text-xs text-gray-400 mb-4">
                    Expires: <span className="text-[#d32f2f] font-medium">{offer.expiry}</span>
                  </div>

                  {/* Code & CTA */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyCode(offer.code, offer.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 rounded-lg font-mono text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {copiedId === offer.id ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          {offer.code}
                        </>
                      )}
                    </button>
                    <a
                      href={offer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center w-10 h-10 bg-[#0064c9] text-white rounded-lg hover:bg-[#0052a3] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredOffers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No offers found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More */}
        {filteredOffers.length > 0 && (
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-[#0064c9] hover:text-[#0064c9] transition-all duration-300">
              Load More Offers
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
