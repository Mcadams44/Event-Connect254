import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SubscriptionPlans from './SubscriptionPlans';

import RecentEventRequests from './RecentEventRequests';
import PopularServiceCategories from './PopularServiceCategories';

const ServicesSection = () => {
  const { isDark } = useTheme();
  const services = [
    {
      id: 1,
      title: "Wedding Planning",
      description: "Make your special day perfect with expert wedding coordination",
      professionals: 5,
      rating: 4.5,
      startingPrice: "KSh120,000",
      responseTime: "2 hours",
      topPro: "Grace Wanjiku",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "wedding"
    },
    {
      id: 2,
      title: "Corporate Events",
      description: "Professional business gatherings and corporate functions",
      professionals: 4,
      rating: 4.6,
      startingPrice: "KSh120,000",
      responseTime: "1 hour",
      topPro: "Robert Kimani",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "corporate"
    },
    {
      id: 3,
      title: "Party Planning",
      description: "Celebrate in style with expert party coordination",
      professionals: 4,
      rating: 4.4,
      startingPrice: "KSh35,000",
      responseTime: "3 hours",
      topPro: "Mary Wanjiku",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "party"
    },
    {
      id: 4,
      title: "Photography",
      description: "Capture every precious moment with professional photography",
      professionals: 6,
      rating: 4.5,
      startingPrice: "KSh65,000",
      responseTime: "30 mins",
      topPro: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "photography"
    },
    {
      id: 5,
      title: "Catering",
      description: "Delicious culinary experiences tailored to your event",
      professionals: 3,
      rating: 4.4,
      startingPrice: "KSh2,800/person",
      responseTime: "4 hours",
      topPro: "Joseph Kiprotich",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "catering"
    },
    {
      id: 6,
      title: "Entertainment",
      description: "Keep guests engaged with professional entertainment services",
      professionals: 4,
      rating: 4.5,
      startingPrice: "KSh35,000",
      responseTime: "1 hour",
      topPro: "DJ Mike Ochieng",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "entertainment"
    },
    {
      id: 7,
      title: "Venue Coordinators",
      description: "Perfect venues for every occasion and budget",
      professionals: 3,
      rating: 4.5,
      startingPrice: "KSh85,000",
      responseTime: "2 hours",
      topPro: "Andrew Mwangi",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "venue"
    },
    {
      id: 8,
      title: "Event Decoration",
      description: "Transform spaces with stunning decorations and floral arrangements",
      professionals: 4,
      rating: 4.4,
      startingPrice: "KSh45,000",
      responseTime: "1 hour",
      topPro: "Diana Wanjiku",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "decoration"
    },
    {
      id: 9,
      title: "Security Services",
      description: "Professional security personnel for safe and secure events",
      professionals: 3,
      rating: 4.6,
      startingPrice: "KSh25,000",
      responseTime: "30 mins",
      topPro: "Captain Mwangi",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      filterValue: "security"
    }
  ];

  return (
    <section id="services" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Browse Professional Services
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-6`}>
            Connect with verified professionals who bring your events to life
          </p>
          <div className="flex justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>36+ Active Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>4.5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Fast Response Times</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-white to-blue-50 border-gray-200'} border rounded-2xl shadow-xl p-6 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-800">{service.rating}</span>
                </div>
              </div>
              
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-blue-600 transition-colors`}>
                {service.title}
              </h3>
              
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
                {service.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className={`flex justify-between items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {service.professionals} professionals
                  </span>
                  <span className="font-semibold text-green-600">From {service.startingPrice}</span>
                </div>
                
                <div className={`flex justify-between items-center text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Avg response: {service.responseTime}
                  </span>
                  <span className="text-blue-600 font-medium">Top: {service.topPro}</span>
                </div>
              </div>
              
              <Link to={`/browse?category=${service.filterValue}`} className={`block w-full ${isDark ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'} font-bold py-3 px-4 rounded-xl transition-all duration-300 text-center transform group-hover:scale-105 shadow-lg`}>
                Browse {service.title} Pros
              </Link>
            </div>
          ))}

          {/* View All Services Card */}
          <Link to="/browse" className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600 hover:border-yellow-500' : 'bg-gradient-to-br from-white to-purple-50 border-gray-300 hover:border-purple-400'} rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer border-2 border-dashed transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
            <div className={`w-20 h-20 ${isDark ? 'bg-gradient-to-r from-yellow-600/20 to-orange-600/20 group-hover:from-yellow-600/30 group-hover:to-orange-600/30' : 'bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200'} rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
              <svg className={`w-10 h-10 ${isDark ? 'text-yellow-400' : 'text-purple-600'} group-hover:rotate-90 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white group-hover:text-yellow-400' : 'text-gray-900 group-hover:text-purple-600'} mb-2 transition-colors`}>View All Professionals</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Discover 36+ verified professionals across all categories</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-blue-600 font-medium">
              <span>Browse All</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <PopularServiceCategories />
      <RecentEventRequests />
    </section>
  );
};

export default ServicesSection;

