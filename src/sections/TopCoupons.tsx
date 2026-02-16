import { useState, useEffect, useRef } from 'react';
import { Copy, Check, ExternalLink, Car, Plane, ShoppingBag, Smartphone, Utensils, Monitor } from 'lucide-react';

const tabs = [
  { id: 'most-used', name: 'Most Used', icon: ShoppingBag },
  { id: 'travel', name: 'Travel', icon: Plane },
  { id: 'recharge', name: 'Recharge', icon: Smartphone },
  { id: 'fashion', name: 'Fashion', icon: ShoppingBag },
  { id: 'food', name: 'Food', icon: Utensils },
  { id: 'electronics', name: 'Electronics', icon: Monitor },
];

const couponsData: Record<string, Array<{
  id: number;
  store: string;
  offer: string;
  description: string;
  code: string;
  badge?: string;
  badgeColor?: string;
  icon: any;
}>> = {
  'most-used': [
    {
      id: 1,
      store: 'Savaari',
      offer: 'Save Up To Rs 500',
      description: 'On Your First Car Rental Booking',
      code: 'SAVAARI500',
      badge: 'GRABON EXCLUSIVE',
      badgeColor: 'bg-[#0064c9]',
      icon: Car,
    },
    {
      id: 2,
      store: 'Etihad Airways',
      offer: 'US to India Flash Sale!',
      description: 'Book Flights Now & Enjoy US to India Adventures At Best Price',
      code: 'ETIHADUS',
      icon: Plane,
    },
    {
      id: 3,
      store: 'Amazon',
      offer: 'Ultimate Brand Sale',
      description: 'Up To 70% OFF On Fashion & Beauty Products + Extra 10% Cashback',
      code: 'AMAZON70',
      icon: ShoppingBag,
    },
    {
      id: 4,
      store: 'Healthkart',
      offer: 'Up To 70% OFF + Extra Rs 150 OFF',
      description: 'Sitewide Products | All Users',
      code: 'HK150',
      icon: ShoppingBag,
    },
    {
      id: 5,
      store: 'SonyLIV',
      offer: 'Flat 10% OFF',
      description: "Watch 'Shark Tank India' Latest Episodes & Get Discount On Subscription",
      code: 'SONY10',
      badge: 'GRABON EXCLUSIVE',
      badgeColor: 'bg-[#0064c9]',
      icon: Monitor,
    },
    {
      id: 6,
      store: 'MuscleBlaze',
      offer: 'Up To 50% OFF + Additional Rs 150 OFF',
      description: 'All Users | Minimum Order Rs 999',
      code: 'MB150',
      badge: 'GRABON EXCLUSIVE',
      badgeColor: 'bg-[#0064c9]',
      icon: ShoppingBag,
    },
  ],
  'travel': [
    {
      id: 7,
      store: 'MakeMyTrip',
      offer: 'Up To 25% OFF',
      description: 'On Domestic Flight Bookings',
      code: 'MMT25',
      icon: Plane,
    },
    {
      id: 8,
      store: 'Goibibo',
      offer: 'Flat 20% OFF',
      description: 'On Hotel Bookings Across India',
      code: 'GOIBIBO20',
      icon: Plane,
    },
    {
      id: 9,
      store: 'RedBus',
      offer: 'Up To Rs 300 OFF',
      description: 'On Bus Ticket Bookings',
      code: 'REDBUS300',
      icon: Car,
    },
    {
      id: 10,
      store: 'Yatra',
      offer: 'Flat 15% OFF',
      description: 'On International Flights',
      code: 'YATRA15',
      icon: Plane,
    },
    {
      id: 11,
      store: 'Cleartrip',
      offer: 'Up To 30% OFF',
      description: 'On Domestic Hotels',
      code: 'CLEAR30',
      icon: Plane,
    },
    {
      id: 12,
      store: 'IRCTC',
      offer: 'Cashback Up To Rs 100',
      description: 'On Train Ticket Bookings',
      code: 'IRCTC100',
      icon: Car,
    },
  ],
  'recharge': [
    {
      id: 13,
      store: 'Paytm',
      offer: 'Flat Rs 50 Cashback',
      description: 'On Mobile Recharge Of Rs 300+',
      code: 'PAYTM50',
      icon: Smartphone,
    },
    {
      id: 14,
      store: 'Freecharge',
      offer: 'Up To Rs 100 Cashback',
      description: 'On First Recharge',
      code: 'FREE100',
      icon: Smartphone,
    },
    {
      id: 15,
      store: 'Mobikwik',
      offer: 'SuperCash Up To Rs 200',
      description: 'On Utility Bill Payments',
      code: 'MOBIKWIK200',
      icon: Smartphone,
    },
    {
      id: 16,
      store: 'Amazon Pay',
      offer: 'Flat Rs 25 Cashback',
      description: 'On Mobile Recharge',
      code: 'AMAZON25',
      icon: Smartphone,
    },
    {
      id: 17,
      store: 'Google Pay',
      offer: 'Scratch Cards Worth Rs 1000',
      description: 'On Recharge & Bill Payments',
      code: 'GOOGLEPAY',
      icon: Smartphone,
    },
    {
      id: 18,
      store: 'PhonePe',
      offer: 'Cashback Up To Rs 150',
      description: 'On First DTH Recharge',
      code: 'PHONEPE150',
      icon: Smartphone,
    },
  ],
  'fashion': [
    {
      id: 19,
      store: 'Myntra',
      offer: 'Up To 70% OFF + Extra 10%',
      description: 'On Fashion & Lifestyle Products',
      code: 'MYNTRA10',
      icon: ShoppingBag,
    },
    {
      id: 20,
      store: 'AJIO',
      offer: 'Flat 50% OFF',
      description: 'On Trendy Fashion Collection',
      code: 'AJIO50',
      icon: ShoppingBag,
    },
    {
      id: 21,
      store: 'Nykaa',
      offer: 'Up To 40% OFF + Free Gift',
      description: 'On Beauty & Personal Care',
      code: 'NYKAA40',
      icon: ShoppingBag,
    },
    {
      id: 22,
      store: 'Tata Cliq',
      offer: 'Flat Rs 500 OFF',
      description: 'On First Purchase Above Rs 2000',
      code: 'TATA500',
      icon: ShoppingBag,
    },
    {
      id: 23,
      store: 'Max Fashion',
      offer: 'Buy 2 Get 1 Free',
      description: 'On Selected Styles',
      code: 'MAXB2G1',
      icon: ShoppingBag,
    },
    {
      id: 24,
      store: 'Westside',
      offer: 'Flat 30% OFF',
      description: 'On New Arrivals',
      code: 'WEST30',
      icon: ShoppingBag,
    },
  ],
  'food': [
    {
      id: 25,
      store: 'Swiggy',
      offer: 'Flat 50% OFF',
      description: 'On First 5 Orders',
      code: 'SWIGGY50',
      icon: Utensils,
    },
    {
      id: 26,
      store: 'Zomato',
      offer: 'Up To 60% OFF',
      description: 'On Dining Out & Delivery',
      code: 'ZOMATO60',
      icon: Utensils,
    },
    {
      id: 27,
      store: 'Domino\'s',
      offer: 'Flat 35% OFF',
      description: 'On Orders Above Rs 300',
      code: 'DOMINOS35',
      icon: Utensils,
    },
    {
      id: 28,
      store: 'Pizza Hut',
      offer: 'Buy 1 Get 1 Free',
      description: 'On Medium Pizzas',
      code: 'PHBOGO',
      icon: Utensils,
    },
    {
      id: 29,
      store: 'McDonald\'s',
      offer: 'Free Fries With Burger',
      description: 'On Orders Above Rs 199',
      code: 'MCDFRIES',
      icon: Utensils,
    },
    {
      id: 30,
      store: 'KFC',
      offer: 'Flat 25% OFF',
      description: 'On Bucket Meals',
      code: 'KFC25',
      icon: Utensils,
    },
  ],
  'electronics': [
    {
      id: 31,
      store: 'Croma',
      offer: 'Up To 40% OFF',
      description: 'On Electronics & Appliances',
      code: 'CROMA40',
      icon: Monitor,
    },
    {
      id: 32,
      store: 'Reliance Digital',
      offer: 'Flat 10% OFF',
      description: 'On Laptops & Tablets',
      code: 'RD10',
      icon: Monitor,
    },
    {
      id: 33,
      store: 'Vijay Sales',
      offer: 'Exchange Offer Up To Rs 10000',
      description: 'On Old Electronics',
      code: 'VS10000',
      icon: Monitor,
    },
    {
      id: 34,
      store: 'Samsung',
      offer: 'Up To 20% OFF',
      description: 'On Galaxy Smartphones',
      code: 'SAMSUNG20',
      icon: Smartphone,
    },
    {
      id: 35,
      store: 'OnePlus',
      offer: 'Flat Rs 2000 OFF',
      description: 'On OnePlus 12 Series',
      code: 'ONEPLUS2K',
      icon: Smartphone,
    },
    {
      id: 36,
      store: 'Apple',
      offer: 'No Cost EMI',
      description: 'On iPhone 15 Series',
      code: 'APPLEEMI',
      icon: Smartphone,
    },
  ],
};

export default function TopCoupons() {
  const [activeTab, setActiveTab] = useState('most-used');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsAnimating(false);
    }, 300);
  };

  const copyCode = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentCoupons = couponsData[activeTab] || [];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="section-padding">
        {/* Section Header */}
        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-900 mb-8 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
        >
          Today's Top Coupons & Offers
        </h2>

        {/* Tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-8 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#0064c9] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Coupons Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {currentCoupons.map((coupon, index) => {
            const Icon = coupon.icon;
            return (
              <div
                key={coupon.id}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Badge */}
                {coupon.badge && (
                  <span
                    className={`inline-block px-3 py-1 ${coupon.badgeColor} text-white text-xs font-bold rounded-full mb-3`}
                  >
                    {coupon.badge}
                  </span>
                )}

                {/* Store & Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0064c9] to-[#42a5f5] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-700">
                    {coupon.store}
                  </span>
                </div>

                {/* Offer */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0064c9] transition-colors">
                  {coupon.offer}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{coupon.description}</p>

                {/* Code & CTA */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => copyCode(coupon.code, coupon.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 rounded-lg font-mono text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {copiedId === coupon.id ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        {coupon.code}
                      </>
                    )}
                  </button>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 bg-[#0064c9] text-white rounded-lg hover:bg-[#0052a3] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-[#0064c9] hover:text-[#0064c9] transition-all duration-300">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
