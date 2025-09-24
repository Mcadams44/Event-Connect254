import React, { useState, useEffect } from 'react';

const FeaturedProfessionals = () => {
  const professionals = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wedding Photographer",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Award-winning photographer specializing in romantic wedding photography with 8+ years of experience.",
      location: "New York, NY",
      startingPrice: "$1,200",
      tags: ["Weddings", "Portraits", "Engagement"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Planner",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Full-service event planning with expertise in corporate events and luxury celebrations.",
      location: "Los Angeles, CA",
      startingPrice: "$2,500",
      tags: ["Corporate", "Weddings", "Luxury"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Catering Chef",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Gourmet catering with farm-to-table ingredients and customizable menu options for any event size.",
      location: "Chicago, IL",
      startingPrice: "$35/person",
      tags: ["Vegan", "Organic", "Custom Menus"]
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
        <span className="text-sm font-medium text-gray-700">{rating}</span>
      </div>
    );
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % professionals.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [professionals.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our top-rated professionals who consistently deliver exceptional results
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {professionals.map((professional) => (
              <div key={professional.id} className="w-full flex-shrink-0">
                <div className="bg-white rounded-2xl shadow-xl p-8 mx-4">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ⭐ {professional.rating}
                      </div>
                    </div>

                    {/* Professional Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {professional.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg mb-3">
                        {professional.role}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {professional.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-4">
                        <span className="flex items-center text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {professional.location}
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                          From {professional.startingPrice}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                        {professional.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                        View Profile & Portfolio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {professionals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfessionals;