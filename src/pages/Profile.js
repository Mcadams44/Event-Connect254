import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { isDark } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
    services: user?.services || [],
    portfolio: user?.portfolio || []
  });

  const handleSave = () => {
    updateProfile({...formData, profileImage});
    setIsEditing(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addPortfolioItem = () => {
    const newItem = {
      id: Date.now(),
      title: '',
      description: '',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      category: ''
    };
    setFormData({
      ...formData,
      portfolio: [...formData.portfolio, newItem]
    });
  };

  const updatePortfolioItem = (id, field, value) => {
    setFormData({
      ...formData,
      portfolio: formData.portfolio.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  const removePortfolioItem = (id) => {
    setFormData({
      ...formData,
      portfolio: formData.portfolio.filter(item => item.id !== id)
    });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'} py-8 transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <Link to="/dashboard" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Dashboard</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Profile</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl shadow-2xl overflow-hidden border relative transition-colors duration-300`}>
          {/* Enhanced Header with Profile Picture */}
          <div className={`relative ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800' : 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800'} px-8 py-16 text-white overflow-hidden transition-colors duration-300`}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse delay-500"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-8">
                {/* Enhanced Profile Picture */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center text-5xl font-bold backdrop-blur-sm border-4 border-white/30 shadow-2xl overflow-hidden">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      user?.name?.charAt(0)?.toUpperCase() || 'U'
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <label className="absolute -top-2 -right-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </label>
                </div>
                
                <div className="mb-6">
                  <h1 className="text-4xl font-bold mb-3">{user?.name}</h1>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold capitalize border border-white/30">
                      {user?.userType}
                    </span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-sm font-bold border border-yellow-300/30">
                      ⭐ Premium Member
                    </span>
                  </div>
                  <p className="text-white/80 text-lg">Professional Event Specialist</p>
                </div>
                
                {/* Profile Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-white/70 text-sm">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">156</div>
                    <div className="text-white/70 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-white/70 text-sm">Success Rate</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-3 rounded-xl transition-all duration-300 font-semibold border border-white/30 hover:border-white/50 transform hover:scale-105"
                  >
                    {isEditing ? (
                      <>
                        <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit Profile
                      </>
                    )}
                  </button>
                  <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300 font-semibold transform hover:scale-105">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Form */}
          <div className="p-8">
            {/* Profile Completion Progress */}
            <div className={`mb-8 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100'} rounded-2xl p-6 border transition-colors duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Profile Completion</h3>
                <span className={`text-2xl font-bold ${isDark ? 'text-yellow-400' : 'text-blue-600'}`}>75%</span>
              </div>
              <div className={`w-full ${isDark ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-3 mb-4`}>
                <div className={`${isDark ? 'bg-gradient-to-r from-yellow-500 to-orange-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'} h-3 rounded-full transition-all duration-1000 ease-out`} style={{width: '75%'}}></div>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Complete your profile to attract more clients! Add a bio and portfolio to reach 100%.</p>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <button className="bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-4 rounded-xl text-center border border-blue-200 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-blue-700">Add Portfolio</div>
              </button>
              <button className="bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 p-4 rounded-xl text-center border border-green-200 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-green-700">Verify Skills</div>
              </button>
              <button className="bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 p-4 rounded-xl text-center border border-purple-200 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-purple-700">Get Reviews</div>
              </button>
              <button className="bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 p-4 rounded-xl text-center border border-orange-200 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-orange-700">Boost Profile</div>
              </button>
            </div>
            
            <div className="space-y-6 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative ${isDark ? 'bg-gray-800 border-gray-600 group-hover:border-yellow-500' : 'bg-white border-gray-100 group-hover:border-blue-200'} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg`}>
                    <label className={`block text-sm font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-4 border-2 ${isDark ? 'border-gray-600 focus:ring-yellow-500/20 focus:border-yellow-500 disabled:bg-gray-700 hover:border-yellow-400 bg-gray-800 text-white' : 'border-gray-200 focus:ring-blue-100 focus:border-blue-500 disabled:bg-gray-50 hover:border-blue-300'} rounded-xl focus:ring-4 transition-all duration-300 text-lg font-medium`}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative ${isDark ? 'bg-gray-800 border-gray-600 group-hover:border-green-400' : 'bg-white border-gray-100 group-hover:border-green-200'} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg`}>
                    <label className={`block text-sm font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Email Address
                      <span className="ml-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className={`w-full px-4 py-4 border-2 ${isDark ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-700'} rounded-xl text-lg font-medium`}
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative ${isDark ? 'bg-gray-800 border-gray-600 group-hover:border-purple-400' : 'bg-white border-gray-100 group-hover:border-purple-200'} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg`}>
                    <label className={`block text-sm font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-4 border-2 ${isDark ? 'border-gray-600 focus:ring-purple-500/20 focus:border-purple-500 disabled:bg-gray-700 hover:border-purple-400 bg-gray-800 text-white' : 'border-gray-200 focus:ring-purple-100 focus:border-purple-500 disabled:bg-gray-50 hover:border-purple-300'} rounded-xl focus:ring-4 transition-all duration-300 text-lg font-medium`}
                      placeholder="+254 700 123 456"
                    />
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative ${isDark ? 'bg-gray-800 border-gray-600 group-hover:border-orange-400' : 'bg-white border-gray-100 group-hover:border-orange-200'} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg`}>
                    <label className={`block text-sm font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full px-4 py-4 border-2 ${isDark ? 'border-gray-600 focus:ring-orange-500/20 focus:border-orange-500 disabled:bg-gray-700 hover:border-orange-400 bg-gray-800 text-white' : 'border-gray-200 focus:ring-orange-100 focus:border-orange-500 disabled:bg-gray-50 hover:border-orange-300'} rounded-xl focus:ring-4 transition-all duration-300 text-lg font-medium`}
                      placeholder="Nairobi, Kenya"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`relative ${isDark ? 'bg-gray-800 border-gray-600 group-hover:border-indigo-400' : 'bg-white border-gray-100 group-hover:border-indigo-200'} border-2 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl`}>
                <label className={`block text-lg font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6 flex items-center`}>
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  Professional Bio
                  <span className="ml-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✨ Tell Your Story
                  </span>
                </label>
                <div className="relative">
                  <textarea
                    rows={6}
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-6 py-4 border-2 ${isDark ? 'border-gray-600 focus:ring-indigo-500/20 focus:border-indigo-500 disabled:bg-gray-700 hover:border-indigo-400 bg-gray-800 text-white' : 'border-gray-200 focus:ring-indigo-100 focus:border-indigo-500 disabled:bg-gray-50 hover:border-indigo-300'} rounded-2xl focus:ring-4 transition-all duration-300 resize-none text-lg leading-relaxed`}
                    placeholder="Share your story, expertise, and what makes you unique. This helps clients understand your style and approach. Highlight your experience, achievements, and what sets you apart from others in your field..."
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-600 border border-gray-200">
                    {formData.bio?.length || 0}/500
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  A compelling bio increases your profile views by up to 60%
                </div>
              </div>
            </div>

            {/* Enhanced Portfolio Section */}
            {user?.userType === 'professional' && (
              <div className="mb-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-900">Portfolio Showcase</h2>
                  </div>
                  {isEditing && (
                    <button
                      onClick={addPortfolioItem}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add Project
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formData.portfolio.map((item) => (
                    <div key={item.id} className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                            ✨ Featured Work
                          </div>
                        </div>
                      </div>
                      {isEditing ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => updatePortfolioItem(item.id, 'title', e.target.value)}
                            placeholder="Project title"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <textarea
                            value={item.description}
                            onChange={(e) => updatePortfolioItem(item.id, 'description', e.target.value)}
                            placeholder="Describe this project, your role, and the results achieved..."
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                            rows={4}
                          />
                          <button
                            onClick={() => removePortfolioItem(item.id)}
                            className="text-red-600 hover:text-red-800 text-sm font-semibold flex items-center transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove Project
                          </button>
                        </div>
                      ) : (
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title || 'Untitled Project'}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description || 'No description available'}</p>
                          <div className="mt-3 flex items-center text-sm text-blue-600">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Details
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {formData.portfolio.length === 0 && (
                  <div className="col-span-full text-center py-16">
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 border-2 border-dashed border-gray-200">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Build Your Portfolio</h3>
                      <p className="text-gray-500 mb-6">Showcase your best work to attract more clients. Add your first project to get started!</p>
                      {isEditing && (
                        <button
                          onClick={addPortfolioItem}
                          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                        >
                          Add Your First Project
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Enhanced Save Button */}
            {isEditing && (
              <div className={`flex justify-end gap-4 pt-8 border-t ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
                <button
                  onClick={() => setIsEditing(false)}
                  className={`${isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} px-8 py-3 rounded-xl font-semibold transition-all duration-300`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className={`${isDark ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;