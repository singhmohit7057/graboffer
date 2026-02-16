import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { MessageSquare, Star, Send, CheckCircle, ThumbsUp, Lightbulb, Bug, ArrowLeft } from 'lucide-react';

const feedbackTypes = [
  { id: 'suggestion', label: 'Suggestion', icon: Lightbulb, color: '#f57c00' },
  { id: 'compliment', label: 'Compliment', icon: ThumbsUp, color: '#4caf50' },
  { id: 'complaint', label: 'Complaint', icon: MessageSquare, color: '#d32f2f' },
  { id: 'bug', label: 'Bug Report', icon: Bug, color: '#9c27b0' },
];

const ratingLabels = [
  'Very Dissatisfied',
  'Dissatisfied',
  'Neutral',
  'Satisfied',
  'Very Satisfied',
];

export default function Feedback() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    rating: 0,
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        type: '',
        rating: 0,
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your feedback has been received. We appreciate your input!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Feedback Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What type of feedback do you have? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {feedbackTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: type.id })}
                          className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                            formData.type === type.id
                              ? 'border-[#e91e63] bg-pink-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Icon 
                            className="w-6 h-6" 
                            style={{ color: formData.type === type.id ? type.color : '#9ca3af' }}
                          />
                          <span className={`text-sm font-medium ${formData.type === type.id ? 'text-gray-900' : 'text-gray-500'}`}>
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you rate your experience with GrabOn?
                  </label>
                  <div className="flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || formData.rating)
                              ? 'fill-[#f57c00] text-[#f57c00]'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {formData.rating > 0 && (
                    <p className="text-center text-sm text-gray-500 mt-2">
                      {ratingLabels[formData.rating - 1]}
                    </p>
                  )}
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:bg-white focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:bg-white focus:outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:bg-white focus:outline-none transition-all"
                    placeholder="Brief description of your feedback"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:bg-white focus:outline-none transition-all resize-none"
                    placeholder="Please share your detailed feedback here..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#e91e63] text-white rounded-xl font-semibold hover:bg-[#c2185b] transition-colors"
                >
                  Submit Feedback
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
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
