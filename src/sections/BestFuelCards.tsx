import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { creditCards } from '../data/creditCards';

export default function BestCreditCards() {
  // ✅ only fuel cards
  const freeCards = creditCards
    .filter(card =>
      card.section === 'credit-cards' &&
      card.tags.includes('fuel')
    )
    .slice(0, 4);

  const previewCards = creditCards.slice(0, 4);

  return (
    <section className="py-12">
      <div className="section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Best Fuel Credit Cards
          </h2>
          <Link
            to="/credit-cards?category=fuel"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {freeCards.map((card) => (
            <Link
              key={card.id}
              to={`/credit-cards/${card.slug}`}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-orange-300 p-5 group transition-all hover:shadow-xl"
            >
              {/* Bank + Card Name */}
              <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 text-xs font-semibold text-gray-900 shadow leading-tight">
                <div className="font-bold">{card.bank}</div>
                <div className="text-[11px] text-gray-600">
                  {card.cardName}
                </div>
              </div>

              {/* Badge */}
              {card.badge && (
                <div className="absolute top-4 right-4 z-10 text-white text-xs font-bold tracking-wide drop-shadow-md">
                  {card.badge}
                </div>
              )}

              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute right-4 top-10 w-36 rotate-6 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
              />

              {/* Title */}
              <div className="mt-20 text-white">
                <h3 className="text-xl font-bold leading-snug">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm opacity-90">
                  {card.rewardText}
                </p>
              </div>

              {/* Rewards Strip */}
              <div className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg">
                <span>{card.rewardText}</span>
              </div>

              {/* CTA */}
              <div className="absolute bottom-4 right-4">
                <span className="bg-white text-blue-600 font-semibold text-sm px-4 py-1.5 rounded-lg">
                  Apply Now
                </span>
              </div>

              {/* Hover overlay arrow */}
              <div className="absolute inset-y-0 right-0 w-12 bg-white/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
