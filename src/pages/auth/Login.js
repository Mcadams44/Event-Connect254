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
    <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse ${
          isDark ? 'bg-yellow-500' : 'bg-blue-500'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse ${
          isDark ? 'bg-orange-500' : 'bg-purple-500'
        }`} style={{animationDelay: '2s'}}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse ${
          isDark ? 'bg-red-500' : 'bg-pink-500'
        }`} style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            Welcome back to <span className={`bg-clip-text text-transparent ${
              isDark 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                : 'bg-gradient-to-r from-blue-400 to-purple-400'
            }`}>EventConnect</span>
          </h2>
          <p className="text-gray-300 text-lg">Sign in to your account</p>
        </div>
      </div>

      <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl py-8 px-6 sm:px-10">
          <Formik
            initialValues={{ email: '', password: '', userType: 'client' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    I am a:
                  </label>
                  <Field name="userType">
                    {({ field }) => (
                      <div className="grid grid-cols-2 gap-3">
                        <label className="relative cursor-pointer">
                          <input
                            type="radio"
                            {...field}
                            value="client"
                            checked={field.value === 'client'}
                            className="sr-only"
                          />
                          <div className={`border rounded-xl p-3 transition-all duration-300 flex items-center justify-center space-x-2 ${
                            field.value === 'client'
                              ? 'bg-blue-500/30 border-blue-400 shadow-lg'
                              : 'bg-white/10 border-white/20 hover:bg-white/20'
                          }`}>
                            <div className={`w-3 h-3 border-2 rounded-full flex items-center justify-center ${
                              field.value === 'client' ? 'border-blue-400' : 'border-white'
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full transition-opacity ${
                                field.value === 'client' ? 'bg-blue-400 opacity-100' : 'bg-white opacity-0'
                              }`}></div>
                            </div>
                            <span className="text-white font-medium text-sm">Client</span>
                          </div>
                        </label>
                        <label className="relative cursor-pointer">
                          <input
                            type="radio"
                            {...field}
                            value="professional"
                            checked={field.value === 'professional'}
                            className="sr-only"
                          />
                          <div className={`border rounded-xl p-3 transition-all duration-300 flex items-center justify-center space-x-2 ${
                            field.value === 'professional'
                              ? 'bg-purple-500/30 border-purple-400 shadow-lg'
                              : 'bg-white/10 border-white/20 hover:bg-white/20'
                          }`}>
                            <div className={`w-3 h-3 border-2 rounded-full flex items-center justify-center ${
                              field.value === 'professional' ? 'border-purple-400' : 'border-white'
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full transition-opacity ${
                                field.value === 'professional' ? 'bg-purple-400 opacity-100' : 'bg-white opacity-0'
                              }`}></div>
                            </div>
                            <span className="text-white font-medium text-sm">Professional</span>
                          </div>
                        </label>
                      </div>
                    )}
                  </Field>
                  <ErrorMessage name="userType" component="div" className="text-red-400 text-sm mt-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-2" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:transform-none shadow-lg hover:shadow-xl text-white ${
                    isDark 
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 focus:ring-yellow-400'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-blue-400'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full">Don't have an account?</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link 
                to="/signup" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;