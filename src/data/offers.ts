import {Bus, Laptop, Globe, CreditCard, Star, Flame, TrendingUp,
} from 'lucide-react';

export type Offer = {
  id: number;
  slug: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;  // short description for tile
  code: string;
  link: string;
  icon: any;
  bannerImage?: string;
  gradient: string;
  bgColor: string;
  categoryKey: string;   //MUST MATCH categories.key from categories.ts
  tags: string[];        // for filter
  store: string;         //Must Match stores.name from stores.ts
  expiry: string;
  usage: string;
  longDescription?: string;   // long description for detail page
  terms?: string[];            
  faqs?: {                      
    question: string;
    answer: string;
  }[];
};

export const offers: Offer[] = [
    {
    id: 1,
    slug: 'redbus-bus500-offer',
    badge: 'GRABON EXCLUSIVE',
    badgeColor: 'bg-[#0064c9]',
    title: 'Get Up To Rs 500 OFF',
    subtitle: 'On Your Bus Ticket Bookings',
    description: 'Valid on all bus bookings across India. No minimum booking amount required.',

    code: 'BUS500',
    link: 'https://www.redbus.in',

    icon: Bus,
    bannerImage: '/banner/redbus-banner.png',
    gradient: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',

    categoryKey: 'travel',
    tags: [''],
    store: 'RedBus',
    expiry: '31 Jan 2026',
    usage: '12.5k used',

    longDescription: `
    Use this exclusive RedBus Bus500 coupon to save up to ₹500 instantly.
    Valid on all bus bookings across India.
    No minimum booking amount required.
    Offer valid for limited time only.
    `,

    terms: [
    'Valid only on selected routes',
    'Cannot be combined with other offers',
    'One time use per user',
  ],

  faqs: [
    {
      question: 'Can I use this coupon multiple times?',
      answer: 'No, this coupon is valid only once per user.',
    },
    {
      question: 'Is there a minimum booking value?',
      answer: 'No minimum booking amount is required.',
    },
  ],
  },

  {
    id: 2,
    slug: '',
    badge: 'Republic Day Special',
    badgeColor: 'bg-[#d32f2f]',
    title: 'Laptops - Up To 40% OFF',
    subtitle: 'Extra 5% OFF On Your Purchases',
    description: 'Amazing deals on laptops from Dell, HP, Lenovo, and more.',
    code: '',
    link: 'https://www.amazon.in',
    icon: Laptop,
    gradient: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    categoryKey: 'electronics',
    tags: [''],
    store: 'Amazon',
    expiry: '26 Jan 2026',
    usage: '8.2k used',
  },
  {
    id: 3,
    slug: '',
    badge: 'DOMAIN EXCLUSIVE',
    badgeColor: 'bg-[#f57c00]',
    title: 'Get .Com Domain 1st Year',
    subtitle: 'Only at Rs 89*',
    description: 'Start your online journey with affordable domain registration.',
    code: 'DOMAIN89',
    link: 'https://www.bigrock.in',
    icon: Globe,
    gradient: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    categoryKey: 'domain',
    tags: [''],
    store: 'BigRock',
    expiry: '15 Feb 2026',
    usage: '5.8k used',
  },
  {
    id: 4,
    slug: '',
    badge: 'SITEWIDE OFF',
    badgeColor: 'bg-[#4caf50]',
    title: 'Flat 87% OFF',
    subtitle: 'On Annual & Monthly Plans',
    description: 'Huge savings on all hosting plans. Perfect for startups and businesses.',
    code: 'HOST87',
    link: 'https://www.hostinger.in',
    icon: CreditCard,
    gradient: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    categoryKey: 'hosting',
    tags: [''],
    store: 'Hostinger',
    expiry: '28 Feb 2026',
    usage: '15.3k used',
  },
  {
    id: 5,
    slug: '',
    badge: 'TRENDING',
    badgeColor: 'bg-purple-600',
    title: 'Flat 50% OFF',
    subtitle: 'On Fashion & Accessories',
    description: 'Latest fashion trends at half the price. Limited time offer.',
    code: 'FASHION50',
    link: 'https://www.myntra.in',
    icon: Star,
    gradient: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    categoryKey: 'fashion',
    tags: [''],
    store: 'Myntra',
    expiry: '31 Jan 2026',
    usage: '22.1k used',
  },
  {
    id: 6,
    slug: '',
    badge: 'HOT DEAL',
    badgeColor: 'bg-[#d32f2f]',
    title: 'Up To 70% OFF + Extra 20%',
    subtitle: 'On All Orders Above Rs 999',
    description: 'Health and wellness products at unbeatable prices.',
    code: 'HEALTH70',
    link: 'https://www.healthkart.in',
    icon: Flame,
    gradient: 'from-red-600 to-red-700',
    bgColor: 'bg-red-50',
    categoryKey: 'medicines',
    tags: [''],
    store: 'Healthkart',
    expiry: '15 Feb 2026',
    usage: '9.7k used',
  },
  {
    id: 7,
    slug: '',
    badge: 'EXCLUSIVE',
    badgeColor: 'bg-[#0064c9]',
    title: 'Flat Rs 200 OFF',
    subtitle: 'On First Food Order',
    description: 'Delicious meals delivered to your doorstep with amazing discounts.',
    code: 'FOOD200',
    link: 'https://www.swiggy.in',
    icon: TrendingUp,
    gradient: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-50',
    categoryKey: 'food',
    tags: [''],
    store: 'Swiggy',
    expiry: '31 Jan 2026',
    usage: '18.5k used',
  },
  {
    id: 8,
    slug: '',
    badge: 'WEEKEND SPECIAL',
    badgeColor: 'bg-[#f57c00]',
    title: 'Buy 1 Get 1 Free',
    subtitle: 'On Movie Tickets',
    description: 'Enjoy the latest blockbusters with Buy 1 Get 1.',
    code: 'MOVIEBOGO',
    link: 'https://www.bookmyshow.in',
    icon: Star,
    gradient: 'from-orange-600 to-orange-700',
    bgColor: 'bg-orange-50',
    categoryKey: 'movies',
    tags: ['discount'],
    store: 'BookMyShow',
    expiry: '22 Feb 2026',
    usage: '7.3k used',
  },
  {
    id: 8,
    slug: '',
    badge: 'WEEKEND OFFER',
    badgeColor: 'bg-[#f57c00]',
    title: 'Buy 1 Get 1 Free',
    subtitle: 'On Movie Tickets',
    description: 'Enjoy the latest blockbusters with this amazing offer.',
    code: 'AMZNMOVIE',
    link: 'https://www.amazon.in',
    icon: Star,
    gradient: 'from-orange-600 to-orange-700',
    bgColor: 'bg-orange-50',
    categoryKey: 'movies',
    tags: ['bogo'],
    store: 'Amazon',
    expiry: '02 Feb 2026',
    usage: '7.3k used',
  },
];