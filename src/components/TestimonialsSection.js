import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TestimonialsSection = () => {
  const { isDark } = useTheme();
  const testimonials = [
    {
      id: 1,
      name: "Jessica Martinez",
      role: "Bride",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      testimonial: "EventConnect made finding our wedding photographer so easy! Sarah captured our special day perfectly. The platform's review system gave us confidence in our choice."
    },
    {
      id: 2,
      name: "David Thompson",
      role: "Corporate Event Manager",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      testimonial: "We've used EventConnect for multiple corporate events. The quality of professionals and seamless booking process has made our job so much easier. Highly recommended!"
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "Birthday Party Host",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      testimonial: "Amazing experience! Found the perfect caterer for my daughter's sweet 16. The food was incredible and the service was flawless. Thank you EventConnect!"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1 mb-4">
        {[...Array(rating)].map((_, index) => (
          <svg key={index} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            What Our Clients Say
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Real stories from satisfied clients who found their perfect event professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} rounded-xl shadow-lg p-8 text-center transition-colors duration-300`}>
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-200 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Stars */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Text */}
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 italic leading-relaxed`}>
                "{testimonial.testimonial}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className={`text-3xl font-bold ${isDark ? 'text-yellow-400' : 'text-blue-600'} mb-2`}>5,000+</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Events Completed</div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${isDark ? 'text-yellow-400' : 'text-blue-600'} mb-2`}>1,200+</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Verified Professionals</div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${isDark ? 'text-yellow-400' : 'text-blue-600'} mb-2`}>4.9/5</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Average Rating</div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${isDark ? 'text-yellow-400' : 'text-blue-600'} mb-2`}>98%</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;