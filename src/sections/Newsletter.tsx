import { useState, useEffect, useRef } from 'react';
import { Mail, Send, Check, Users } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section ref={sectionRef} className="py-12 bg-gradient-to-br from-[#0064c9] to-[#0052a3]">
      <div className="section-padding">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Get The Latest & Best Coupon/Offer Alerts
          </h2>

          {/* Stats */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="w-5 h-5 text-white/80" />
            <p className="text-white/80 text-sm md:text-base">
              <span className="font-bold text-white">35,00,000+</span> Subscriptions Across India! & Counting!
            </p>
          </div>

          <p className="text-white/70 mb-8">
            Subscribe to have new coupon lists delivered directly to your inbox
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                disabled={isSubmitted}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className={`px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-[#f57c00] text-white hover:bg-[#e65100] hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                <>
                  SUBSCRIBE
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Trust Text */}
          <p className="mt-6 text-white/60 text-sm">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
