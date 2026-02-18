import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { MessageSquare } from 'lucide-react';
import FeedbackForm from '@/components/forms/FeedbackForm';

export default function Feedback() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <SEO
      title="Feedback – GrabOffer"
      description="Share your feedback and help us improve GrabOffer."
    />

    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#e91e63] to-[#c2185b] py-16">
        <div className="section-padding">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              We Value Your Opinion
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Share Your Feedback
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Help us improve GrabOn by sharing your thoughts, suggestions, or reporting issues.
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="section-padding py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
           <FeedbackForm />
        </div>
      </div>

      {/* Other Ways Section */}
      <div className="section-padding pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Other Ways to Reach Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/contact-us" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-7 h-7 text-[#0064c9]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-sm text-gray-500">Get help with your queries</p>
            </Link>
            
            <Link to="/faq" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-7 h-7 text-[#9c27b0]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">FAQs</h3>
              <p className="text-sm text-gray-500">Find answers to common questions</p>
            </Link>
            
            <a href="mailto:support@grabon.in" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-7 h-7 text-[#4caf50]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-500">support@grabon.in</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
