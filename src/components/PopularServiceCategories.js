import React from 'react';
import { Link } from 'react-router-dom';

const PopularServiceCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Wedding Planning",
      professionals: 245,
      icon: "💍",
      gradient: "from-pink-100 to-rose-100",
      description: "Make your special day perfect"
    },
    {
      id: 2,
      title: "Corporate Events",
      professionals: 189,
      icon: "🏢",
      gradient: "from-blue-100 to-indigo-100",
      description: "Professional business gatherings"
    },
    {
      id: 3,
      title: "Party Planning",
      professionals: 156,
      icon: "🎉",
      gradient: "from-purple-100 to-pink-100",
      description: "Celebrate in style"
    },
    {
      id: 4,
      title: "Photography",
      professionals: 320,
      icon: "📸",
      gradient: "from-green-100 to-emerald-100",
      description: "Capture precious moments"
    },
    {
      id: 5,
      title: "Catering",
      professionals: 280,
      icon: "🍽️",
      gradient: "from-orange-100 to-amber-100",
      description: "Delicious culinary experiences"
    },
    {
      id: 6,
      title: "Entertainment",
      professionals: 195,
      icon: "🎭",
      gradient: "from-violet-100 to-purple-100",
      description: "Keep guests engaged"
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Service Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover top-rated professionals across our most requested event services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id} 
              to="/browse"
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {category.professionals}+ pros
                  </span>
                  <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServiceCategories;
