import { useSearchParams, Link } from 'react-router-dom';
import { creditCards } from '../../data/creditCards';
import { ArrowRight, Filter } from 'lucide-react';
import SEO from '../../components/SEO';

const FILTERS = [
  { label: 'All Cards', value: 'all' },
  { label: 'Lifetime Free', value: 'free' },
  { label: 'Fuel Cards', value: 'fuel' },
  { label: 'Travel Cards', value: 'travel' },
];

export default function CreditCardsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';

  const filteredCards = creditCards.filter(card => {
    // only credit cards page data
    if (card.section !== 'credit-cards') return false;

    // all cards
    if (category === 'all') return true;

    // filter by tag
    return card.tags.includes(category);
  });


  return (
    <>
    <SEO
      title="Best Credit Cards in India – Compare & Apply | GrabOffer"
      description="Compare the best credit cards in India. Find lifetime free, travel, fuel, and cashback cards."
    />

    <div className="pt-[140px] pb-24 section-padding min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Credit Cards
        </h1>
        <p className="text-gray-600 mt-2">
          Compare the best credit cards and apply instantly
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Filters */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-[160px]">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold">Filter Cards</h3>
            </div>

            <div className="space-y-2">
              {FILTERS.map(filter => (
                <button
                  key={filter.value}
                  onClick={() =>
                    setSearchParams(
                      filter.value === 'all'
                        ? {}
                        : { category: filter.value }
                    )
                  }
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                    category === filter.value
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Cards Grid */}
        <section className="lg:col-span-3">
          {filteredCards.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center">
              <p className="text-gray-500">
                No cards found for this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCards.map(card => (
                <Link
                  key={card.id}
                  to={`/credit-cards/${card.slug}`}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition group"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {card.bank}
                      </p>
                      <p className="text-xs text-gray-500">
                        {card.cardName}
                      </p>
                    </div>

                    {card.badge && (
                      <span className="text-xs font-bold text-orange-600">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.cardName}
                    className="w-40 mx-auto my-4 transition-transform group-hover:scale-105"
                  />

                  {/* Info */}
                  <h3 className="font-bold text-lg text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {card.rewardText}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-blue-600 font-semibold text-sm">
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
    </>
  );
}
