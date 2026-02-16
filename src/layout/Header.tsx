import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import { stores } from '../data/stores';
import { Search, MapPin, User, Menu, X, ChevronDown } from 'lucide-react';
import SnakeGame from '@/components/SnakeGame';

const navLinks = [
  { name: 'Categories', href: '/categories' },
  { name: 'Popular Offers', href: '/offers' },
  { name: 'About Us', href: '/about-us' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Partner With Us', href: '/partner-with-us' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const normalizedQuery = query.toLowerCase().trim();

  const categoryResults = categories.filter(
    c =>
      c.isLive &&
      c.name.toLowerCase().includes(normalizedQuery)
  );

  const storeResults = stores.filter(
    s =>
      s.isLive &&
      s.name.toLowerCase().includes(normalizedQuery)
  );

  const hasResults =
    normalizedQuery.length > 0 &&
    (categoryResults.length > 0 || storeResults.length > 0);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }; 
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowResults(false);
    setQuery('');
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href.startsWith('/')) {
      return location.pathname === href;
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-40 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white py-3'
      }`}
    >
      {/* Top Bar */}
      <div className="section-padding">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0064c9] to-[#42a5f5] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GO</span>
            </div>
            <span className="hidden sm:block text-2xl font-bold text-[#0064c9]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              GrabOffer
            </span>
          </Link>

          {/* Search Bar */}
          <div
            className={`relative flex-1 max-w-2xl transition-all duration-300 ${
              searchFocused ? 'scale-[1.02]' : ''
            }`}
          >
            <div className="relative">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                  searchFocused ? 'text-[#0064c9]' : 'text-gray-400'
                }`}
              />
              <input
                type="text"
                value={query}
                placeholder="Search brands or categories..."
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full border-2 border-transparent focus:border-[#0064c9] focus:bg-white focus:outline-none transition-all duration-300 text-sm"
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && hasResults) {
                  if (storeResults.length > 0) {
                    navigate('/store');
                  } else if (categoryResults.length > 0) {
                    navigate('/category');
                  }
                  setQuery('');
                  setShowResults(false);
                }
              }}
                onFocus={() => setSearchFocused(true)}
            />
              
            </div>
            {showResults && hasResults && (
              <div
                className="fixed top-[72px] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl
                          bg-white rounded-2xl shadow-2xl border border-gray-100 z-[9999]"
              >

                {/* Categories */}
                {categoryResults.length > 0 && (
                  <div className="p-3">
                    <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
                      Categories
                    </p>
                    <ul className="space-y-1">
                      {categoryResults.map(cat => (
                        <Link
                          key={cat.key}
                          to={cat.pagePath}
                          onClick={() => {
                            setQuery('');
                            setShowResults(false);
                          }}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0064c9]"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Divider */}
                {categoryResults.length > 0 && storeResults.length > 0 && (
                  <div className="border-t border-gray-100" />
                )}

                {/* Stores */}
                {storeResults.length > 0 && (
                  <div className="p-3">
                    <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
                      Stores
                    </p>
                    <ul className="space-y-1">
                      {storeResults.map(store => (
                        <Link
                          key={store.slug}
                          to={`/store/${store.slug}`}
                          onClick={() => {
                            setQuery('');
                            setShowResults(false);
                          }}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0064c9]"
                        >
                          {store.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">

          {/* Snake Game – desktop only */}
            <SnakeGame />

            {/* Location Selector */}
            <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors">
              <MapPin className="w-4 h-4 text-[#0064c9]" />
              <span className="text-sm font-medium">IN</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* Login Button */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#0064c9] text-white rounded-full hover:bg-[#0052a3] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <User className="w-4 h-4" />
              <span className="text-sm font-semibold">Log In / Sign Up</span>
            </button>

            {/* Mobile Menu Button (Burger Icon) */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav
        className={`hidden md:block border-t border-gray-100 ${
          showResults ? 'pointer-events-none opacity-90' : ''
        }`}
      >

        <div className="section-padding">
          <ul className="flex items-center justify-center gap-1 py-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                      isActive(link.href)
                        ? 'text-[#0064c9] bg-blue-50'
                        : 'text-gray-700 hover:text-[#0064c9] hover:bg-blue-50'
                    }`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0064c9] rounded-full group-hover:w-1/2 transition-all duration-300" />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0064c9] rounded-full hover:bg-blue-50 transition-all duration-300 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0064c9] rounded-full group-hover:w-1/2 transition-all duration-300" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="section-padding py-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(link.href)
                        ? 'text-[#0064c9] bg-blue-50'
                        : 'text-gray-700 hover:text-[#0064c9] hover:bg-blue-50'
                    }`}
                  >
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#0064c9] hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <span className="font-medium">{link.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0064c9] text-white rounded-full font-semibold">
              <User className="w-5 h-5" />
              Log In / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
