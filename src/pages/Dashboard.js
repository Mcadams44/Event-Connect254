import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
  };

  const stats = {
    totalEvents: 1247,
    activeEvents: 89,
    revenue: 2450000,
    clients: 456,
    professionals: 234,
    satisfaction: 98.5
  };

  const recentEvents = [
    { id: 1, name: 'Corporate Annual Gala', client: 'Tech Corp Ltd', date: '2024-01-15', status: 'confirmed', value: 450000 },
    { id: 2, name: 'Wedding Celebration', client: 'John & Mary', date: '2024-01-18', status: 'planning', value: 280000 },
    { id: 3, name: 'Product Launch Event', client: 'StartUp Inc', date: '2024-01-22', status: 'confirmed', value: 320000 },
    { id: 4, name: 'Birthday Party', client: 'Sarah Johnson', date: '2024-01-25', status: 'pending', value: 85000 }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'} transition-colors duration-300`}>
      {/* Header */}
      <div className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80'} backdrop-blur-sm border-b sticky top-0 z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                EventConnect Dashboard
              </h1>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Welcome back, {user?.name}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`${isDark ? 'bg-gray-700' : 'bg-blue-50'} px-4 py-2 rounded-full`}>
                <span className={`text-sm font-medium ${isDark ? 'text-yellow-400' : 'text-blue-700'}`}>
                  {user?.userType === 'professional' ? '🏆 Pro Member' : '👤 Client'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className={`${isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'} rounded-2xl p-6 text-white border shadow-xl`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Events</p>
                <p className="text-3xl font-bold">{stats.totalEvents.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-300 text-sm">↗ +12% from last month</span>
            </div>
          </div>

          <div className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-br from-green-500 to-green-600'} rounded-2xl p-6 text-white border shadow-xl`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Active Events</p>
                <p className="text-3xl font-bold">{stats.activeEvents}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-300 text-sm">↗ +8% from last week</span>
            </div>
          </div>

          <div className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-br from-purple-500 to-purple-600'} rounded-2xl p-6 text-white border shadow-xl`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Revenue</p>
                <p className="text-3xl font-bold">KSh{(stats.revenue / 1000000).toFixed(1)}M</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-300 text-sm">↗ +24% from last month</span>
            </div>
          </div>

          <div className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'} rounded-2xl p-6 text-white border shadow-xl`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Satisfaction</p>
                <p className="text-3xl font-bold">{stats.satisfaction}%</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-300 text-sm">↗ +2% from last month</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Events */}
          <div className="lg:col-span-2">
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-2xl shadow-xl border p-6 transition-colors duration-300`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Events</h2>
                <Link to="/events" className={`${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-700'} text-sm font-medium transition-colors`}>
                  View All →
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div key={event.id} className={`${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 transition-all duration-300 hover:shadow-lg`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{event.name}</h3>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Client: {event.client}</p>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Date: {event.date}</p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          event.status === 'planning' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {event.status}
                        </div>
                        <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                          KSh{event.value.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Analytics */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-2xl shadow-xl border p-6 transition-colors duration-300`}>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Quick Actions</h3>
              <div className="space-y-3">
                <button className={`w-full ${isDark ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create New Event
                </button>
                <Link to="/browse" className={`w-full ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Find Professionals
                </Link>
                <Link to="/profile" className={`w-full ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Manage Profile
                </Link>
              </div>
            </div>

            {/* Performance Chart */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-2xl shadow-xl border p-6 transition-colors duration-300`}>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>This Month</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Events Completed</span>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>24/30</span>
                  </div>
                  <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Revenue Target</span>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>KSh1.8M/2M</span>
                  </div>
                  <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Client Satisfaction</span>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>98.5%</span>
                  </div>
                  <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full" style={{width: '98.5%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-2xl shadow-xl border p-6 transition-colors duration-300`}>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Notifications</h3>
              <div className="space-y-3">
                <div className={`${isDark ? 'bg-blue-900/30 border-blue-500' : 'bg-blue-50 border-blue-200'} border-l-4 p-3 rounded`}>
                  <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>New booking request from Tech Corp Ltd</p>
                  <p className={`text-xs ${isDark ? 'text-blue-400' : 'text-blue-600'} mt-1`}>2 hours ago</p>
                </div>
                <div className={`${isDark ? 'bg-green-900/30 border-green-500' : 'bg-green-50 border-green-200'} border-l-4 p-3 rounded`}>
                  <p className={`text-sm ${isDark ? 'text-green-300' : 'text-green-800'}`}>Payment received for Wedding Event</p>
                  <p className={`text-xs ${isDark ? 'text-green-400' : 'text-green-600'} mt-1`}>5 hours ago</p>
                </div>
                <div className={`${isDark ? 'bg-yellow-900/30 border-yellow-500' : 'bg-yellow-50 border-yellow-200'} border-l-4 p-3 rounded`}>
                  <p className={`text-sm ${isDark ? 'text-yellow-300' : 'text-yellow-800'}`}>Profile completion at 75%</p>
                  <p className={`text-xs ${isDark ? 'text-yellow-400' : 'text-yellow-600'} mt-1`}>1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;