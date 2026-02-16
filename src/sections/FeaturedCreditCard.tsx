import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { creditCards } from '../data/creditCards';

const allTags = Array.from(
  new Set(creditCards.flatMap(card => card.tags))
);

const TAG_LABELS: Record<string, string> = {
  all: 'All Cards',
  free: 'Lifetime Free',
  fuel: 'Fuel Benefits',
  travel: 'Travel Rewards',
};

const TAG_STYLES: Record<string, string> = {
  free: 'bg-green-50 text-green-700',
  fuel: 'bg-orange-50 text-orange-700',
  travel: 'bg-purple-50 text-purple-700',
  cashback: 'bg-blue-50 text-blue-700',
  shopping: 'bg-pink-50 text-pink-700',
  premium: 'bg-gray-900 text-white',
};

const TAGS = ['all', ...allTags];

export default function CreditCardsFeaturedRail() {
  const [activeTag, setActiveTag] = useState<string>('all');

 const filteredCards =
  activeTag === 'all'
    ? creditCards
    : creditCards.filter(card => card.tags.includes(activeTag));

  return (
    <section className="section-padding py-16 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-bold">
            Best Credit Cards in India
          </h2>
          <p className="text-gray-600 mt-1">
            Handpicked cards based on lifestyle & savings
          </p>
        </div>

        <a
          href="/credit-cards"
          className="text-[#0064c9] font-semibold hover:underline"
        >
          View all cards →
        </a>
      </div>

      {/* Tag Filters */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                activeTag === tag
                  ? 'bg-[#0064c9] text-white'
                  : 'bg-white border hover:bg-blue-50'
              }`}
          >
            {TAG_LABELS[tag] ?? tag.toUpperCase()}
          </button>
          
        ))}
      </div>

      {/* Card Rail */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {filteredCards.map(card => (
          <div
            key={card.slug}
            className="min-w-[320px] max-w-[320px]
                       bg-white rounded-2xl shadow
                       hover:shadow-xl transition-all flex flex-col"
          >
            {/* Card Image */}
            <div className="h-[180px] p-6 flex items-center justify-center
                bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl">
              <img
                src={card.image}
                alt={card.cardName}
                className="max-h-[140px] object-contain rotate-[-4deg]"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              {/* Tags */}
              <div className="flex gap-2 mb-3">
                {card.tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`text-xs font-semibold px-2 py-1 rounded-full
                      transition hover:opacity-80
                      ${TAG_STYLES[tag] ?? 'bg-gray-100 text-gray-600'}`}
                  >
                    {TAG_LABELS[tag] ?? tag.toUpperCase()}
                  </button>
                ))}
              </div>

              <h3 className="font-bold text-lg leading-tight">
                {card.bank} {card.cardName}
              </h3>

              {card.badge && (
                <p className="text-sm font-medium text-[#0064c9] mt-0.5">
                  Best for: {card.badge}
                </p>
              )}

              <p className="text-sm text-gray-600 mt-1">
                {card.title}
              </p>

              {/* Benefits */}
              <ul className="mt-3 space-y-1 text-sm text-gray-700 h-[64px] overflow-hidden">
                {card.details.benefits.slice(0, 2).map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                    <span className="line-clamp-2">{b}</span>
                  </li>
                ))}
              </ul>

            <hr className="my-4 border-gray-100" />

              {/* CTA */}
              <div className="mt-auto pt-4 flex justify-between items-center">
                <a
                  href={card.applyUrl}
                  target="_blank"
                  className="text-sm font-extrabold text-[#0064c9]
                             hover:underline tracking-wide "
                >
                  Apply Now
                </a>

                <a
                  href={`/credit-cards/${card.slug}`}
                  className="text-sm flex items-center gap-1 text-gray-500 hover:text-black"
                >
                  Details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
