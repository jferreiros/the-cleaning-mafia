// FoodTruckLanding.js

'use client'

import React from 'react';
import { useContent } from '../../hooks/useContent'; // Adjust the import path as needed
import Header from '@/components/Header';
import Hero03 from '@/components/Hero03'; // Tailored for the food truck's vibrant appeal
import FeatureSection from '@/components/Features'; // Highlights of the food truck's offerings
// import Schedule from '@/components/Schedule'; // Custom component to display the food truck's schedule (Assuming availability in your components)
import Testimonials from '@/components/Testimonials'; // Customer feedback on the food truck experience
import CTA from '@/components/CTA'; // Call to action for event booking or inquiries
import FAQSection from '@/components/FAQ'; // FAQs specifically about the food truck service
import Contact from '@/components/Contact'; // Contact form for direct inquiries or bookings
import Footer from '@/components/Footer';

export default function FoodTruckLanding() {
  const content = useContent('food-truck'); // JSON file name for this page

  if (!content) {
    return <div>Loading...</div>; // Or any other loading state
  }

  const {
    header,
    hero03,
    featureSection,
    schedule,
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
      {/* <Schedule {...schedule} /> */}
      <Testimonials {...testimonials} />
      <CTA {...cta} />
      <FAQSection {...faq} />
      <Contact {...contact} />
      <Footer {...footer} />
    </div>
  );
}
