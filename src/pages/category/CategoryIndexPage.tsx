import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { categories } from '../../data/categories';
import { offers } from '../../data/offers';

export default function CategoryIndexPage() {
  const [query, setQuery] = useState('');

  const liveCategories = categories.filter(c => c.isLive);

  const filtered = liveCategories.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce((acc: any, cat) => {
    const letter = cat.name.charAt(0).toUpperCase();
    acc[letter] = acc[letter] || [];
    acc[letter].push(cat);
    return acc;
  }, {});

  const getOfferCount = (key: string) =>
    offers.filter(o => o.categoryKey === key).length;

  return (
    <div className="pt-[140px] section-padding min-h-screen bg-gray-50">
     {/* Page Header */}
      <h1 className="text-3xl font-bold mb-2">All Categories</h1>
      <p className="text-gray-600 mb-6">
        Browse all active categories on GrabOffer
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search categories..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full md:w-96 mb-8 px-4 py-2 rounded-lg border bg-white"
      />

      {/* ⭐ CREDIT CARDS – FEATURED VERTICAL */}
      <Link
        to="/credit-cards"
        className="group block mb-10 rounded-2xl p-6
                   bg-gradient-to-br from-pink-500 to-rose-600
                   text-white shadow-lg hover:shadow-2xl
                   transition-all duration-300"
      >
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/20
                            flex items-center justify-center">
              <CreditCard className="w-7 h-7 text-white" />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Credit Cards
              </h2>
              <p className="text-sm text-white/90 max-w-md">
                Compare the best credit cards for fuel, travel, cashback and rewards
              </p>
            </div>
          </div>

          <span className="text-sm font-semibold bg-white/20
                           px-4 py-2 rounded-full whitespace-nowrap">
            Explore →
          </span>
        </div>
      </Link>

      {/* A–Z CATEGORY LIST */}
      {Object.keys(grouped).sort().map(letter => (
        <div key={letter} className="mb-6">
          <h2 className="text-lg font-semibold mb-2">{letter}</h2>
          <div className="space-y-2">
           {grouped[letter].map(cat => {
              const Icon = cat.icon;

              return (
                <Link
                  key={cat.key}
                  to={cat.pagePath}
                  className="group flex items-center justify-between gap-4
                            bg-white rounded-xl px-5 py-4 shadow-sm
                            hover:shadow-lg hover:-translate-y-0.5
                            transition-all duration-300"
                >
                  {/* Left: Icon + Name */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: cat.color || '#EEF4FF',
                        color: '#fff',
                      }}
                    >
                      {Icon ? (
                        <Icon className="w-6 h-6" />
                      ) : (
                        <span className="font-bold text-lg">
                          {cat.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-[#0064c9]">
                        {cat.name}
                      </p>
                      {cat.description && (
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Offer Count */}
                  <span className="text-sm font-medium text-gray-500 bg-gray-100
                                  px-3 py-1 rounded-full whitespace-nowrap">
                    {getOfferCount(cat.key)} offers
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>

  );
}
