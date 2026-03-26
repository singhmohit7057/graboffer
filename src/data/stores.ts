export type Store = {
  id: number;
  name: string;
  description: string;
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
    description:
      'Amazon is India’s leading online marketplace offering electronics, fashion, home essentials, groceries, and more with fast delivery and great deals.',
    slug: 'amazon',
    logo: '/logo/amazon.png',
    color: '#FF9900',
    pagePath: '/store/amazon',
    isLive: true,
  },
  {
    id: 2,
    name: 'Myntra',
    description: '',
    slug:'myntra',
    logo: '/logo/myntra.png',
    color: '#FF3F6C',
    pagePath: '/store/myntra',
    isLive: true,
  },
  {
    id: 3,
    name: 'Flipkart',
    description: '',
    slug: 'flipkart',
    logo: '/logo/flipkart.png',
    color: '#2874F0',
    pagePath: '/store/flipkart',
    isLive: false,
  },
  {
    id: 4,
    name: 'Swiggy',
    description: '',
    slug: 'swiggy',
    logo: '/logo/swiggy.png',
    color: '#FC8019',
    pagePath: '/store/swiggy',
    isLive: false,
  },
  {
    id: 5,
    name: 'Zomato',
    description: '',
    slug: 'zomato',
    logo: '/logo/zomato.png',
    color: '#CB202D',
    pagePath: '/store/zomato',
    isLive: false,
  },
  {
    id: 6,
    name: 'Hostinger',
    description: '',
    slug: 'hostinger',
    logo: '/logo/hostinger.png',
    color: '#FF9900',
    pagePath: '/store/hostinger',
    isLive: true,
  },
  {
    id: 7,
    name: 'BookMyShow',
    description: '',
    slug: 'bookmyshow',
    logo: '/logo/bookmyshow.png',
    color: '#FF9900',
    pagePath: '/store/bookmyshow',
    isLive: true,
  },
  {
    id: 8,
    name: 'Ajio',
    description: '',
    slug: 'ajio',
    logo: '/logo/ajio.png',
    color: '#FF9900',
    pagePath: '/store/ajio',
    isLive: true,
  },
  {
    id: 9,
    name: '12Go',
    description: 'Enjoy budget-friendly travel across Asia with exclusive discount codes and promos from 12Go Asia on CashKaro. Discover affordable transportation options for top destinations like Myanmar, Thailand, Vietnam, and more. Travel more while spending less.',
    slug: '12go',
    logo: '/logo/12go.png',
    color: '#FF9900',
    pagePath: '/store/12go',
    isLive: true,
  },
  {
    id: 10,
    name: 'RedBus',
    description: '',
    slug: 'redbus',
    logo: '/logo/redbus.png',
    color: '#FF9900',
    pagePath: '/store/redbus',
    isLive: true,
  },
  {
    id: 11,
    name: 'Dreamhost',
    description: 'Choice of Cloud Providers (DigitalOcean, Vultr, Linode, AWS, GCE) with 1-Click Scaling. AI-Powered Troubleshooting (AI Copilot) with 1-Click Automated Resolutions. Autoscaling for Thousands of Concurrent Users (Cloudways Autonomous).',
    slug: 'dreamhost',
    logo: '/logo/dreamhost.png',
    color: '#FF9900',
    pagePath: '/store/dreamhost',
    isLive: true,
  },
];
