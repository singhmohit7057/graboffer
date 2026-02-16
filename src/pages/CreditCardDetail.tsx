import { useParams } from 'react-router-dom';
import { creditCards } from '../data/creditCards';
import SEO from '../components/SEO';
import { CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

export default function CreditCardDetail() {
  const { slug } = useParams();
  const card = creditCards.find(c => c.slug === slug);

  if (!card) return <div className="pt-40 text-center">Card not found</div>;

  return (
    <>
   <SEO
      title={`${card.cardName} – Credit Card Details | GrabOffer`}
      description={card.rewardText}
    />
 
  <div className="pt-[140px] pb-24 section-padding max-w-6xl mx-auto">

  <section className="">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl
                     bg-gradient-to-br from-[#e91e63] to-[#ad1457]
                     text-white shadow-2xl"
        >
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4
                              bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold">
                <CreditCard className="w-4 h-4" />
                {card.badge}
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
                {card.bank} {card.cardName}
              </h2>

              <p className="text-lg text-white/90 mb-4">
                {card.title} • {card.rewardText}
              </p>

              {/* BENEFITS */}
              <ul className="space-y-2 mb-6">
                {card.details.benefits.slice(0, 3).map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={card.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             bg-white text-[#e91e63]
                             px-6 py-3 rounded-xl font-bold
                             hover:bg-gray-100 transition"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* RIGHT – CARD IMAGE */}
            <div className="relative flex justify-center md:justify-end">
              <img
                src={card.image}
                alt={`${card.bank} ${card.cardName}`}
                className="w-72 md:w-80 rotate-[-6deg]
                           drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CONTENT */}
    <div className="space-y-12">
      {/* Benefits */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Why Choose This Card?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {card.details.benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-4 shadow-sm"
            >
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Eligibility Criteria
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(card.details.eligibility).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between bg-gray-50 border rounded-xl p-4"
            >
              <span className="font-medium capitalize text-gray-700">
                {key.replace(/([A-Z])/g, ' $1')}
              </span>
              <span className="font-semibold text-gray-900">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Fees */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Fees & Charges
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(card.details.fees).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between bg-white border rounded-xl p-4"
            >
              <span className="capitalize text-gray-600">
                {key} Fee
              </span>
              <span className="font-bold text-green-600">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Documents Required
        </h2>
        <div className="bg-white border rounded-2xl p-6">
          <ul className="space-y-3">
            {card.details.documentsRequired.map((doc, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          How to Apply
        </h2>
        <div className="bg-gray-50 border rounded-2xl p-6">
          <ol className="space-y-4">
            {card.details.stepsToApply.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  </div>
  </>
);
}