import React, { useState, useEffect } from 'react';
import ServiceForm from '../components/ServiceForm';

const Services = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/services`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleDelete = async (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/services/${serviceId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          fetchServices();
        }
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    setEditingService(null);
    fetchServices();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Services</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Service
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingService ? 'Edit Service' : 'Create New Service'}
          </h2>
          <ServiceForm
            initialValues={editingService}
            onSubmit={handleFormSubmit}
          />
          <button
            onClick={() => {
              setShowForm(false);
              setEditingService(null);
            }}
            className="mt-4 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-blue-600">${service.price}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{service.category}</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setEditingService(service);
                  setShowForm(true);
                }}
                className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded-md hover:bg-red-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {services.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No services found. Create your first service!</p>
        </div>
      )}
    </div>
  );
};

export default Services;