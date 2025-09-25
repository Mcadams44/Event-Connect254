import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const { isDark } = useTheme();
  const { plan, isAnnual } = location.state || {};

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: '',
    city: '',
    zipCode: ''
  });
  const [processing, setProcessing] = useState(false);

  if (!plan) {
    navigate('/');
    return null;
  }

  const price = isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice;
  const totalPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Update user subscription
      updateProfile({
        subscription: {
          plan: plan.name,
          isAnnual,
          price: totalPrice,
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + (isAnnual ? 365 : 30) * 24 * 60 * 60 * 1000).toISOString(),
          status: 'active'
        }
      });

      navigate('/dashboard', { 
        state: { message: `Successfully subscribed to ${plan.name} plan!` }
      });
    }, 2000);
  };

  return (
    <div className={`min-h-screen py-8 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Complete Your Subscription
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            You're just one step away from joining thousands of successful event professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} rounded-xl shadow-2xl p-6 transition-colors duration-300`}>
            <div className="flex items-center mb-6">
              <div className={`w-10 h-10 ${isDark ? 'bg-yellow-600' : 'bg-blue-600'} rounded-full flex items-center justify-center mr-3`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Order Summary</h2>
            </div>
            
            <div className={`${isDark ? 'border border-gray-600 bg-gray-700/50' : 'border border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50'} rounded-lg p-4 mb-6 transition-colors duration-300`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{plan.name} Plan</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{plan.description}</p>
                </div>
                {plan.popular && (
                  <span className={`${isDark ? 'bg-yellow-600/20 text-yellow-400' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full text-xs font-semibold animate-pulse`}>
                    ⭐ Popular
                  </span>
                )}
              </div>
              
              <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                {plan.features.slice(0, 5).map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
                {plan.features.length > 5 && (
                  <div className={`${isDark ? 'text-yellow-400' : 'text-blue-600'} text-xs font-medium`}>+ {plan.features.length - 5} more features</div>
                )}
              </div>
            </div>

            <div className={`space-y-3 ${isDark ? 'border-t border-gray-600' : 'border-t border-gray-200'} pt-4`}>
              <div className={`flex justify-between ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span>Plan ({isAnnual ? 'Annual' : 'Monthly'})</span>
                <span>KSh{price.toLocaleString()}/month</span>
              </div>
              {isAnnual && (
                <div className="flex justify-between text-green-500 font-medium">
                  <span>💰 Annual Discount (17%)</span>
                  <span>-KSh{(plan.monthlyPrice * 12 - plan.annualPrice).toLocaleString()}</span>
                </div>
              )}
              <div className={`flex justify-between text-lg font-bold ${isDark ? 'border-t border-gray-600 text-yellow-400' : 'border-t border-gray-200 text-gray-900'} pt-3`}>
                <span>Total {isAnnual ? '(Annual)' : '(Monthly)'}</span>
                <span>KSh{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} rounded-xl shadow-2xl p-6 transition-colors duration-300`}>
            <div className="flex items-center mb-6">
              <div className={`w-10 h-10 ${isDark ? 'bg-yellow-600' : 'bg-blue-600'} rounded-full flex items-center justify-center mr-3`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Payment Details</h2>
            </div>
            
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Card Number</label>
                <input
                  type="text"
                  required
                  value={paymentData.cardNumber}
                  onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                  placeholder="1234 5678 9012 3456"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Expiry Date</label>
                  <input
                    type="text"
                    required
                    value={paymentData.expiryDate}
                    onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                    placeholder="MM/YY"
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>CVV</label>
                  <input
                    type="text"
                    required
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                    placeholder="123"
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Cardholder Name</label>
                <input
                  type="text"
                  required
                  value={paymentData.cardName}
                  onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Billing Address</label>
                <input
                  type="text"
                  required
                  value={paymentData.billingAddress}
                  onChange={(e) => setPaymentData({...paymentData, billingAddress: e.target.value})}
                  placeholder="123 Main Street"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>City</label>
                  <input
                    type="text"
                    required
                    value={paymentData.city}
                    onChange={(e) => setPaymentData({...paymentData, city: e.target.value})}
                    placeholder="New York"
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={paymentData.zipCode}
                    onChange={(e) => setPaymentData({...paymentData, zipCode: e.target.value})}
                    placeholder="10001"
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500' : 'bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={processing}
                  className={`group relative w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden ${isDark ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 disabled:from-gray-600 disabled:to-gray-700 text-black' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white'} shadow-2xl hover:shadow-3xl flex items-center justify-center`}
                >
                  {processing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Pay KSh{totalPrice.toLocaleString()} - Subscribe Now
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>

              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} text-center pt-4 space-y-2`}>
                <p className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Your payment information is secure and encrypted
                </p>
                <p>✨ Cancel anytime • 💰 14-day money-back guarantee • 🎯 Instant access</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;