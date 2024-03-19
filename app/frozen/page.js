// FrozenEmpanadasLanding.js

'use client'

import React from 'react';
import { useContent } from '../../hooks/useContent'; // Adjust the import path as needed
import Header from '@/components/Header';
import Hero03 from '@/components/Hero03'; // Specifically tailored to highlight the frozen empanadas offering
import FeatureSection from '@/components/Features'; // To showcase benefits and flavors
import Testimonials from '@/components/Testimonials'; // Feedback from businesses that have benefited
import CTA from '@/components/CTA'; // Strong call to action for inquiries or orders
import FAQSection from '@/components/FAQ'; // Addressing common questions from restaurants and bars
import Contact from '@/components/Contact'; // For direct inquiries and orders
import Footer from '@/components/Footer';

export default function FrozenEmpanadasLanding() {
  const content = useContent('frozen'); // Name of the JSON file for this page

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
