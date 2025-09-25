import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const RecentEventRequests = () => {
  const { isDark } = useTheme();
  const requests = [
    {
      id: 1,
      title: "Garden Wedding - 150 guests",
      description: "Looking for a wedding planner for our outdoor ceremony in Napa Valley. Need full-service planning including vendor coordination.",
      budget: "KSh1,950,000 - KSh2,600,000",
      location: "Napa Valley, CA",
      date: "June 2024",
      category: "Wedding",
      urgent: false,
      responses: 12
    },
    {
      id: 2,
      title: "Annual Company Retreat",
      description: "Seeking event coordinator for 3-day corporate retreat. Team building activities, catering, and venue management required.",
      budget: "KSh3,250,000 - KSh4,550,000",
      location: "San Francisco, CA",
      date: "March 2024",
      category: "Corporate",
      urgent: true,
      responses: 8
    },
    {
      id: 3,
      title: "Birthday Party - Sweet 16",
      description: "Planning a memorable sweet 16 party. Need DJ, decorations, and catering for 80 guests.",
      budget: "KSh650,000 - KSh1,040,000",
      location: "Los Angeles, CA",
      date: "April 2024",
      category: "Party",
      urgent: false,
      responses: 15
    },
    {
      id: 4,
      title: "Product Launch Event",
      description: "High-end product launch for tech startup. Need venue, catering, AV equipment, and event coordination.",
      budget: "KSh5,200,000+",
      location: "New York, NY",
      date: "May 2024",
      category: "Corporate",
      urgent: true,
      responses: 6
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Recent Event Requests
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Real opportunities from clients looking for event professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requests.map((request, index) => (
            <div 
              key={request.id} 
              className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    request.category === 'Wedding' ? (isDark ? 'bg-pink-900/50 text-pink-300' : 'bg-pink-100 text-pink-700') :
                    request.category === 'Corporate' ? (isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700') :
                    (isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700')
                  }`}>
                    {request.category}
                  </span>
                  {request.urgent && (
                    <span className={`px-2 py-1 ${isDark ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-700'} rounded-full text-xs font-semibold animate-pulse`}>
                      Urgent
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{request.responses} responses</div>
                </div>
              </div>
              
              <h3 className={`text-xl font-bold ${isDark ? 'text-white group-hover:text-yellow-400' : 'text-gray-900 group-hover:text-blue-600'} mb-3 transition-colors`}>
                {request.title}
              </h3>
              
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                {request.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Budget: <span className="font-semibold text-green-600">{request.budget}</span>
                </div>
                <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {request.location}
                </div>
                <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                  </svg>
                  {request.date}
                </div>
              </div>
              
              <Link 
                to="/signup" 
                className={`w-full bg-gradient-to-r ${isDark ? 'from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700' : 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'} text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center block group-hover:shadow-lg`}
              >
                Respond to Request
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/signup" className="btn-secondary inline-flex items-center space-x-2">
            <span>Join as Professional</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentEventRequests;
