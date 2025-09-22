import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProfessionalSetup = () => {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    specialty: '',
    location: '',
    phone: '',
    bio: '',
    pricing: '',
    portfolio: []
  });

  const categories = [
    'photographer',
    'videographer', 
    'dj',
    'producer',
    'web designer',
    'event planner',
    'caterer',
    'decorator',
    'venue coordinator'
  ];

  const addPortfolioItem = () => {
    if (formData.portfolio.length < 10) {
      const newItem = {
        id: Date.now(),
        title: '',
        description: '',
        image: null,
        imagePreview: null
      };
      setFormData({
        ...formData,
        portfolio: [...formData.portfolio, newItem]
      });
    }
  };

  const handleImageUpload = (id, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updatePortfolioItem(id, 'image', file);
        updatePortfolioItem(id, 'imagePreview', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updatePortfolioItem = (id, field, value) => {
    setFormData({
      ...formData,
      portfolio: formData.portfolio.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  const removePortfolioItem = (id) => {
    setFormData({
      ...formData,
      portfolio: formData.portfolio.filter(item => item.id !== id)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      
      // If no token, just update locally
      if (!token) {
        updateProfile({
          ...formData,
          services: [formData.category],
          setupComplete: true
        });
        navigate('/dashboard');
        return;
      }
      
      const apiUrls = [
        process.env.REACT_APP_API_URL,
        process.env.REACT_APP_BACKUP_API_URL,
        'http://localhost:5000'
      ].filter(Boolean);

      let success = false;
      for (const apiUrl of apiUrls) {
        try {
          const response = await fetch(`${apiUrl}/api/professional-profile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              ...formData,
              setupComplete: true
            })
          });
          
          if (response.ok) {
            success = true;
            break;
          }
        } catch (error) {
          console.log(`Failed to connect to ${apiUrl}:`, error);
          continue;
        }
      }
      
      updateProfile({
        ...formData,
        services: [formData.category],
        setupComplete: true
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving profile:', error);
      // Fallback to local storage
      updateProfile({
        ...formData,
        services: [formData.category],
        setupComplete: true
      });
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen section-bg py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Professional Profile</h1>
            <p className="text-gray-600">Add your details to start getting clients</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Category *</label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="capitalize">{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                <input
                  type="text"
                  value={formData.specialty}
                  onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                  placeholder="e.g., Wedding Photography"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="City, State"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pricing</label>
                <input
                  type="text"
                  value={formData.pricing}
                  onChange={(e) => setFormData({...formData, pricing: e.target.value})}
                  placeholder="e.g., $150/hour or $500/event"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio *</label>
              <textarea
                required
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                placeholder="Tell clients about yourself and your services..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Portfolio (Max 10 photos)</h3>
                {formData.portfolio.length < 10 && (
                  <button
                    type="button"
                    onClick={addPortfolioItem}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add Photo
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.portfolio.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    {item.imagePreview ? (
                      <img
                        src={item.imagePreview}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                    ) : (
                      <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-gray-400">No image selected</span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(item.id, e.target.files[0])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updatePortfolioItem(item.id, 'title', e.target.value)}
                      placeholder="Photo title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <textarea
                      value={item.description}
                      onChange={(e) => updatePortfolioItem(item.id, 'description', e.target.value)}
                      placeholder="Photo description"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                      rows={2}
                    />
                    <button
                      type="button"
                      onClick={() => removePortfolioItem(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove Photo
                    </button>
                  </div>
                ))}
              </div>

              {formData.portfolio.length === 0 && (
                <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                  <p>No portfolio photos yet. Add your best work to attract clients!</p>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Skip for Now
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Complete Setup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSetup;