import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const CTASection = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`${isDark ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-r from-blue-600 to-blue-800'} text-white py-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-blue-100'} mb-8 max-w-2xl mx-auto`}>
            Join thousands of satisfied clients who found their ideal event professionals through EventConnect. 
            Start planning your dream event today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup" className={`text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center ${isDark ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-white text-blue-600 hover:bg-gray-100'}`}>
              Get Started Now
            </Link>
            <Link to="/browse" className={`text-lg px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 text-center ${isDark ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' : 'border-white text-white hover:bg-white hover:text-blue-600'}`}>
              Browse Professionals
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className={`w-16 h-16 ${isDark ? 'bg-yellow-500/20' : 'bg-white/10'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-blue-100'}`}>All professionals are background-checked and verified for quality assurance.</p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 ${isDark ? 'bg-yellow-500/20' : 'bg-white/10'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-blue-100'}`}>Safe and secure payment processing with full buyer protection.</p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 ${isDark ? 'bg-yellow-500/20' : 'bg-white/10'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-blue-100'}`}>Round-the-clock customer support to help you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;