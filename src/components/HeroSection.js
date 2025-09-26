import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Weddings"
    },
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Corporate Events"
    },
    {
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Birthday Parties"
    },
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Conferences"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentBg === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={bg.url}
              alt={bg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></span>
              <span className="text-sm font-medium">🇰🇪 Kenya's #1 Event Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block mb-2">Your Perfect Event</span>
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-yellow-300 via-orange-300 to-pink-300' : 'from-blue-400 via-purple-500 to-pink-500'} animate-gradient-x`}>
                Starts Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Connect with Kenya's top-rated event professionals. From intimate gatherings to grand celebrations,
              <span className={`${isDark ? 'text-yellow-300' : 'text-yellow-400'} font-semibold`}> we make it happen.</span>
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors">Verified Experts</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Background-checked professionals with proven track records</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-green-300 transition-colors">Transparent Pricing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Compare quotes and choose what fits your budget</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">Stress-Free Planning</h3>
              <p className="text-sm text-gray-300 leading-relaxed">End-to-end support from booking to event day</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/browse" className={`group relative bg-gradient-to-r ${isDark ? 'from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500' : 'from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'} text-white font-bold text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}>
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Find Professionals
              </span>
            </Link>
            <Link to="/signup" className={`group relative bg-gradient-to-r ${isDark ? 'from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400' : 'from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600'} text-white font-bold text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}>
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Post Your Event
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:scale-110 transition-transform duration-300">1,200+</div>
                <div className="text-sm text-gray-300 font-medium">Events Completed</div>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 group-hover:scale-110 transition-transform duration-300">36+</div>
                <div className="text-sm text-gray-300 font-medium">Verified Professionals</div>
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 group-hover:scale-110 transition-transform duration-300">4.5★</div>
                <div className="text-sm text-gray-300 font-medium">Average Rating</div>
                <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-xs text-gray-300 mb-2 font-medium">Explore More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
