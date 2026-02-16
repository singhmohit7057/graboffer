import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, ArrowLeft } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For general inquiries and support',
    value: 'support@grabon.in',
    href: 'mailto:support@grabon.in',
    color: '#0064c9',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Sat, 9 AM - 6 PM IST',
    value: '+91-7997443334',
    href: 'tel:+917997443334',
    color: '#4caf50',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Available on our website',
    value: 'Start Chat',
    href: '#chat',
    color: '#f57c00',
  },
];

const officeLocations = [
  {
    city: 'Hyderabad (Headquarters)',
    address: 'Inspirelabs Solutions Ltd,\nOneWest Building, Gachibowli,\nHyderabad, TG 500032',
    phone: '+91-7997443334',
  },
  
];

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <SEO
      title="Contact GrabOffer"
      description="Get in touch with the GrabOffer team for support, partnerships, or feedback."
    />

    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0064c9] to-[#0052a3] py-16">
        <div className="section-padding">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have a question or need assistance? We&apos;re here to help you save more!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="section-padding -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${method.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: method.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                <span className="font-semibold" style={{ color: method.color }}>{method.value}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Send us a Message
            </h2>
            
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#0064c9] focus:bg-white focus:outline-none transition-all"
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
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#0064c9] focus:bg-white focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#0064c9] focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#0064c9] focus:bg-white focus:outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0064c9] text-white rounded-xl font-semibold hover:bg-[#0052a3] transition-colors"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Our Offices
            </h2>
            
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-sm p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0064c9] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 whitespace-pre-line">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#0064c9]" />
                      <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-[#0064c9]">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-[#f57c00] to-[#e65100] rounded-2xl p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white">Working Hours</h3>
              </div>
              <div className="space-y-2 text-white/90">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="section-padding pb-16">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/faq" className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-[#0064c9] transition-colors">
              FAQs
            </Link>
            <Link to="/partner-with-us" className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-[#0064c9] transition-colors">
              Partner With Us
            </Link>
            <Link to="/about-us" className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-[#0064c9] transition-colors">
              About Us
            </Link>
            <Link to="/sitemap" className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-[#0064c9] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
