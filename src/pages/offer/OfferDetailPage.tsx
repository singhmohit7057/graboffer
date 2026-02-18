import { useParams, Navigate } from 'react-router-dom';
import { offers } from '../../data/offers';
import SEO from '../../components/SEO';

export default function OfferDetailPage() {
  const { slug } = useParams();

  const offer = offers.find(o => o.slug === slug);

  if (!offer) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <>
      <SEO
        title={`${offer.title} – ${offer.store} Offer | GrabOffer`}
        description={offer.description}
      />

      <div className="pt-[140px] pb-24 section-padding min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">

          {/* Header */}
          <h1 className="text-3xl font-bold mb-2">
            {offer.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {offer.subtitle}
          </p>

          {/* Badge + Code */}
          <div className="flex items-center gap-4 mb-6">
            {offer.badge && (
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-[#0064c9]">
                {offer.badge}
              </span>
            )}

            {offer.code && (
              <span className="px-4 py-2 bg-gray-100 font-mono text-sm rounded-lg">
                {offer.code}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {offer.longDescription || offer.description}
          </p>

          {/* Expiry */}
          {offer.expiry && (
            <p className="text-sm text-red-500 mb-6">
              Valid till: {offer.expiry}
            </p>
          )}

          {/* CTA */}
          <a
            href={offer.link}
            target="_blank"
            className="inline-block bg-[#0064c9] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0052a3] transition"
          >
            Get Deal →
          </a>

          {/* Terms */}
          {offer.terms && (
            <div className="mt-10">
              <h3 className="font-semibold mb-3">Terms & Conditions</h3>
              <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                {offer.terms.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQs */}
          {offer.faqs && (
            <div className="mt-10">
              <h3 className="font-semibold mb-3">FAQs</h3>
              <div className="space-y-4">
                {offer.faqs.map((faq, i) => (
                  <div key={i}>
                    <p className="font-medium">{faq.question}</p>
                    <p className="text-sm text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
