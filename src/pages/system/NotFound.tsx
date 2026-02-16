import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Home } from 'lucide-react';
import SEO from '../../components/SEO';

export default function NotFound() {
  return (
    <>
    <SEO
      title="Page Not Found – GrabOffer"
      noIndex
    />

    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full text-center bg-white p-10 rounded-2xl shadow-xl">
        
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-[#0064c9] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0064c9] text-white rounded-full font-semibold hover:bg-[#0052a3] transition"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          <Link
            to="/offers"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            <Search className="w-5 h-5" />
            Browse Deals
          </Link>
        </div>

        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </button>
      </div>
    </div>
    </>
  );
}
