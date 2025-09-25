import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const SubscriptionPlans = () => {
  const { isDark } = useTheme();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for new professionals",
      monthlyPrice: 3770,
      annualPrice: 37700,
      popular: false,
      features: [
        "Professional profile creation",
        "Up to 15 portfolio images",
        "Client inquiry management",
        "Basic analytics dashboard",
        "Mobile app access",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonStyle: "btn-secondary"
    },
    {
      name: "Professional",
      description: "Best for growing businesses",
      monthlyPrice: 10270,
      annualPrice: 102700,
      popular: true,
      features: [
        "Everything in Starter",
        "Unlimited portfolio images",
        "Premium listing placement",
        "Instant quote generation",
        "Calendar integration",
        "WhatsApp & SMS integration",
        "Advanced analytics",
        "Priority support",
        "Custom booking forms"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "btn-primary"
    },
    {
      name: "Enterprise",
      description: "For established agencies",
      monthlyPrice: 25870,
      annualPrice: 258700,
      popular: false,
      features: [
        "Everything in Professional",
        "Multi-user team accounts",
        "White-label solutions",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom contracts & invoicing"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "btn-secondary"
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Professional Membership Plans
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
            Choose the plan that fits your business needs and start connecting with clients today
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? (isDark ? 'text-yellow-400' : 'text-blue-600') : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-yellow-500' : 'focus:ring-blue-500'} focus:ring-offset-2 ${
                isAnnual ? (isDark ? 'bg-yellow-600' : 'bg-blue-600') : (isDark ? 'bg-gray-600' : 'bg-gray-200')
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? (isDark ? 'text-yellow-400' : 'text-blue-600') : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>
              Annual
              <span className={`ml-1 text-xs ${isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'} px-2 py-1 rounded-full`}>
                Save 17%
              </span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? (isDark ? 'bg-gradient-to-br from-yellow-600 to-orange-600 text-black shadow-2xl ring-4 ring-yellow-400' : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl ring-4 ring-blue-200')
                  : (isDark ? 'bg-gray-700 border border-gray-600 hover:shadow-2xl' : 'bg-white border border-gray-200 hover:shadow-2xl')
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? (isDark ? 'text-black' : 'text-white') : (isDark ? 'text-white' : 'text-gray-900')
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.popular ? (isDark ? 'text-gray-800' : 'text-blue-100') : (isDark ? 'text-gray-300' : 'text-gray-600')
                }`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className={`text-3xl font-bold ${
                    plan.popular ? (isDark ? 'text-black' : 'text-white') : (isDark ? 'text-white' : 'text-gray-900')
                  }`}>
                    KSh{isAnnual ? Math.floor(plan.annualPrice / 12).toLocaleString() : plan.monthlyPrice.toLocaleString()}
                  </span>
                  <span className={`text-lg ${
                    plan.popular ? (isDark ? 'text-gray-800' : 'text-blue-100') : (isDark ? 'text-gray-300' : 'text-gray-600')
                  }`}>
                    /month
                  </span>
                  {isAnnual && (
                    <div className={`text-sm mt-1 ${
                      plan.popular ? (isDark ? 'text-gray-700' : 'text-blue-100') : (isDark ? 'text-gray-400' : 'text-gray-500')
                    }`}>
                      Billed annually (KSh{plan.annualPrice.toLocaleString()})
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.popular ? (isDark ? 'text-gray-800' : 'text-blue-200') : 'text-green-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${
                      plan.popular ? (isDark ? 'text-gray-800' : 'text-blue-50') : (isDark ? 'text-gray-300' : 'text-gray-600')
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={plan.name === 'Enterprise' ? '/contact' : '/checkout'}
                state={{ plan, isAnnual }}
                className={`group relative w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 block transform hover:scale-105 overflow-hidden ${
                  plan.popular 
                    ? (isDark ? 'bg-black text-yellow-400 hover:bg-gray-900 shadow-2xl hover:shadow-yellow-500/25' : 'bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-blue-500/25')
                    : plan.buttonStyle === 'btn-primary'
                    ? (isDark ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400 shadow-2xl hover:shadow-yellow-500/25' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25')
                    : (isDark ? 'bg-gray-600 text-yellow-400 hover:bg-gray-500 border-2 border-yellow-500/50 hover:border-yellow-400' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-300')
                }`}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {plan.buttonText === 'Get Started' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                  {plan.buttonText === 'Start Free Trial' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {plan.buttonText === 'Contact Sales' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  <span>{plan.buttonText}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className={`flex items-center justify-center space-x-8 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              24/7 Support
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
