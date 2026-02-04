import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HomePage from '@/app/pages/HomePage';
import SellersPage from '@/app/pages/SellersPage';
import BuyersPage from '@/app/pages/BuyersPage';
import AboutPage from '@/app/pages/AboutPage';
import WhyPage from '@/app/pages/WhyPage';
import PricesPage from '@/app/pages/PricesPage';
import ContactsPage from '@/app/pages/ContactsPage';
import GettingStartedPage from '@/app/pages/GettingStartedPage';
import FAQPage from '@/app/pages/FAQPage';
import RulesPage from '@/app/pages/RulesPage';
import PrivacyPage from '@/app/pages/PrivacyPage';
import TermsPage from '@/app/pages/TermsPage';
import OfferPage from '@/app/pages/OfferPage';
import ComplaintsPage from '@/app/pages/ComplaintsPage';
import CategoriesPage from '@/app/pages/CategoriesPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow pt-18">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sellers" element={<SellersPage />} />
            <Route path="/buyers" element={<BuyersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/why" element={<WhyPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/getting-started" element={<GettingStartedPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/offer" element={<OfferPage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
