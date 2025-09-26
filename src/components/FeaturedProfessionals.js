import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const FeaturedProfessionals = ({ categoryFilter = 'all' }) => {
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch professionals from API
  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
  };

  // Map professional roles to category filters
  const getCategoryFromRole = (role) => {
    const roleMap = {
      'Wedding Photographer': 'photography',
      'Event Planner': 'wedding',
      'Catering Chef': 'catering',
      'DJ & Sound Engineer': 'entertainment',
      'Event Decorator': 'party',
      'Videographer': 'photography',
      'Makeup Artist': 'wedding',
      'Security Coordinator': 'corporate'
    };
    return roleMap[role] || 'other';
  };

  // Filter professionals based on category
  const professionals = categoryFilter === 'all' 
    ? allProfessionals 
    : allProfessionals.filter(prof => getCategoryFromRole(prof.role) === categoryFilter);

  const { isDark } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0); // Reset to first slide when filter changes
  }, [categoryFilter]);

  useEffect(() => {
    if (professionals.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % professionals.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [professionals.length]);

  return (
    <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            {categoryFilter === 'all' ? 'Featured Professionals' : `Featured ${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Professionals`}
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            {professionals.length === 0 
              ? `No professionals found in this category` 
              : `Meet our top-rated professionals who consistently deliver exceptional results`}
          </p>
        </div>

        {professionals.length > 0 ? (
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {professionals.map((professional) => (
              <div key={professional.id} className="w-full flex-shrink-0">
                <div className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-blue-50'} rounded-3xl shadow-2xl p-8 mx-4 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    {/* Enhanced Profile Image */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                        ⭐ {professional.rating}
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ✓ Verified
                      </div>
                    </div>

                    {/* Enhanced Professional Info */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4">
                        <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                          {professional.name}
                        </h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg px-4 py-1 rounded-full shadow-lg">
                            {professional.role}
                          </span>
                          <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                            <span className="text-yellow-500 mr-1">🏆</span>
                            Top Rated
                          </div>
                        </div>
                      </div>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 text-lg leading-relaxed`}>
                        {professional.description}
                      </p>
                      
                      {/* Enhanced Stats Section */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 text-center border border-white/20`}>
                          <div className="text-2xl font-bold text-blue-600">{professional.completedEvents}+</div>
                          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Events</div>
                        </div>
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 text-center border border-white/20`}>
                          <div className="text-2xl font-bold text-green-600">{professional.experience}</div>
                          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Experience</div>
                        </div>
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 text-center border border-white/20`}>
                          <div className="text-2xl font-bold text-purple-600">{professional.rating}</div>
                          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Rating</div>
                        </div>
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 text-center border border-white/20`}>
                          <div className="text-lg font-bold text-orange-600">Fast</div>
                          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Response</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-6">
                        <div className={`flex items-center ${isDark ? 'bg-gray-700' : 'bg-blue-50'} px-4 py-2 rounded-full`}>
                          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{professional.location}</span>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                          From {professional.startingPrice}
                        </div>
                      </div>

                      {/* Enhanced Tags */}
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                        {professional.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`${isDark ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200'} px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                          >
                            ✨ {tag}
                          </span>
                        ))}
                      </div>

                      {/* Enhanced CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button 
                          onClick={() => {
                            setSelectedProfessional(professional);
                            setIsModalOpen(true);
                          }}
                          className={`${isDark ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group`}
                        >
                          <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Full Profile
                        </button>
                        <button className={`${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200'} font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {professionals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? (isDark ? 'bg-yellow-500' : 'bg-blue-600') : (isDark ? 'bg-gray-600' : 'bg-gray-300')
                }`}
              />
            ))}
          </div>
        </div>
        ) : (
          <div className="text-center py-16">
            <div className={`text-6xl mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>🔍</div>
            <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
              No professionals found
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Try selecting a different category or browse all professionals.
            </p>
          </div>
        )}

        {/* Professional Profile Modal */}
        {isModalOpen && selectedProfessional && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity bg-black/75" onClick={() => setIsModalOpen(false)}></div>
              
              <div className={`inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow-2xl rounded-2xl`}>
                {/* Header */}
                <div className={`relative ${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'} px-6 py-8 text-white`}>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center space-x-6">
                    <img
                      src={selectedProfessional.image}
                      alt={selectedProfessional.name}
                      className="w-24 h-24 rounded-full border-4 border-white/20"
                    />
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{selectedProfessional.name}</h2>
                      <p className="text-xl opacity-90 mb-2">{selectedProfessional.role}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                          <span className="font-semibold">{selectedProfessional.rating}</span>
                        </div>
                        <span className="opacity-75">•</span>
                        <span>{selectedProfessional.location}</span>
                        <span className="opacity-75">•</span>
                        <span className="font-semibold">From {selectedProfessional.startingPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="max-h-[70vh] overflow-y-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
                    {/* Left Column - Portfolio & About */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* About Section */}
                      <div>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>About</h3>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                          {selectedProfessional.about}
                        </p>
                      </div>

                      {/* Portfolio Gallery */}
                      <div>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Portfolio</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedProfessional.portfolio.map((image, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Services Offered</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedProfessional.services.map((service, index) => (
                            <div key={index} className={`${isDark ? 'bg-gray-700 text-gray-200' : 'bg-blue-50 text-blue-700'} px-4 py-2 rounded-lg text-sm font-medium`}>
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details & Contact */}
                    <div className="space-y-6">
                      {/* Quick Stats */}
                      <div className={`${isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'} rounded-xl p-6`}>
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Quick Stats</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Experience</span>
                            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProfessional.experience}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Events Completed</span>
                            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProfessional.completedEvents}+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Response Time</span>
                            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProfessional.responseTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Languages */}
                      <div className={`${isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'} rounded-xl p-6`}>
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProfessional.languages.map((language, index) => (
                            <span key={index} className={`${isDark ? 'bg-yellow-600/20 text-yellow-400' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full text-sm font-medium`}>
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Equipment/Tools */}
                      <div className={`${isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'} rounded-xl p-6`}>
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Equipment & Tools</h4>
                        <ul className="space-y-2">
                          {selectedProfessional.equipment.map((item, index) => (
                            <li key={index} className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact Actions */}
                      <div className="space-y-3">
                        <button className={`w-full ${isDark ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center`}>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Send Message
                        </button>
                        <button className={`w-full ${isDark ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center`}>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call Now
                        </button>
                        <button className={`w-full ${isDark ? 'border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'} font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center`}>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          Save to Favorites
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProfessionals;