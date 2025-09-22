import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Service name is required'),
  description: Yup.string().min(10, 'Description must be at least 10 characters').required('Description is required'),
  price: Yup.number().positive('Price must be positive').required('Price is required'),
  category: Yup.string().required('Category is required')
});

const ServiceForm = ({ onSubmit, initialValues = null }) => {
  const defaultValues = {
    name: '',
    description: '',
    price: '',
    category: 'photography'
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const token = localStorage.getItem('token');
      const url = initialValues 
        ? `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/services/${initialValues.id}`
        : `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/services`;
      
      const response = await fetch(url, {
        method: initialValues ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        onSubmit();
        if (!initialValues) resetForm();
      }
    } catch (error) {
      console.error('Error submitting service:', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Name</label>
            <Field
              type="text"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <Field
              as="textarea"
              name="description"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price ($)</label>
            <Field
              type="number"
              name="price"
              step="0.01"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage name="price" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <Field
              as="select"
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="photography">Photography</option>
              <option value="catering">Catering</option>
              <option value="planning">Event Planning</option>
              <option value="music">Music & Entertainment</option>
              <option value="decoration">Decoration</option>
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : (initialValues ? 'Update Service' : 'Create Service')}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ServiceForm;