// HomePage.js

'use client'

import React from 'react';
import { useContent } from '../hooks/useContent'; // Adjust the import path as needed
import Header from '@/components/Header';
import Hero03 from '@/components/Hero03'; // Adapting the hero section for a vibrant introduction
import FeatureSection from '@/components/Features'; // To showcase empanada flavors and highlight services
import CtaSection from '@/components/CTA'; // Utilizing CTA for business lines
import About from '@/components/about'; // Detailed about section for Kiki Empanadas
import Testimonials from '@/components/Testimonials'; // For customer feedback
import Contact from '@/components/Contact'; // Enhanced contact form for inquiries or direct bookings
import Footer from '@/components/Footer';

export default function HomePage() {
  const content = useContent('home'); // Adjust the JSON file name as needed

  if (!content) {
    return <div>Loading...</div>; // Or any other loading state
  }

  const {
    header,
    hero03,
    featureSection,
    ctaCateringEvents,
    ctaFarmerMarket,
    ctaFrozenEmpanadas,
    ctaFoodTruck,
    about,
    testimonials,
    contact,
    footer
  } = content.components;

  return (
    <div>
      <Header {...header} />
      <Hero03 {...hero03} />
      <FeatureSection {...featureSection} />
      {/* Adapted CTA sections for each business line, might need custom implementation */}
      <CtaSection {...ctaCateringEvents} />
      <CtaSection {...ctaFarmerMarket} />
      <CtaSection {...ctaFrozenEmpanadas} />
      <CtaSection {...ctaFoodTruck} />
      <About {...about} />
      <Testimonials {...testimonials} />
      <Contact {...contact} />
      <Footer {...footer} />
    </div>
  );
}
