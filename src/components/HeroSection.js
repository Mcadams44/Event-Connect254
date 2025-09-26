import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <section className={`relative ${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-24 lg:py-32`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 500+ Companies
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Kenya's Leading
                <span className="block text-blue-600">Event Management</span>
                Platform
              </h1>
              <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl`}>
                Connect with verified event professionals across Kenya. From corporate conferences to intimate celebrations, we deliver exceptional experiences that exceed expectations.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>500+ Verified Event Professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Guaranteed Quality & Satisfaction</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/browse" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 text-center">
                Browse Professionals
              </Link>
              <Link to="/signup" className={`${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} border border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 text-center`}>
                Join as Professional
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>Trusted by leading companies:</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className={`text-2xl font-bold ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Safaricom</div>
                <div className={`text-2xl font-bold ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>KCB</div>
                <div className={`text-2xl font-bold ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Equity</div>
                <div className={`text-2xl font-bold ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>EABL</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional Event Management"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-sm text-gray-600">Events Delivered</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border">
                <div className="text-3xl font-bold text-green-600">4.9★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 -z-10 opacity-10"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-12`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Verified Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
                <div className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Successful Events</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">47</div>
                <div className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Counties Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Our Services</h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Comprehensive event management solutions for every occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Corporate Events</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Professional conferences, seminars, product launches, and team building events with full logistical support.
              </p>
            </div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Weddings</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Dream weddings brought to life with expert planning, decoration, catering, and photography services.
              </p>
            </div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Special Events</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Birthday parties, anniversaries, graduations, and cultural celebrations with personalized touches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;