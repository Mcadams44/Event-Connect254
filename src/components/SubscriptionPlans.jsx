import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubscriptionPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for new professionals",
      monthlyPrice: 29,
      annualPrice: 290,
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
      monthlyPrice: 79,
      annualPrice: 790,
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
      monthlyPrice: 199,
      annualPrice: 1990,
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
    <section className="py-20 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Membership Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs and start connecting with clients today
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
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
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl ring-4 ring-blue-200' 
                  : 'card hover:shadow-2xl'
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
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.popular ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className={`text-lg ${
                    plan.popular ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    /month
                  </span>
                  {isAnnual && (
                    <div className={`text-sm mt-1 ${
                      plan.popular ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      Billed annually (${plan.annualPrice})
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-blue-200' : 'text-green-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${
                      plan.popular ? 'text-blue-50' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={plan.name === 'Enterprise' ? '/contact' : '/checkout'}
                state={{ plan, isAnnual }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl' 
                    : plan.buttonStyle === 'btn-primary'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border-2 border-blue-200'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
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
