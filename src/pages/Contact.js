import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={`min-h-screen py-12 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-16 h-16 ${isDark ? 'bg-yellow-600' : 'bg-blue-600'} rounded-full mb-6`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Get in Touch</h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Ready to take your event business to the next level? Our enterprise team is here to help you succeed.
          </p>
        </div>

        {submitted && (
          <div className={`mb-6 ${isDark ? 'bg-green-900/50 border border-green-700 text-green-300' : 'bg-green-50 border border-green-200 text-green-700'} px-6 py-4 rounded-xl flex items-center animate-pulse`}>
            <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm opacity-90">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow-2xl rounded-xl p-8 transition-colors duration-300`}>
            <div className="flex items-center mb-6">
              <div className={`w-10 h-10 ${isDark ? 'bg-yellow-600' : 'bg-blue-600'} rounded-full flex items-center justify-center mr-3`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Send us a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Subject
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                >
                  <option value="">Select a topic</option>
                  <option value="Enterprise Sales">Enterprise Sales Inquiry</option>
                  <option value="Custom Integration">Custom Integration</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your event business and how we can help you grow..."
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                />
              </div>

              <button
                type="submit"
                className={`group relative w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden ${isDark ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'} shadow-2xl hover:shadow-3xl flex items-center justify-center`}
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow-2xl rounded-xl p-6 transition-colors duration-300`}>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Get in Touch</h3>
            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 ${isDark ? 'bg-yellow-600/20' : 'bg-blue-100'} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>Email Us</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>enterprise@eventconnect.com</p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs`}>Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 ${isDark ? 'bg-yellow-600/20' : 'bg-blue-100'} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>Call Us</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>+1 (555) 123-4567</p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs`}>Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 ${isDark ? 'bg-yellow-600/20' : 'bg-blue-100'} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>Visit Us</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>123 Event Street</p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Nairobi, Kenya</p>
                </div>
              </div>

              <div className={`${isDark ? 'border-t border-gray-700' : 'border-t border-gray-200'} pt-6 mt-6`}>
                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Why Choose Enterprise?</h4>
                <ul className="space-y-2 text-sm">
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated account manager
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom integrations
                  </li>
                  <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;