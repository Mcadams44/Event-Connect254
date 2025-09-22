import React from 'react';
import HeroSection from '../components/HeroSection';
import SubscriptionPlans from '../components/SubscriptionPlans';
import ServicesSection from '../components/ServicesSection';
import FeaturedProfessionals from '../components/FeaturedProfessionals';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <SubscriptionPlans />
      <FeaturedProfessionals />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Homepage;
