import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`${isDark ? 'bg-gray-900/95 border-gray-700/50' : 'bg-white/95 border-blue-200/30'} backdrop-blur-lg border-b shadow-xl sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-all duration-300 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white font-bold text-xs">✨</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-bold bg-gradient-to-r ${isDark ? 'from-yellow-400 via-orange-400 to-yellow-300' : 'from-blue-600 via-purple-600 to-pink-500'} bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-pink-600 transition-all duration-300`}>
                  EventConnect
                </span>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} font-medium -mt-1`}>Kenya's #1 Event Platform</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link to="/browse" className={`group relative ${isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'} px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 ${isDark ? 'hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Browse Pros</span>
                </span>
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDark ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'} group-hover:w-full transition-all duration-300`}></div>
              </Link>
              <a href="/#services" className={`group relative ${isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'} px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 ${isDark ? 'hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Services</span>
                </span>
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDark ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'} group-hover:w-full transition-all duration-300`}></div>
              </a>
              <a href="/#how-it-works" className={`group relative ${isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'} px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 ${isDark ? 'hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}`}>
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>How it Works</span>
                </span>
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDark ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'} group-hover:w-full transition-all duration-300`}></div>
              </a>
            </div>
          </div>

          {/* Theme Toggle & Desktop Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              {user ? (
                <>
                  <div className={`flex items-center space-x-2 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600' : 'bg-gradient-to-r from-green-50 to-blue-50 border border-green-200'} px-3 py-2 rounded-full transition-colors duration-300`}>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Welcome, {user.name}</span>
                  </div>
                  <Link to="/profile" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105`}>
                    Profile
                  </Link>
                  <Link to="/dashboard" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105`}>
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`${isDark ? 'text-gray-300 hover:text-red-400 hover:bg-gradient-to-r hover:from-red-900/50 hover:to-pink-900/50' : 'text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50'} px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105`}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 border border-gray-600 hover:border-yellow-500' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-blue-300'} px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105`}>
                    Sign In
                  </Link>
                  <Link to="/signup" className={`bg-gradient-to-r ${isDark ? 'from-yellow-600 via-orange-600 to-red-600 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500' : 'from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600'} text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2`}>
                    <span>🚀</span>
                    <span>Join as Pro</span>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} p-2 rounded-lg transition-all duration-300 hover:scale-105`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDark ? 'bg-gray-900/95 border-t border-gray-700/50' : 'bg-white/95 border-t border-white/20'} backdrop-blur-md shadow-lg transition-colors duration-300`}>
              <Link to="/browse" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300`}>
                Browse Professionals
              </Link>
              <a href="/#services" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300`}>
                Services
              </a>
              <a href="/#how-it-works" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300`}>
                How it Works
              </a>
              <div className={`pt-4 pb-3 ${isDark ? 'border-t border-gray-700/50' : 'border-t border-gray-200/50'}`}>
                {user ? (
                  <>
                    <Link to="/profile" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300`}>
                      Profile
                    </Link>
                    <Link to="/dashboard" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300`}>
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className={`${isDark ? 'text-gray-300 hover:text-red-400 hover:bg-gradient-to-r hover:from-red-900/50 hover:to-pink-900/50' : 'text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50'} block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 w-full text-left`}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className={`${isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'} block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300`}>
                      Sign In
                    </Link>
                    <Link to="/signup" className={`bg-gradient-to-r ${isDark ? 'from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500' : 'from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600'} text-white block px-3 py-2 rounded-lg text-base font-medium mt-2 shadow-lg transition-all duration-300`}>
                      Join as Professional
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;