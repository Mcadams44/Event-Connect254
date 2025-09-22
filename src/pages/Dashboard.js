import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (user?.userType === 'professional' && !user?.setupComplete) {
      navigate('/professional-setup');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen section-bg">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
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
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Dashboard</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto pb-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome, {user?.name}!
                </h1>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Logout
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Profile</h3>
                  <p className="text-blue-700">Complete your profile to get more bookings</p>
                  <Link to="/profile" className="mt-3 bg-blue-600 text-white px-4 py-2 rounded text-sm inline-block text-center">
                    Edit Profile
                  </Link>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Bookings</h3>
                  <p className="text-green-700">Manage your upcoming events</p>
                  <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded text-sm">
                    View Bookings
                  </button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Messages</h3>
                  <p className="text-purple-700">Connect with clients</p>
                  <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded text-sm">
                    View Messages
                  </button>
                </div>
              </div>

              {user?.userType === 'professional' && (
                <div className="space-y-6">
                  {/* Professional Stats */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Professional Dashboard</h2>
                      {user?.subscription ? (
                        <div className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                          {user.subscription.plan} Plan
                        </div>
                      ) : (
                        <Link to="/" className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold hover:bg-yellow-400">
                          Upgrade Plan
                        </Link>
                      )}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{user?.portfolio?.length || 0}</div>
                        <div className="text-blue-100 text-sm">Portfolio Items</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">4.8</div>
                        <div className="text-blue-100 text-sm">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">23</div>
                        <div className="text-blue-100 text-sm">Reviews</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-blue-100 text-sm">This Month</div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Tools */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold">Portfolio</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Showcase your best work to attract clients</p>
                      <Link to="/profile" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center block">
                        Manage Portfolio
                      </Link>
                    </div>

                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold">Services & Pricing</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Set your service packages and rates</p>
                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                        Manage Services
                      </button>
                    </div>

                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold">Availability</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Manage your calendar and booking slots</p>
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                        Update Calendar
                      </button>
                    </div>

                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold">Analytics</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Track views, inquiries, and bookings</p>
                      <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                        View Analytics
                      </button>
                    </div>

                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <h3 className="font-semibold">Payments</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Track earnings and payment history</p>
                      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                        View Payments
                      </button>
                    </div>

                    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold">Reviews</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Manage client reviews and ratings</p>
                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                        View Reviews
                      </button>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/profile" className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                        Complete Profile
                      </Link>
                      <button className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                        Add Service Package
                      </button>
                      <button className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                        Set Availability
                      </button>
                      <button className="bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
                        Promote Profile
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {user?.userType === 'client' && (
                <div className="bg-white border rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Client Dashboard</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded p-4">
                      <h3 className="font-semibold mb-2">Find Professionals</h3>
                      <p className="text-gray-600 text-sm mb-3">Browse and book event services</p>
                      <Link to="/browse" className="bg-blue-600 text-white px-3 py-1 rounded text-sm inline-block text-center">
                        Browse Now
                      </Link>
                    </div>
                    <div className="border rounded p-4">
                      <h3 className="font-semibold mb-2">My Events</h3>
                      <p className="text-gray-600 text-sm mb-3">Track your upcoming events</p>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                        View Events
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;