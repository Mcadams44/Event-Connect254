import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  userType: Yup.string().required('User type is required')
});

const Login = () => {
  const { login } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    const apiUrls = [
      process.env.REACT_APP_API_URL,
      process.env.REACT_APP_BACKUP_API_URL,
      'http://localhost:5000'
    ].filter(Boolean);

    for (const apiUrl of apiUrls) {
      try {
        const response = await fetch(`${apiUrl}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.access_token);
          login(data.user);
          navigate(values.userType === 'professional' ? '/dashboard' : '/');
          setSubmitting(false);
          return;
        } else {
          const data = await response.json();
          setFieldError('email', data.message || 'Login failed');
          setSubmitting(false);
          return;
        }
      } catch (error) {
        console.log(`Failed to connect to ${apiUrl}:`, error);
        continue;
      }
    }
    
    setFieldError('email', 'Unable to connect to server. Please try again later.');
    setSubmitting(false);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-300`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className={`mt-6 text-center text-3xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Sign in to EventConnect
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} py-8 px-4 shadow sm:rounded-lg sm:px-10 transition-colors duration-300`}>
          <Formik
            initialValues={{ email: '', password: '', userType: 'client' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    I am a:
                  </label>
                  <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center">
                      <Field type="radio" name="userType" value="client" className="text-blue-600" />
                      <span className="ml-2">Client</span>
                    </label>
                    <label className="inline-flex items-center">
                      <Field type="radio" name="userType" value="professional" className="text-blue-600" />
                      <span className="ml-2">Professional</span>
                    </label>
                  </div>
                  <ErrorMessage name="userType" component="div" className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isDark ? 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors duration-300`}
                >
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-6">
            <div className="text-center">
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Don't have an account?{' '}
                <Link to="/signup" className={`font-medium ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-300`}>
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;