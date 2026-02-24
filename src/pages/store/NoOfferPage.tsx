import SEO from '../../components/SEO';
import type { Store } from '../../data/stores';
import Notify from '../../components/forms/Notify';
import { Bell } from 'lucide-react';

type Props = {
  store: Store;
};

export default function NoOfferPage({ store }: Props) {
  return (
    <>
      <SEO
        title={`${store.name} Coupon Codes & Offers – GrabOffer`}
        description={`Currently there are no active offers for ${store.name}. Check back later for new deals and discounts.`}
      />

      <div className="pt-[140px] min-h-screen bg-gray-50">
        <div className="section-padding max-w-5xl mx-auto pb-20 space-y-8">

          {/* 🔹 Store Header */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={store.logo}
              alt={store.name}
              className="w-14 h-14 rounded-lg bg-white p-2 shadow"
            />
            <div>
              <h1 className="text-3xl font-bold">
                {store.name} Offers
              </h1>
              <p className="text-gray-600 text-sm">
                Latest coupons, deals & discounts
              </p>
            </div>
          </div>

          {/* 🔹 Store Description Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              {store.description}
            </p>
          </div>

          {/* 🔹 No Offer Notice */}
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">

            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: store.color }}
            >
              <Bell className="w-6 h-6" />
            </div>

            <h2 className="text-xl font-semibold mb-2">
              No Active Offers Right Now
            </h2>

            <p className="text-gray-500 mb-6 text-sm">
              There are currently no live deals for {store.name}.
              We update offers regularly — check back soon.
            </p>

          <Notify
            entityName={store.name}
            entityType="store"
            brandColor={store.color}
          />
          </div>

          {/* 🔹 FAQ Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <h2 className="text-xl font-semibold">
              Frequently Asked Questions
            </h2>

            <div className="border-t pt-4">
              <h3 className="font-medium">
                What does “No Cashback Store” mean?
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                This means cashback or offers are currently unavailable
                for this retailer. New deals may be added soon.
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium">
                Why is this store listed?
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                We track popular brands and publish offers as soon as
                they go live. Bookmark this page for updates.
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium">
                How can I stay updated?
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Click the notify button above to stay informed when
                new deals become available.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}