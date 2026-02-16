import SEO from '../components/SEO';
import HeroCarousel from '../sections/HeroCarousel';
import PopularOffers from '../sections/PopularOffers';
import PopularStores from '../sections/PopularStores';
import FeaturedStore from '../sections/FeaturedStore';
import TopCoupons from '../sections/TopCoupons';
import DealsOfTheDay from '@/sections/DealsOfTheDay';
import TrendingOffers from '../sections/TrendingOffers';
import Exclusive from '../sections/Exclusive';
import Newsletter from '../sections/Newsletter';
import PopularCategories from '../sections/PopularCategories';

import FeaturedCreditCard from '../sections/FeaturedCreditCard';
import BestCreditCards from '@/sections/BestFreeCards';
import BestFuelCards from '@/sections/BestFuelCards';

export default function HomePage() {
  return (
    <>
      <SEO
        title="GrabOffer – Best Coupons, Deals & Credit Card Offers in India"
        description="GrabOffer helps you save money with verified coupons, deals, and credit card offers from top brands in India."
      />
      <HeroCarousel />
      <PopularOffers />
      <TrendingOffers />
      <PopularCategories />
      <PopularStores />
      <Exclusive />
      <TopCoupons />
      <DealsOfTheDay />
      <FeaturedStore />
      <Newsletter />
      <FeaturedCreditCard />
      <BestCreditCards />
      <BestFuelCards />
    </>
  );
}
