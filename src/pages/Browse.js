import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Browse = () => {
  const { isDark } = useTheme();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [professionals, setProfessionals] = useState([
    // Wedding Planning
    { id: 1, name: 'Grace Wanjiku', category: 'wedding', specialty: 'Wedding Planning & Coordination', location: 'Nairobi, Kenya', rating: 4.9, pricing: 'KSh250,000', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face', verified: true, email: 'grace@weddingplans.co.ke' },
    { id: 2, name: 'Michael Ochieng', category: 'wedding', specialty: 'Luxury Wedding Planning', location: 'Mombasa, Kenya', rating: 4.8, pricing: 'KSh400,000', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', verified: true, email: 'michael@luxuryweddings.ke' },
    { id: 3, name: 'Sarah Muthoni', category: 'wedding', specialty: 'Traditional Wedding Specialist', location: 'Nakuru, Kenya', rating: 4.7, pricing: 'KSh180,000', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face', verified: true, email: 'sarah@traditionweddings.ke' },
    
    // Corporate Events
    { id: 8, name: 'Robert Kimani', category: 'corporate', specialty: 'Corporate Event Management', location: 'Nairobi, Kenya', rating: 4.8, pricing: 'KSh150,000', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face', verified: true, email: 'robert@corporateevents.ke' },
    { id: 9, name: 'Jennifer Wanjiru', category: 'corporate', specialty: 'Conference & Seminar Planning', location: 'Nairobi, Kenya', rating: 4.9, pricing: 'KSh200,000', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face', verified: true, email: 'jennifer@conferences.ke' },
    
    // Party Planning
    { id: 14, name: 'Mary Wanjiku', category: 'party', specialty: 'Birthday Party Planning', location: 'Nairobi, Kenya', rating: 4.8, pricing: 'KSh65,000', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face', verified: true, email: 'mary@birthdayparties.ke' },
    { id: 15, name: 'Daniel Mwangi', category: 'party', specialty: 'Kids Party Specialist', location: 'Kiambu, Kenya', rating: 4.9, pricing: 'KSh45,000', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', verified: true, email: 'daniel@kidsparties.ke' },
    
    // Photography
    { id: 22, name: 'Sarah Johnson', category: 'photography', specialty: 'Wedding Photography', location: 'Nairobi, Kenya', rating: 4.9, pricing: 'KSh180,000', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face', verified: true, email: 'sarah@weddingphotos.ke' },
    { id: 23, name: 'James Mwangi', category: 'photography', specialty: 'Event Photography', location: 'Mombasa, Kenya', rating: 4.8, pricing: 'KSh120,000', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', verified: true, email: 'james@eventphotos.ke' },
    { id: 24, name: 'Linda Wanjiru', category: 'photography', specialty: 'Corporate Photography', location: 'Nairobi, Kenya', rating: 4.7, pricing: 'KSh95,000', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', verified: true, email: 'linda@corporatephotos.ke' },
    
    // Catering
    { id: 30, name: 'Joseph Kiprotich', category: 'catering', specialty: 'Traditional Kenyan Cuisine', location: 'Eldoret, Kenya', rating: 4.8, pricing: 'KSh2,800/person', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face', verified: true, email: 'joseph@traditionalkenyancuisine.ke' },
    
    // Entertainment
    { id: 37, name: 'DJ Mike Ochieng', category: 'entertainment', specialty: 'Wedding DJ Services', location: 'Nairobi, Kenya', rating: 4.8, pricing: 'KSh75,000', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face', verified: true, email: 'mike@weddingdj.ke' },
    { id: 38, name: 'Stella Wanjiru', category: 'entertainment', specialty: 'Live Band Performance', location: 'Mombasa, Kenya', rating: 4.9, pricing: 'KSh120,000', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face', verified: true, email: 'stella@liveband.ke' },
    
    // More Wedding Planning
    { id: 4, name: 'David Kiprop', category: 'wedding', specialty: 'Destination Wedding Planner', location: 'Naivasha, Kenya', rating: 4.9, pricing: 'KSh350,000', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face', verified: true, email: 'david@destinationweddings.ke' },
    { id: 5, name: 'Lucy Akinyi', category: 'wedding', specialty: 'Budget Wedding Planning', location: 'Kisumu, Kenya', rating: 4.6, pricing: 'KSh120,000', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face', verified: true, email: 'lucy@budgetweddings.ke' },
    
    // More Corporate Events
    { id: 10, name: 'Samuel Mutua', category: 'corporate', specialty: 'Product Launch Events', location: 'Mombasa, Kenya', rating: 4.7, pricing: 'KSh180,000', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face', verified: true, email: 'samuel@productlaunches.ke' },
    { id: 11, name: 'Catherine Njeri', category: 'corporate', specialty: 'Team Building Events', location: 'Nakuru, Kenya', rating: 4.8, pricing: 'KSh120,000', image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face', verified: true, email: 'catherine@teambuilding.ke' },
    { id: 12, name: 'John Kariuki', category: 'corporate', specialty: 'Executive Retreats', location: 'Naivasha, Kenya', rating: 4.9, pricing: 'KSh300,000', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80', verified: true, email: 'john@executiveretreats.ke' },
    
    // More Party Planning
    { id: 16, name: 'Rose Achieng', category: 'party', specialty: 'Graduation Party Planner', location: 'Kisumu, Kenya', rating: 4.7, pricing: 'KSh55,000', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face', verified: true, email: 'rose@graduationparties.ke' },
    { id: 17, name: 'Kevin Otieno', category: 'party', specialty: 'House Party Organizer', location: 'Mombasa, Kenya', rating: 4.6, pricing: 'KSh35,000', image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face', verified: true, email: 'kevin@houseparties.ke' },
    { id: 18, name: 'Faith Nyambura', category: 'party', specialty: 'Anniversary Celebrations', location: 'Nakuru, Kenya', rating: 4.8, pricing: 'KSh75,000', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face', verified: true, email: 'faith@anniversaries.ke' },
    
    // More Photography
    { id: 25, name: 'Patrick Omondi', category: 'photography', specialty: 'Portrait Photography', location: 'Kisumu, Kenya', rating: 4.8, pricing: 'KSh65,000', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face', verified: true, email: 'patrick@portraits.ke' },
    { id: 26, name: 'Nancy Chebet', category: 'photography', specialty: 'Fashion Photography', location: 'Nakuru, Kenya', rating: 4.9, pricing: 'KSh150,000', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face', verified: true, email: 'nancy@fashionphotos.ke' },
    { id: 27, name: 'George Kamau', category: 'photography', specialty: 'Product Photography', location: 'Thika, Kenya', rating: 4.6, pricing: 'KSh85,000', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face', verified: true, email: 'george@productphotos.ke' },
    
    // More Catering
    { id: 31, name: 'Margaret Njoki', category: 'catering', specialty: 'Wedding Catering', location: 'Mombasa, Kenya', rating: 4.7, pricing: 'KSh4,200/person', image: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400&h=400&fit=crop&crop=face', verified: true, email: 'margaret@weddingcatering.ke' },
    { id: 32, name: 'Hassan Mohamed', category: 'catering', specialty: 'Halal Catering', location: 'Mombasa, Kenya', rating: 4.9, pricing: 'KSh3,500/person', image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face&auto=format&q=80', verified: true, email: 'hassan@halalcatering.ke' },
    { id: 33, name: 'Grace Moraa', category: 'catering', specialty: 'Corporate Catering', location: 'Kisumu, Kenya', rating: 4.6, pricing: 'KSh3,200/person', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face', verified: true, email: 'grace@corporatecatering.ke' },
    
    // More Entertainment
    { id: 39, name: 'Collins Kiprop', category: 'entertainment', specialty: 'MC & Host Services', location: 'Eldoret, Kenya', rating: 4.7, pricing: 'KSh45,000', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80', verified: true, email: 'collins@mcservices.ke' },
    { id: 40, name: 'Mercy Akinyi', category: 'entertainment', specialty: 'Kids Entertainment', location: 'Kisumu, Kenya', rating: 4.8, pricing: 'KSh35,000', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80', verified: true, email: 'mercy@kidsentertainment.ke' },
    { id: 41, name: 'Victor Mutua', category: 'entertainment', specialty: 'Stand-up Comedy', location: 'Nairobi, Kenya', rating: 4.6, pricing: 'KSh55,000', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&auto=format&q=80', verified: true, email: 'victor@comedy.ke' },
    
    // Venue Coordinators
    { id: 43, name: 'Andrew Mwangi', category: 'venue', specialty: 'Wedding Venue Coordination', location: 'Nairobi, Kenya', rating: 4.8, pricing: 'KSh85,000', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face&auto=format&q=80', verified: true, email: 'andrew@weddingvenues.ke' },
    { id: 44, name: 'Caroline Njeri', category: 'venue', specialty: 'Corporate Venue Planning', location: 'Mombasa, Kenya', rating: 4.9, pricing: 'KSh120,000', image: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400&h=400&fit=crop&crop=face&auto=format&q=80', verified: true, email: 'caroline@corporatevenues.ke' },
    { id: 45, name: 'Stephen Kiprotich', category: 'venue', specialty: 'Outdoor Event Venues', location: 'Nakuru, Kenya', rating: 4.7, pricing: 'KSh95,000', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face&auto=format&q=80', verified: true, email: 'stephen@outdoorvenues.ke' }

  ]);
  const [categories, setCategories] = useState([
    { id: 'all', name: 'All Categories' },
    { id: 'wedding', name: 'Wedding Planning' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'party', name: 'Party Planning' },
    { id: 'photography', name: 'Photographer' },
    { id: 'catering', name: 'Catering' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'venue', name: 'Venue Coordinators' }
  ]);

  useEffect(() => {
    // Set category from URL parameter on initial load
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);



  const filteredProfessionals = professionals.filter(prof => {
    // Category filtering
    const matchesCategory = selectedCategory === 'all' || prof.category === selectedCategory;
    
    // Search filtering
    const matchesSearch = searchTerm === '' || 
                         prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (prof.location && prof.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (prof.specialty && prof.specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Debug logging
    if (selectedCategory === 'photography') {
      console.log('Selected category:', selectedCategory);
      console.log('Professional category:', prof.category);
      console.log('Matches category:', matchesCategory);
    }
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Browse Professionals</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Browse Professionals</h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>Find verified event professionals for your perfect celebration</p>
          
          {/* Search and Filter */}
          <div className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} rounded-xl shadow-lg p-6 transition-colors duration-300`}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by name, specialty, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isDark ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400' : 'bg-white border-gray-300'}`}
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  // Update URL to reflect the selected category
                  const newUrl = e.target.value === 'all' ? '/browse' : `/browse?category=${e.target.value}`;
                  window.history.pushState({}, '', newUrl);
                }}
                className={`px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white'}`}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProfessionals.length} professional{filteredProfessionals.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfessionals.map((professional, index) => (
            <div 
              key={professional.id} 
              className={`group ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-blue-50'} rounded-3xl shadow-xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500 rounded-full translate-y-8 -translate-x-8"></div>
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {professional.verified && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center shadow-lg backdrop-blur-sm border border-white/20">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Pro
                      </div>
                    )}
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20">
                      ⭐ Top Rated
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20 shadow-lg">
                    ✨ {professional.specialty}
                  </div>
                </div>
              </div>
              
              <div className="p-8 relative z-10">
                <div className="mb-4">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-blue-600 transition-colors duration-300`}>
                    {professional.name || professional.username}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-sm px-3 py-1 rounded-full capitalize">
                      {professional.category}
                    </span>
                    <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      <span className="text-yellow-500 mr-1">🏆</span>
                      Premium
                    </div>
                  </div>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm leading-relaxed line-clamp-2`}>{professional.bio || 'Professional event service provider with years of experience delivering exceptional results.'}</p>
                
                {/* Enhanced Info Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className={`${isDark ? 'bg-gray-700/50' : 'bg-blue-50'} backdrop-blur-sm rounded-xl p-3 border border-white/20`}>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium truncate`}>
                        {professional.location || 'Location TBD'}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`${isDark ? 'bg-gray-700/50' : 'bg-green-50'} backdrop-blur-sm rounded-xl p-3 border border-white/20`}>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span className="text-green-600 font-bold text-xs truncate">
                        {professional.pricing ? 
                          (professional.pricing.startsWith('$') ? 
                            `KSh${(parseFloat(professional.pricing.replace(/[$,]/g, '')) * 130).toLocaleString()}` : 
                            professional.pricing.replace('$', 'KSh')) : 
                          'Contact for pricing'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Rating Display */}
                <div className={`${isDark ? 'bg-gray-700/50' : 'bg-yellow-50'} backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-5 h-5 ${i < Math.floor(professional.rating || 4.5) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {professional.rating || '4.5'}
                      </span>
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
                      ({professional.reviews || '12'} reviews)
                    </span>
                  </div>
                  <div className="mt-2 bg-yellow-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((professional.rating || 4.5) / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Enhanced Action Buttons */}
                <div className="flex flex-col gap-3">
                  <a 
                    href={`mailto:${professional.email}`}
                    className={`${isDark ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg flex items-center justify-center group`}
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Professional
                  </a>
                  <div className="flex gap-2">
                    <a 
                      href={`tel:${professional.phone || ''}`}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl font-semibold transition-all duration-300 text-center transform hover:scale-105 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call
                    </a>
                    <button className={`flex-1 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} py-2 px-4 rounded-xl font-semibold transition-all duration-300 text-center transform hover:scale-105 flex items-center justify-center`}>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>No professionals found</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
              {professionals.length === 0 
                ? 'No professionals have registered yet. Be the first to join!' 
                : 'Try adjusting your search criteria or browse all categories.'}
            </p>
            <div className="space-x-4">
              {professionals.length > 0 && (
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              )}
              <Link 
                to="/signup" 
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                Join as Professional
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;