'use client'

import React from 'react';
import { useContent } from '../../hooks/useContent'; // Adjust the import path as needed
import Hero01 from '@/components/Hero01';
import Hero02 from '@/components/Hero02';
import Hero04 from '@/components/Hero04';
import Hero05 from '@/components/Hero05';
import HeroContact from '@/components/HeroContact';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQ';
import About from '@/components/about';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Subscribe from '@/components/Subscribe';
import Subscribe02 from '@/components/Subscribe02';
import PainSection from '@/components/Pain';
import ClientLogos from '@/components/Clients';
import Footer from '@/components/Footer';
import Hero03 from '@/components/Hero03';
import FeatureSection from '@/components/Features';
import CtaSection from '@/components/CTA';

export default function HomePage() {
  const content = useContent('library'); // Name of your JSON file without the extension

  if (!content) {
    return <div>Loading...</div>; // Or any other loading state
  }

  const { 
    header,
    hero01,
    hero02,
    hero03,
    faq,
    about,
    contact,
    process,
    testimonials,
    benefits,
    subscribe,
    pain,
    clientLogos,
    featureSection,
    ctaSection,
    heroContact,
    footer
   } = content.components;

  return (
    <div>
      <Header {...header} />
      <Hero01 {...hero01} />
      <Hero02 {...hero02} />
      <Hero03 {...hero03} />
      <Hero04 {...hero01} />
      <Hero05 {...hero01} />
      <HeroContact {...heroContact} />
      <FAQSection {...faq} />
      <About {...about} />
      <Contact {...contact} />
      <Process {...process} />
      <Testimonials {...testimonials}/>
      <Benefits {...benefits} />
      <Subscribe {...subscribe} />
      <Subscribe02  {...subscribe}  />
      <PainSection {...pain} />
      <ClientLogos {...clientLogos} />
      <FeatureSection {...featureSection} />
      <CtaSection {...ctaSection} />
      <Footer {...footer} />
    </div>
  );
}
