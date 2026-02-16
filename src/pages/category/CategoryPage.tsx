import { useParams, useSearchParams, Navigate } from 'react-router-dom';
import { categories } from '../../data/categories';
import { offers } from '../../data/offers';
import { ArrowRight, Filter } from 'lucide-react';
import SEO from '../../components/SEO';


export default function CategoryPage() {
  const { slug } = useParams();
const [searchParams, setSearchParams] = useSearchParams();

const tag = searchParams.get('tag') || 'all';
const store = searchParams.get('store') || 'all';

const updateParams = (newParams: Record<string, string>) => {
  const params = Object.fromEntries(searchParams.entries());
  setSearchParams({ ...params, ...newParams });
};


  // find category
  const category = categories.find(c => c.key === slug);

  // derived flags
  const isInvalid = !category || category.isLive === false;
  const hasFilters = searchParams.toString().length > 0;

  // ✅ HARD BLOCK: render nothing
    if (isInvalid) {
      return (
        <>
          <SEO
            title="Category Not Available – GrabOffer"
            noIndex
          />
        </>
      );
    }

  // offers for this category
  const categoryOffers = offers.filter(
    o => o.categoryKey.toLowerCase() === category.key.toLowerCase()
  );

  // collect tags dynamically (optional)
  const tags = Array.from(
    new Set(
      categoryOffers.flatMap(o => o.tags || [])
    )
  );

  // collect store dynamically (optional)
  const stores = Array.from(
  new Set(categoryOffers.map(o => o.store))
);

  const filteredOffers = categoryOffers.filter(o => {
  const tagMatch =
    tag === 'all' || o.tags?.includes(tag);

  const storeMatch =
    store === 'all' || o.store === store;

  return tagMatch && storeMatch;
});

  return (
    <>
    <SEO
      title={`${category.name} Offers & Deals – GrabOffer`}
      description={category.description}
      noIndex={hasFilters}
    />

    <div className="pt-[140px] pb-24 section-padding min-h-screen bg-gray-50">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {category.name}
        </h1>
        <p className="text-gray-600 mt-2">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Filters */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-[160px]">

            {/* Header */}
            <div className="flex items-center gap-2 mb-5">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold">Filter Offers</h3>
            </div>

            {/* TAG FILTER */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">
                Offer Type
              </p>

              <div className="space-y-2">
                <button
                  onClick={() => setSearchParams({})}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                    tag === 'all'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  All Offers
                </button>

                {tags.map(t => (
                  <button
                    key={t}
                    onClick={() => updateParams({ tag: t })}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                      tag === t
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-100 my-4" />

            {/* STORE FILTER */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">
                Brand
              </p>

              <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                <button
                  onClick={() => updateParams({ store: 'all' })}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                    store === 'all'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  All Brands
                </button>

                {stores.map(s => (
                  <button
                    key={s}
                    onClick={() => updateParams({ store: s })}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                      store === s
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Offers Grid */}
        <section className="lg:col-span-3">
          {filteredOffers.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center">
              <p className="text-gray-500">
                No offers found for this filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredOffers.map(offer => {
                const Icon = offer.icon;

                return (
                  <a
                    key={offer.id}
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition group"
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {offer.store}
                        </p>
                        <p className="text-xs text-gray-500">
                          {offer.subtitle}
                        </p>
                      </div>

                      {offer.badge && (
                        <span className="text-xs font-bold text-orange-600">
                          {offer.badge}
                        </span>
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${offer.gradient}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Info */}
                    <h3 className="font-bold text-lg text-gray-900">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {offer.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                        View Offer <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
    </>
  );
}
