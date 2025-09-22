import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div className="absolute -right-2 -bottom-1 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xs">C</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">EventConnect</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/browse" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Browse Professionals
              </Link>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="/#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                How it Works
              </a>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {user ? (
                <>
                  <Link to="/profile" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                    Profile
                  </Link>
                  <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                    Sign In
                  </Link>
                  <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
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
              className="text-gray-700 hover:text-blue-600 p-2"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/browse" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Browse Professionals
              </Link>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="/#how-it-works" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                How it Works
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                {user ? (
                  <>
                    <Link to="/profile" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                      Profile
                    </Link>
                    <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                      Sign In
                    </Link>
                    <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-lg text-base font-medium mt-2">
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