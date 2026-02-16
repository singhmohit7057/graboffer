import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { stores } from '../../data/stores';

export default function StoreIndexPage() {
  const [query, setQuery] = useState('');

  const liveStores = stores.filter(s => s.isLive);

  const ALPHABETS = ['0-9', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filtered = liveStores.filter(store =>
    store.name.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, typeof stores>>(
    (acc, store) => {
      const firstChar = store.name.charAt(0).toUpperCase();
      const letter = /[0-9]/.test(firstChar) ? '0-9' : firstChar;
      acc[letter] = acc[letter] || [];
      acc[letter].push(store);
      return acc;
    },
    {}
  );

  return (
    <div className="pt-[140px] pb-24 section-padding min-h-screen bg-gray-50">

      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          All Stores
        </h1>
        <p className="text-gray-600 mt-2">
          Browse all partner brands available on GrabOffer
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search stores..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full bg-white border
                     focus:border-[#0064c9] focus:outline-none transition"
        />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT: STORE LIST CARD */}
        <div className="lg:col-span-2 bg-white rounded-xl border shadow-sm">

          {/* Alphabet Navigation (INSIDE card) */}
          <div className="px-6 py-4 border-b">
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-[#0064c9]">
              {ALPHABETS.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="px-3 py-1 rounded-md hover:bg-blue-100 transition"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Store Sections */}
          <div className="px-6 py-6 space-y-12">
            {Object.keys(grouped).sort().map(letter => (
              <section key={letter} id={`letter-${letter}`}className="scroll-mt-[160px]">

                {/* Letter Header */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="px-3 py-1 rounded-md bg-[#0064c9] text-white text-sm font-bold">
                    {letter}
                  </span>
                  <div className="flex-1 border-t border-dashed border-gray-300" />
                </div>

                {/* Store Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {grouped[letter].map(store => (
                    <Link
                      key={store.slug}
                      to={`/store/${store.slug}`}
                      className="flex items-center gap-4 bg-white border rounded-lg
                                 px-4 py-3 hover:shadow-md transition"
                    >
                      {/* Logo */}
                      <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                        {store.logo ? (
                          <img
                            src={store.logo}
                            alt={store.name}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <span className="font-bold text-gray-500">
                            {store.name.charAt(0)}
                          </span>
                        )}
                      </div>

                      {/* Text */}
                      <div>
                        <p className="font-medium text-gray-900">
                          {store.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          View available offers
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

              </section>
            ))}
          </div>
        </div>

        {/* RIGHT: SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-[140px] bg-white rounded-xl border p-6 shadow-sm">
            <h3 className="font-semibold mb-4">
              How GrabOffer Works?
            </h3>

            <ul className="space-y-4 text-sm text-gray-600">
              <li>🔍 Search your favorite brand</li>
              <li>➡️ Click & visit store</li>
              <li>🛒 Shop as usual</li>
              <li>💸 Grab best deals & coupons</li>
            </ul>

            <a
              href="/how-it-works"
              className="inline-block mt-6 text-[#0064c9] font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        </aside>

      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="mt-20 text-center text-gray-500">
          No stores found for “{query}”
        </div>
      )}
    </div>
  );
}
