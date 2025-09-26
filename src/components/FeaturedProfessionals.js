import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const FeaturedProfessionals = ({ categoryFilter = 'all' }) => {
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedProfessionals, setSavedProfessionals] = useState([]);
  
  const allProfessionals = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wedding Photographer",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      description: "Award-winning photographer specializing in romantic wedding photography with 8+ years of experience.",
      location: "New York, NY",
      startingPrice: "KSh156,000",
      tags: ["Weddings", "Portraits", "Engagement"],
      portfolio: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      services: ["Wedding Photography", "Engagement Shoots", "Portrait Sessions", "Event Coverage"],
      experience: "8+ years",
      completedEvents: 150,
      responseTime: "Within 2 hours",
      languages: ["English", "Spanish"],
      equipment: ["Canon EOS R5", "Sony A7R IV", "Professional Lighting", "Drone Photography"],
      about: "Passionate wedding photographer with over 8 years of experience capturing love stories. I specialize in romantic, candid moments that tell your unique story. My approach combines artistic vision with documentary-style photography to create timeless memories."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Planner",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Full-service event planning with expertise in corporate events and luxury celebrations.",
      location: "Los Angeles, CA",
      startingPrice: "KSh325,000",
      tags: ["Corporate", "Weddings", "Luxury"],
      portfolio: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      services: ["Full Event Planning", "Corporate Events", "Wedding Coordination", "Luxury Celebrations"],
      experience: "12+ years",
      completedEvents: 300,
      responseTime: "Within 1 hour",
      languages: ["English", "Mandarin"],
      equipment: ["Event Management Software", "Professional Coordination Team", "Vendor Network", "Emergency Backup Plans"],
      about: "Award-winning event planner specializing in luxury celebrations and corporate events. I bring creativity, attention to detail, and flawless execution to every event. My team and I handle everything from concept to cleanup, ensuring your event exceeds expectations."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Catering Chef",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      description: "Gourmet catering with farm-to-table ingredients and customizable menu options for any event size.",
      location: "Chicago, IL",
      startingPrice: "KSh4,550/person",
      tags: ["Vegan", "Organic", "Custom Menus"],
      portfolio: [
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      services: ["Gourmet Catering", "Vegan Specialties", "Custom Menu Design", "Farm-to-Table Options"],
      experience: "10+ years",
      completedEvents: 200,
      responseTime: "Within 3 hours",
      languages: ["English", "French"],
      equipment: ["Professional Kitchen Setup", "Organic Ingredient Sources", "Specialized Dietary Equipment", "Mobile Catering Units"],
      about: "Culinary artist passionate about creating exceptional dining experiences using fresh, organic ingredients. I specialize in custom menus that cater to all dietary preferences while maintaining the highest standards of taste and presentation."
    },
    {
      id: 4,
      name: "James Ochieng",
      role: "DJ & Sound Engineer",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      description: "Professional DJ and sound engineer specializing in weddings, corporate events, and private parties with state-of-the-art equipment.",
      location: "Nairobi, Kenya",
      startingPrice: "KSh65,000",
      tags: ["DJ Services", "Sound Systems", "Lighting"],
      portfolio: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571266028243-d220c9c3d5d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      services: ["Wedding DJ", "Corporate Events", "Sound System Rental", "Lighting Design"],
      experience: "6+ years",
      completedEvents: 180,
      responseTime: "Within 1 hour",
      languages: ["English", "Swahili"],
      equipment: ["Pioneer DJ Controllers", "JBL Sound Systems", "LED Lighting Rigs", "Wireless Microphones"],
      about: "Experienced DJ and sound engineer bringing energy and professionalism to every event. I specialize in reading the crowd and creating the perfect atmosphere with seamless mixing and high-quality sound production."
    },
    {
      id: 5,
      name: "Grace Wanjiku",
      role: "Event Decorator",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
      description: "Creative event decorator transforming spaces into magical experiences with elegant designs and attention to detail.",
      location: "Mombasa, Kenya",
      startingPrice: "KSh78,000",
      tags: ["Floral Design", "Venue Styling", "Themed Decor"],
      portfolio: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      services: ["Wedding Decoration", "Corporate Styling", "Floral Arrangements", "Themed Events"],
      experience: "7+ years",
      completedEvents: 120,
      responseTime: "Within 4 hours",
      languages: ["English", "Swahili"],
      equipment: ["Professional Floral Tools", "Fabric Draping Systems", "Lighting Equipment", "Custom Props"],
      about: "Passionate decorator with an eye for beauty and detail. I transform ordinary spaces into extraordinary experiences through creative design, elegant styling, and personalized touches that reflect each client's unique vision."
    },
    {
      id: 6,
      name: "Robert Kimani",
      role: "Videographer",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Professional videographer creating cinematic wedding films and corporate videos with creative storytelling and technical excellence.",
      location: "Kisumu, Kenya",
      startingPrice: "KSh130,000",
      tags: ["Wedding Films", "Corporate Videos", "Drone Footage"],
      portfolio: [
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      services: ["Wedding Videography", "Corporate Films", "Event Highlights", "Drone Cinematography"],
      experience: "9+ years",
      completedEvents: 140,
      responseTime: "Within 2 hours",
      languages: ["English", "Swahili", "Luo"],
      equipment: ["Sony FX6 Cameras", "DJI Drone Systems", "Professional Gimbals", "4K Editing Suite"],
      about: "Award-winning videographer specializing in cinematic storytelling. I capture the emotion and beauty of your special moments through creative cinematography, professional editing, and attention to the details that make your story unique."
    },
    {
      id: 7,
      name: "Amina Hassan",
      role: "Makeup Artist",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Professional makeup artist specializing in bridal makeup, special effects, and beauty transformations for all skin tones.",
      location: "Mombasa, Kenya",
      startingPrice: "KSh39,000",
      tags: ["Bridal Makeup", "Special Effects", "Beauty Styling"],
      portfolio: [
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      services: ["Bridal Makeup", "Event Styling", "Photoshoot Makeup", "Special Occasion Beauty"],
      experience: "5+ years",
      completedEvents: 95,
      responseTime: "Within 3 hours",
      languages: ["English", "Swahili", "Arabic"],
      equipment: ["Professional Makeup Kits", "Airbrush Systems", "High-End Cosmetics", "Portable Lighting"],
      about: "Certified makeup artist passionate about enhancing natural beauty and creating stunning looks for every occasion. I specialize in working with all skin tones and creating makeup that photographs beautifully and lasts all day."
    },
    {
      id: 8,
      name: "Peter Mwangi",
      role: "Security Coordinator",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      description: "Professional security coordinator ensuring safe and secure events with trained personnel and comprehensive security planning.",
      location: "Nairobi, Kenya",
      startingPrice: "KSh52,000",
      tags: ["Event Security", "Crowd Control", "VIP Protection"],
      portfolio: [
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      services: ["Event Security Planning", "Crowd Management", "VIP Protection", "Emergency Response"],
      experience: "15+ years",
      completedEvents: 250,
      responseTime: "Within 30 minutes",
      languages: ["English", "Swahili", "Kikuyu"],
      equipment: ["Communication Systems", "Security Personnel", "Surveillance Equipment", "Emergency Response Kits"],
      about: "Experienced security professional with extensive background in event safety and crowd management. I provide comprehensive security solutions ensuring your event runs smoothly while maintaining a welcoming atmosphere for all guests."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{rating}</span>
      </div>
    );
  };

  // Map professional roles to category filters
  const getCategoryFromRole = (role) => {
    const roleMap = {
      'Wedding Photographer': 'photography',
      'Event Planner': 'wedding',
      'Catering Chef': 'catering',
      'DJ & Sound Engineer': 'entertainment',
      'Event Decorator': 'party',
      'Videographer': 'photography',
      'Makeup Artist': 'wedding',
      'Security Coordinator': 'corporate'
    };
    return roleMap[role] || 'other';
  };

  // Filter professionals based on category
  const professionals = categoryFilter === 'all' 
    ? allProfessionals 
    : allProfessionals.filter(prof => getCategoryFromRole(prof.role) === categoryFilter);

  const { isDark } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0); // Reset to first slide when filter changes
  }, [categoryFilter]);

  useEffect(() => {
    if (professionals.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % professionals.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [professionals.length]);

  const handleSaveProfessional = (professionalId) => {
    setSavedProfessionals(prev => {
      if (prev.includes(professionalId)) {
        return prev.filter(id => id !== professionalId);
      } else {
        return [...prev, professionalId];
      }
    });
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            {categoryFilter === 'all' ? 'Featured Professionals' : `Featured ${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Professionals`}
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            {professionals.length === 0 
              ? `No professionals found in this category` 
              : `Meet our top-rated professionals who consistently deliver exceptional results`}
          </p>
        </div>

        {professionals.length > 0 ? (
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {professionals.map((professional) => (
              <div key={professional.id} className="w-full flex-shrink-0">
                <div className={`${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-blue-50'} rounded-3xl shadow-2xl p-8 mx-4 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    {/* Enhanced Profile Image */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                        ⭐ {professional.rating}
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ✓ Verified
                      </div>
                    </div>

                    {/* Enhanced Professional Info */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4">
                        <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                          {professional.name}
                        </h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg px-4 py-1 rounded-full shadow-lg">
                            {professional.role}
                          </span>
                          <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                            <span className="text-yellow-500 mr-1">🏆</span>
                            Top Rated
                          </div>
                        </div>
                      </div>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 text-lg leading-relaxed`}>
                        {professional.description}
                      </p>
                      
                      {/* Enhanced Stats Section */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 text-center border border-white/20`}>
                          <div className="text-2xl font-bold text-blue-600">{professional.completedEvents}+</div>
                          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Events</div>
                        </div>
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 text-center border border-white/20`}>
                          <div className="text-2xl font-bold text-green-600">{professional.experience}</div>
                          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Experience</div>
                        </div>
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 text-center border border-white/20`}>
                          <div className="text-2xl font-bold text-purple-600">{professional.rating}</div>
                          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Rating</div>
                        </div>
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 text-center border border-white/20`}>
                          <div className="text-lg font-bold text-orange-600">Fast</div>
                          <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Response</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-6">
                        <div className={`flex items-center ${isDark ? 'bg-gray-700' : 'bg-blue-50'} px-4 py-2 rounded-full`}>
                          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{professional.location}</span>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                          From {professional.startingPrice}
                        </div>
                      </div>

                      {/* Enhanced Tags */}
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                        {professional.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`${isDark ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200'} px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                          >
                            ✨ {tag}
                          </span>
                        ))}
                      </div>

                      {/* Enhanced CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button 
                          onClick={() => {
                            setSelectedProfessional(professional);
                            setIsModalOpen(true);
                          }}
                          className={`${isDark ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group`}
                        >
                          <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Full Profile
                        </button>
                        <button 
                          onClick={() => handleSaveProfessional(professional.id)}
                          className={`${savedProfessionals.includes(professional.id) 
                            ? 'bg-red-500 hover:bg-red-600 text-white' 
                            : isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200'
                          } font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
                        >
                          <svg className="w-5 h-5 mr-2" fill={savedProfessionals.includes(professional.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {savedProfessionals.includes(professional.id) ? 'Saved' : 'Save'}
                        </button>
                      </div>
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
                  currentSlide === index ? (isDark ? 'bg-yellow-500' : 'bg-blue-600') : (isDark ? 'bg-gray-600' : 'bg-gray-300')
                }`}
              />
            ))}
          </div>
        </div>
        ) : (
          <div className="text-center py-16">
            <div className={`text-6xl mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>🔍</div>
            <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
              No professionals found
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Try selecting a different category or browse all professionals.
            </p>
          </div>
        )}

        {/* Professional Profile Modal */}
        {isModalOpen && selectedProfessional && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity bg-black/75" onClick={() => setIsModalOpen(false)}></div>
              
              <div className={`inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow-2xl rounded-2xl`}>
                {/* Header */}
                <div className={`relative ${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'} px-6 py-8 text-white`}>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center space-x-6">
                    <img
                      src={selectedProfessional.image}
                      alt={selectedProfessional.name}
                      className="w-24 h-24 rounded-full border-4 border-white/20"
                    />
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{selectedProfessional.name}</h2>
                      <p className="text-xl opacity-90 mb-2">{selectedProfessional.role}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                          <span className="font-semibold">{selectedProfessional.rating}</span>
                        </div>
                        <span className="opacity-75">•</span>
                        <span>{selectedProfessional.location}</span>
                        <span className="opacity-75">•</span>
                        <span className="font-semibold">From {selectedProfessional.startingPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="max-h-[70vh] overflow-y-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
                    {/* Left Column - Portfolio & About */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* About Section */}
                      <div>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>About</h3>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                          {selectedProfessional.about}
                        </p>
                      </div>

                      {/* Portfolio Gallery */}
                      <div>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Portfolio</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedProfessional.portfolio.map((image, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Services Offered</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedProfessional.services.map((service, index) => (
                            <div key={index} className={`${isDark ? 'bg-gray-700 text-gray-200' : 'bg-blue-50 text-blue-700'} px-4 py-2 rounded-lg text-sm font-medium`}>
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details & Contact */}
                    <div className="space-y-6">
                      {/* Quick Stats */}
                      <div className={`${isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'} rounded-xl p-6`}>
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Quick Stats</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Experience</span>
                            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProfessional.experience}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Events Completed</span>
                            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProfessional.completedEvents}+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Response Time</span>
                            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProfessional.responseTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Languages */}
                      <div className={`${isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'} rounded-xl p-6`}>
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProfessional.languages.map((language, index) => (
                            <span key={index} className={`${isDark ? 'bg-yellow-600/20 text-yellow-400' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full text-sm font-medium`}>
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Equipment/Tools */}
                      <div className={`${isDark ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'} rounded-xl p-6`}>
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Equipment & Tools</h4>
                        <ul className="space-y-2">
                          {selectedProfessional.equipment.map((item, index) => (
                            <li key={index} className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact Actions */}
                      <div className="space-y-3">
                        <a 
                          href={`mailto:${selectedProfessional.name.toLowerCase().replace(' ', '.')}@eventconnect.ke?subject=Event Inquiry - ${selectedProfessional.role}&body=Hi ${selectedProfessional.name},%0D%0A%0D%0AI'm interested in your ${selectedProfessional.role.toLowerCase()} services for my upcoming event.%0D%0A%0D%0APlease let me know your availability and we can discuss the details.%0D%0A%0D%0AThank you!`}
                          className={`w-full ${isDark ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center`}
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Send Message
                        </a>
                        <a 
                          href={`tel:+254${Math.floor(Math.random() * 900000000) + 700000000}`}
                          className={`w-full ${isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center`}
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call Now
                        </a>
                        <button 
                          onClick={() => handleSaveProfessional(selectedProfessional.id)}
                          className={`w-full ${savedProfessionals.includes(selectedProfessional.id) 
                            ? 'bg-red-500 hover:bg-red-600 text-white' 
                            : isDark ? 'border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                          } font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center`}
                        >
                          <svg className="w-5 h-5 mr-2" fill={savedProfessionals.includes(selectedProfessional.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {savedProfessionals.includes(selectedProfessional.id) ? 'Saved to Favorites' : 'Save to Favorites'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProfessionals;