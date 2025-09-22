import React from 'react';

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our top-rated professionals who consistently deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional) => (
            <div key={professional.id} className="card p-6 group">
              {/* Profile Image */}
              <div className="relative mb-6">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  ⭐ {professional.rating}
                </div>
              </div>

              {/* Professional Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {professional.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {professional.role}
                </p>
                <StarRating rating={professional.rating} />
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 text-center">
                {professional.description}
              </p>

              {/* Location and Price */}
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {professional.location}
                </span>
                <span className="font-semibold text-blue-600">
                  From {professional.startingPrice}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {professional.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors group-hover:shadow-lg">
                View Profile & Portfolio
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-3">
            View All Professionals
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfessionals;