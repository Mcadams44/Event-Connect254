import React from 'react';
import HeroSection from '../components/HeroSection';
import SubscriptionPlans from '../components/SubscriptionPlans';
import ServicesSection from '../components/ServicesSection';
import FeaturedProfessionals from '../components/FeaturedProfessionals';
import TestimonialsSection from '../components/TestimonialsSection';

import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProfessionals />
      <ServicesSection />
      <SubscriptionPlans />
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default Homepage;
