import {Bus, Laptop, Globe, CreditCard, Server, Star, Flame, TrendingUp,
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
  slug: 'dreamhost-hosting70-offer',
  badge: 'HOSTING EXCLUSIVE',
  badgeColor: 'bg-[#ff6600]',
  title: 'Get Up To 70% OFF',
  subtitle: 'On Web Hosting Plans',
  description: 'Save big on Shared, WordPress & VPS hosting plans. Limited-time offer for new customers.',

  code: 'DH70SAVE',
  link: 'https://www.dreamhost.com',

  icon: Server,
  bannerImage: '/banner/dreamhost-banner.jpg',
  gradient: 'from-orange-500 to-pink-500',
  bgColor: 'bg-orange-50',

  categoryKey: 'hosting',
  tags: [],
  store: 'Dreamhost',
  expiry: '31 Mar 2026',
  usage: '9.8k used',

  longDescription: `
  Use this exclusive DreamHost coupon to get up to 70% OFF on web hosting plans.
  Applicable on Shared Hosting, WordPress Hosting, and VPS plans.
  Perfect for bloggers, startups, and businesses launching new websites.
  Offer valid for new users only for a limited time.
  `,

  terms: [
    'Valid for new customers only',
    'Discount applies to first billing cycle',
    'Cannot be combined with other promotional offers',
    'Applicable on selected hosting plans only',
  ],

  faqs: [
    {
      question: 'Is this offer valid on domain registration?',
      answer: 'The discount primarily applies to hosting plans. Free domain may be included in selected yearly plans.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your hosting plan anytime from your DreamHost dashboard.',
    },
  ],
},

  {
    id: 3,
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
    id: 4,
    slug: 'hostinger-hosting-offer',
    badge: 'HOSTING OFFER',
    badgeColor: 'bg-[#4caf50]',
    title: 'Flat 87% OFF',
    subtitle: 'On Annual & Monthly Plans',
    description: 'Huge savings on all hosting plans. Perfect for startups and businesses.',

    code: 'GKWTHEMADRUD',
    link: 'https://hostinger.in?REFERRALCODE=GKWTHEMADRUD',

    icon: Server,
    bannerImage: '/banner/hostinger-banner.png',
    gradient: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',

    categoryKey: 'hosting',
    tags: [''],
    store: 'Hostinger',
    expiry: '28 Sep 2026',
    usage: '15.3k used',

    longDescription: `
  Use this exclusive Hostinger referral link to get up to 70% OFF on premium web hosting plans.
  The discount is applicable on Shared Hosting, WordPress Hosting, Cloud Hosting, and VPS plans.
  Hostinger offers high-speed LiteSpeed servers, free SSL, free domain on eligible yearly plans,
  and an easy-to-use control panel — making it ideal for bloggers, startups, developers, and growing businesses.
  This offer is valid for new users only and applies to the first billing cycle.
  Launch your website at a fraction of the original cost with this limited-time deal.
  `,

  terms: [
    'Valid for new customers only',
    'Discount applies to first billing cycle',
    'Cannot be combined with other promotional offers',
    'Applicable on selected hosting plans only',
    'Free domain available only on eligible annual plans'
  ],

  faqs: [
    {
      question: 'Is this offer valid on domain registration?',
      answer: 'The discount primarily applies to hosting plans. A free domain is included with selected yearly plans only.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your hosting plan anytime directly from your Hostinger dashboard.',
    },
    {
      question: 'Does this work for WordPress hosting?',
      answer: 'Yes, the discount applies to WordPress hosting plans as well.',
    },
    {
      question: 'Is this referral link safe to use?',
      answer: 'Yes, this is an official Hostinger referral link and provides the same pricing benefits as public promotions.',
    },
  ],
  },
  {
    id: 5,
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
    id: 6,
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