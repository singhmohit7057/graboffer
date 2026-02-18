import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

import HomePage from './pages/HomePage';
import PopularOffersPage from './pages/PopularOffersPage';
import OfferDetailPage from './pages/offer/OfferDetailPage';
import PopularCategoriesPage from './pages/PopularCategoriesPage';

import AboutUs from './pages/base/AboutUs';
import PartnerWithUs from './pages/base/PartnerWithUs';
import FAQ from './pages/base/FAQ';
import ContactUs from './pages/base/ContactUs';
import HowItWorks from './pages/base/HowItWorks';
import Feedback from './pages/base/Feedback';
import Career from './pages/base/Career';

import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import CookiesPolicy from './pages/legal/CookiesPolicy';

import Sitemap from './pages/system/Sitemap';
import NotFound from './pages/system/NotFound';
import BlockedPage from './pages/system/BlockedPage';
import ComingSoon from './pages/system/ComingSoon';

import CreditCardDetail from './pages/CreditCardDetail';
import CreditCardsList from './pages/CreditCardsList';

import StoreIndexPage from './pages/store/StoreIndexPage';
import StorePage from './pages/store/StorePage';

import CategoryIndexPage from './pages/category/CategoryIndexPage';
import CategoryPage from './pages/category/CategoryPage';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Routes>

          {/* 🚫 NO HEADER / FOOTER */}
          <Route path="/blocked" element={<BlockedPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />

          {/* ✅ WITH HEADER / FOOTER */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/credit-cards" element={<CreditCardsList />} />
            <Route path="/credit-cards/:slug" element={<CreditCardDetail />} />

            <Route path="/offers" element={<PopularOffersPage />} />
            <Route path="/offer/:slug" element={<OfferDetailPage />} />
            <Route path="/categories" element={<PopularCategoriesPage />} />

            <Route path="/category" element={<CategoryIndexPage />} />
            <Route path="/store" element={<StoreIndexPage />} />

            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/store/:slug" element={<StorePage />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
