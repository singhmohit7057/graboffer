import { useParams, Navigate } from 'react-router-dom';
import { stores } from '../../data/stores';
import { offers } from '../../data/offers';
import SEO from '../../components/SEO';

export default function StorePage() {
  const { slug } = useParams();

  const store = stores.find(
    s => s.slug === slug && s.isLive
  );

  if (!store) {
    return <Navigate to="/not-found" replace />;
  }

  const storeOffers = offers.filter(
    o => o.store.toLowerCase() === store.name.toLowerCase()
  );

  return (
    <>
      <SEO
        title={`${store.name} Offers & Deals – GrabOffer`}
        description={`Get the latest verified ${store.name} coupon codes, deals, and discounts.`}
      />

      <div className="pt-[140px] min-h-screen bg-gray-50">
        <div className="section-padding">

          {/* Store Header */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src={store.logo}
              alt={store.name}
              className="w-14 h-14 rounded-lg bg-white p-2 shadow"
            />
            <div>
              <h1 className="text-3xl font-bold">{store.name} Offers</h1>
              <p className="text-gray-600 text-sm">
                Latest coupons, deals & discounts
              </p>
            </div>
          </div>

          {/* Offers */}
          {storeOffers.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center shadow">
              <p className="text-gray-500">
                No active offers available right now.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {storeOffers.map(offer => {
                const Icon = offer.icon;

                return (
                  <div
                    key={offer.id}
                    className={`relative rounded-2xl p-5 shadow-sm hover:shadow-xl
                                transition-all duration-300 ${offer.bgColor}`}
                  >
                    {/* Badge */}
                    {offer.badge && (
                      <span
                        className={`absolute top-4 right-4 text-xs font-bold
                                    text-white px-3 py-1 rounded-full ${offer.badgeColor}`}
                      >
                        {offer.badge}
                      </span>
                    )}

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center
                                  text-white mb-4 bg-gradient-to-br ${offer.gradient}`}
                    >
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-lg mb-1">
                      {offer.title}
                    </h3>

                    {offer.subtitle && (
                      <p className="text-sm text-gray-600 mb-2">
                        {offer.subtitle}
                      </p>
                    )}

                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {offer.description}
                    </p>

                    {/* Code */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono bg-gray-100 px-3 py-1 rounded">
                        {offer.code}
                      </span>
                      <a
                        href={offer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#0064c9] hover:underline"
                      >
                        Use Deal →
                      </a>
                    </div>

                    {/* Meta */}
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Expires: {offer.expiry}</span>
                      <span>{offer.usage}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
