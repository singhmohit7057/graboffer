import SEO from '../components/SEO';
import HeroCarousel from '../sections/HeroCarousel';
import PopularOffers from '../sections/PopularOffers';
import TrendingOffers from '../sections/TrendingOffers';
import PopularCategories from '../sections/PopularCategories';
import PopularStores from '../sections/PopularStores';
import Exclusive from '../sections/Exclusive';
import FeaturedStore from '../sections/FeaturedStore';
import Newsletter from '../sections/Newsletter';
import FeaturedCreditCard from '../sections/FeaturedCreditCard';

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
      <FeaturedCreditCard />
      <FeaturedStore />
      <Newsletter />
    </>
  );
}
