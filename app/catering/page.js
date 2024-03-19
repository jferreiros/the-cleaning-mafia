// CateringEventsLanding.js

'use client'

import React from 'react';
import { useContent } from '../../hooks/useContent'; // Adjust the import path as needed
import Header from '@/components/Header';
import Hero03 from '@/components/Hero03'; // Adapted for catering-specific introduction
import FeatureSection from '@/components/Features'; // To highlight catering service features
import Testimonials from '@/components/Testimonials'; // Showcasing feedback from catering clients
import CTA from '@/components/CTA'; // Call to action for booking catering services
import FAQSection from '@/components/FAQ'; // FAQs for potential catering questions
import Contact from '@/components/Contact'; // Enhanced contact form for direct inquiries
import Footer from '@/components/Footer';

export default function CateringEventsLanding() {
  const content = useContent('catering'); // Name of the JSON file for this page

  if (!content) {
    return <div>Loading...</div>; // Or any other loading state
  }

  const {
    header,
    hero03,
    featureSection,
    testimonials,
    cta,
    faq,
    contact,
    footer
  } = content.components;

  return (
    <div>
      <Header {...header} />
      <Hero03 {...hero03} />
      <FeatureSection {...featureSection} />
      <Testimonials {...testimonials} />
      <CTA {...cta} />
      <FAQSection {...faq} />
      <Contact {...contact} />
      <Footer {...footer} />
    </div>
  );
}
