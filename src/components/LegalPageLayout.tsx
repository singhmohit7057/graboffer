import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, FileText, Cookie, ArrowLeft } from 'lucide-react';

interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  icon: 'privacy' | 'terms' | 'cookies';
  lastUpdated: string;
  sections: LegalSection[];
}

const iconMap = {
  privacy: { Icon: Shield, color: '#0064c9', bgGradient: 'from-[#0064c9] to-[#0052a3]' },
  terms: { Icon: Scale, color: '#f57c00', bgGradient: 'from-[#f57c00] to-[#e65100]' },
  cookies: { Icon: Cookie, color: '#795548', bgGradient: 'from-[#795548] to-[#5d4037]' },
};

export default function LegalPageLayout({ title, subtitle, icon, lastUpdated, sections }: LegalPageLayoutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const { Icon, bgGradient } = iconMap[icon];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${bgGradient} py-16`}>
        <div className="section-padding">
          <div className={`max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-8 h-8 text-white" />
              <span className="text-white/80 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              {title}
            </h1>
            <p className="text-white/80">{subtitle}</p>
            <p className="text-white/60 text-sm mt-2">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      <div className="section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-40 bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contents</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-[#0064c9]'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8 pb-8 border-b border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  This document describes how GrabOn handles your data and your rights as a user. Please read it carefully to understand our practices.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={`scroll-mt-40 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${bgGradient} rounded-lg flex items-center justify-center`}>
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <div className="pl-0 md:pl-13 text-gray-600 leading-relaxed">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  By using GrabOn, you acknowledge that you have read and understood this document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
