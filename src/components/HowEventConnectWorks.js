import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HowEventConnectWorks = () => {
  const { isDark } = useTheme();
  const steps = [
    {
      number: "01",
      title: "Post Your Event",
      description: "Tell us about your event - date, location, budget, and what services you need.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Browse & Connect",
      description: "Review verified professional profiles, portfolios, and ratings to find your perfect match.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Book & Celebrate",
      description: "Secure your booking with our trusted payment system and enjoy your perfect event.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            How EventConnect Works
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Three simple steps to find and book the perfect event professional
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className={`hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r ${isDark ? 'from-yellow-600 via-yellow-500 to-yellow-600' : 'from-blue-200 via-blue-300 to-blue-200'} transform -translate-y-1/2 z-0`}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${isDark ? 'from-yellow-500 to-orange-500' : 'from-blue-500 to-blue-600'} rounded-full flex items-center justify-center text-white mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    {step.icon}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 ${isDark ? 'bg-gray-700 text-yellow-400' : 'bg-blue-100 text-blue-600'} rounded-full flex items-center justify-center font-bold text-sm`}>
                    {step.number}
                  </div>
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white group-hover:text-yellow-400' : 'text-gray-900 group-hover:text-blue-600'} mb-3 transition-colors`}>
                  {step.title}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/signup" className="btn-primary inline-flex items-center space-x-2">
            <span>Get Started Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowEventConnectWorks;
