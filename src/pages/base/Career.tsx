import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Briefcase, Users, Heart, Zap, Globe, Coffee, ArrowRight, MapPin, Clock, DollarSign, CheckCircle, ArrowLeft } from 'lucide-react';

const stats = [
  { value: '10K+', label: 'Users Served' },
  { value: '500+', label: 'Partner Brands' },
  { value: '1+', label: 'Years Strong' },
  { value: '5+', label: 'Team Members' },
];

const benefits = [
  { icon: DollarSign, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
  { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical coverage for you and family' },
  { icon: Coffee, title: 'Flexible Hours', description: 'Work-life balance with flexible scheduling' },
  { icon: Zap, title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
  { icon: Users, title: 'Great Culture', description: 'Collaborative and inclusive work environment' },
  { icon: Globe, title: 'Remote Friendly', description: 'Work from anywhere options available' },
];

const openings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Kolkata / Remote',
    type: 'Full-time',
    experience: '3-5 years',
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'Kolkata',
    type: 'Full-time',
    experience: '4-6 years',
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Kolkata / Hyderabad / Bangalore',
    type: 'Full-time',
    experience: '2-4 years',
  },
  {
    id: 4,
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Kolkata',
    type: 'Full-time',
    experience: '1-3 years',
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-4 years',
  },
  {
    id: 6,
    title: 'Content Writer',
    department: 'Marketing',
    location: 'Kolkata / Remote',
    type: 'Full-time',
    experience: '1-2 years',
  },
];

const values = [
  {
    title: 'Customer First',
    description: 'Everything we do is focused on delivering value to our users.',
  },
  {
    title: 'Innovation',
    description: 'We encourage creative thinking and embrace new ideas.',
  },
  {
    title: 'Integrity',
    description: 'We believe in transparency and doing the right thing.',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we build.',
  },
];

export default function Career() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const departments = ['All', ...new Set(openings.map(job => job.department))];
  
  const filteredJobs = selectedDepartment === 'All' 
    ? openings 
    : openings.filter(job => job.department === selectedDepartment);

  return (
    <>
    <SEO
      title="Careers at GrabOffer"
      description="Explore career opportunities and join the GrabOffer team."
    />

    <div className="pt-[140px] md:pt-[160px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0064c9] via-[#1976d2] to-[#42a5f5] py-20">
        <div className="section-padding">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              We&apos;re Hiring!
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Join the GrabOn Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Be part of India&apos;s leading coupons marketplace. Help millions save money while building your career.
            </p>
            <a 
              href="#openings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0064c9] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              View Openings
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-padding -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-[#0064c9]">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="section-padding py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Why Work at GrabOn?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer more than just a job. Join a team that values growth, innovation, and work-life balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0064c9]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Our Values
            </h2>
            <p className="text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 text-center shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0064c9] to-[#42a5f5] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div id="openings" className="section-padding py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Current Openings
          </h2>
          <p className="text-gray-600">
            Find your perfect role and join our growing team
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDepartment === dept
                  ? 'bg-[#0064c9] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-blue-100 text-[#0064c9] rounded text-xs font-medium">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{job.experience}</span>
                  <button className="px-6 py-2.5 bg-[#0064c9] text-white rounded-full font-semibold hover:bg-[#0052a3] transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No openings in this department currently.</p>
          </div>
        )}
      </div>

      {/* Life at GrabOn */}
      <div className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Life at GrabOn
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At GrabOn, we believe that great work happens when people are happy, healthy, and inspired. 
                Our office is designed to foster creativity and collaboration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4caf50]" />
                  <span className="text-gray-700">Modern workspace with ergonomic furniture</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4caf50]" />
                  <span className="text-gray-700">Regular team outings and celebrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4caf50]" />
                  <span className="text-gray-700">Free snacks and beverages</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4caf50]" />
                  <span className="text-gray-700">Game room for breaks and fun</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#0064c9] to-[#1976d2] rounded-2xl p-6 text-white">
                <Users className="w-8 h-8 mb-4" />
                <p className="text-3xl font-bold">5+</p>
                <p className="text-white/80">Team Members</p>
              </div>
              <div className="bg-gradient-to-br from-[#f57c00] to-[#e65100] rounded-2xl p-6 text-white">
                <Coffee className="w-8 h-8 mb-4" />
                <p className="text-3xl font-bold">∞</p>
                <p className="text-white/80">Coffee Consumed</p>
              </div>
              <div className="bg-gradient-to-br from-[#4caf50] to-[#388e3c] rounded-2xl p-6 text-white">
                <Zap className="w-8 h-8 mb-4" />
                <p className="text-3xl font-bold">100%</p>
                <p className="text-white/80">Passion</p>
              </div>
              <div className="bg-gradient-to-br from-[#9c27b0] to-[#7b1fa2] rounded-2xl p-6 text-white">
                <Heart className="w-8 h-8 mb-4" />
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-white/80">Happy Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding pb-16">
        <div className="bg-gradient-to-r from-[#0064c9] to-[#1976d2] rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <a 
            href="mailto:careers@grabon.in"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0064c9] rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Send Your Resume
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
