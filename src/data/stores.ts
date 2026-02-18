export type Store = {
  id: number;
  name: string;
  slug: string;
  logo: string;       // image path
  color: string;
  pagePath: string;  // clickable link
  isLive: boolean;
};

export const stores: Store[] = [
  {
    id: 1,
    name: 'Amazon',
    slug: 'amazon',
    logo: '/logo/amazon.png',
    color: '#FF9900',
    pagePath: '/store/amazon',
    isLive: true,
  },
  {
    id: 2,
    name: 'Myntra',
    slug:'myntra',
    logo: '/logo/myntra.png',
    color: '#FF3F6C',
    pagePath: '/store/myntra',
    isLive: true,
  },
  {
    id: 3,
    name: 'Flipkart',
    slug: 'flipkart',
    logo: '/logo/flipkart.png',
    color: '#2874F0',
    pagePath: '/store/flipkart',
    isLive: false,
  },
  {
    id: 4,
    name: 'Swiggy',
    slug: 'swiggy',
    logo: '/logo/swiggy.png',
    color: '#FC8019',
    pagePath: '/store/swiggy',
    isLive: false,
  },
  {
    id: 5,
    name: 'Zomato',
    slug: 'zomato',
    logo: '/logo/zomato.png',
    color: '#CB202D',
    pagePath: '/store/zomato',
    isLive: false,
  },
  {
    id: 6,
    name: 'Hostinger',
    slug: 'hostinger',
    logo: '/logo/hostinger.png',
    color: '#FF9900',
    pagePath: '/store/hostinger',
    isLive: false,
  },
  {
    id: 7,
    name: 'BigRock',
    slug: 'bigrock',
    logo: '/logo/bigrock.png',
    color: '#FF9900',
    pagePath: '/store/bigrock',
    isLive: false,
  },
  {
    id: 8,
    name: 'BookMyShow',
    slug: 'bookmyshow',
    logo: '/logo/bookmyshow.png',
    color: '#FF9900',
    pagePath: '/store/bookmyshow',
    isLive: true,
  },
  {
    id: 9,
    name: 'Ajio',
    slug: 'ajio',
    logo: '/logo/ajio.png',
    color: '#FF9900',
    pagePath: '/store/ajio',
    isLive: true,
  },
  {
    id: 10,
    name: '12Go',
    slug: '12go',
    logo: '/logo/12go.png',
    color: '#FF9900',
    pagePath: '/store/12go',
    isLive: true,
  },
  {
    id: 11,
    name: 'RedBus',
    slug: 'redbus',
    logo: '/logo/redbus.png',
    color: '#FF9900',
    pagePath: '/store/12go',
    isLive: true,
  },
];
