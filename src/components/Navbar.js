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
    <nav className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b shadow-sm sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  EventConnect
                </span>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} font-medium -mt-1`}>Professional Event Services</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/browse" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
                Browse Professionals
              </Link>
              <a href="/#services" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
                Services
              </a>
              <a href="/#how-it-works" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
                How it Works
              </a>
              <a href="/#about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
                About
              </a>
              <a href="/#contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
                Contact
              </a>
            </div>
          </div>

          {/* Theme Toggle & Desktop Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
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
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Welcome, {user.name}</span>
                  <Link to="/profile" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
                    Profile
                  </Link>
                  <Link to="/dashboard" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 text-sm font-medium transition-colors duration-200`}>
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`${isDark ? 'text-gray-300 hover:text-red-400' : 'text-gray-600 hover:text-red-600'} px-3 py-2 text-sm font-medium transition-colors duration-200`}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className={`${isDark ? 'text-gray-300 hover:text-white border-gray-600 hover:border-gray-500' : 'text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400'} px-4 py-2 text-sm font-medium border rounded-lg transition-colors duration-200`}>
                    Sign In
                  </Link>
                  <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Join as Professional
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} p-2 rounded-lg transition-colors duration-200`}
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
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
              <Link to="/browse" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}>
                Browse Professionals
              </Link>
              <a href="/#services" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}>
                Services
              </a>
              <a href="/#how-it-works" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}>
                How it Works
              </a>
              <a href="/#about" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}>
                About
              </a>
              <a href="/#contact" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}>
                Contact
              </a>
              <div className={`pt-4 pb-3 ${isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'}`}>
                {user ? (
                  <>
                    <Link to="/profile" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}>
                      Profile
                    </Link>
                    <Link to="/dashboard" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}>
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className={`${isDark ? 'text-gray-300 hover:text-red-400 hover:bg-gray-800' : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 w-full text-left`}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`}>
                      Sign In
                    </Link>
                    <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-lg text-base font-medium mt-2 transition-colors duration-200">
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