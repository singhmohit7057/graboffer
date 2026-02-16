import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (!cookieChoice) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeInUp">
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-[#f57c00]" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Your Privacy
                </h3>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                By clicking "Accept all cookies", you agree GrabOn can store
                cookies on your device and disclose information in accordance
                with our{' '}
                <Link
                  to="/cookies-policy"
                  className="text-[#0064c9] hover:underline font-medium"
                >
                  Cookie Policy
                </Link>
                .
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 bg-[#0064c9] text-white rounded-full font-semibold hover:bg-[#0052a3] transition-colors"
                >
                  Accept all cookies
                </button>
                <button
                  onClick={handleNecessaryOnly}
                  className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Necessary cookies only
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
