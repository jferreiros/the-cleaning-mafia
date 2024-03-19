// FarmerMarketLanding.js

'use client'

import React from 'react';
import { useContent } from '../../hooks/useContent'; // Adjust the import path as needed
import Header from '@/components/Header';
import Hero02 from '@/components/Hero02'; // A vibrant introduction specific to the farmer market
import About from '@/components/about'; // Sharing the story behind Kiki Empanadas' venture into farmer markets
import CTA from '@/components/CTA'; // Call to action for signing up for updates or inquiries
import Subscribe from '@/components/Subscribe'; // Subscription form for updates on the launch
import Testimonials from '@/components/Testimonials'; // Testimonials to build trust and anticipation
import Footer from '@/components/Footer';

export default function FarmerMarketLanding() {
  const content = useContent('farmer-market'); // JSON file name for this page

  if (!content) {
    return <div>Loading...</div>; // Or any other loading state
  }

  const {
    header,
    hero02,
    about,
    cta,
    subscribe,
    testimonials,
    footer
  } = content.components;

  return (
    <div>
      <Header {...header} />
      <Hero02 {...hero02} />
      <About {...about} />
      <CTA {...cta} />
      <Subscribe {...subscribe} />
      <Testimonials {...testimonials} />
      <Footer {...footer} />
    </div>
  );
}
