import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { categories } from '../data/categories';

export default function PopularCategories() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="categories" className="py-12 bg-gray-50">
      <div className="section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className={`text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Popular Categories
          </h2>

          <Link
            to="/category"
            className={`flex items-center gap-2 text-[#0064c9] font-semibold transition-all duration-300 hover:gap-3 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            View All Category
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-3">
          {categories.map((category, index) => {
  const Icon = category.icon;

  if (category.isLive) {
    return (
      <Link
        key={category.id}
        to={category.pagePath ?? "/"}
        className={`group flex flex-col items-center p-4 bg-white rounded-xl border border-transparent
          transition-all duration-300
          hover:shadow-lg hover:border-gray-100 hover:-translate-y-1 cursor-pointer
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-2
          transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${category.color}15` }}
        >
          <Icon
            className="w-6 h-6"
            style={{ color: category.color }}
          />
        </div>

        <span className="text-xs font-medium text-gray-700 text-center line-clamp-1 group-hover:text-[#0064c9] transition-colors">
          {category.name}
        </span>
      </Link>
    );
  }

  return (
    <div
      key={category.id}
      className={`group flex flex-col items-center p-4 bg-white rounded-xl border border-transparent
        transition-all duration-300
        cursor-not-allowed
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
        style={{ backgroundColor: `${category.color}15` }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: category.color }}
        />
      </div>

      <span className="text-xs font-medium text-gray-700 text-center line-clamp-1">
        {category.name}
      </span>
    </div>
  );
})}
        </div>
      </div>
    </section>
  );
}


