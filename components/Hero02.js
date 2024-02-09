// components/HeroSection02.js
import React from 'react';
import heroSectionContent from '../content/Hero02.json';

export default function Hero02() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-blue-600 text-white text-center md:text-left">
      <div className="md:flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">{heroSectionContent.title}</h2>
        <p className="mb-8">{heroSectionContent.subtitle}</p>
        <button className="bg-white text-blue-600 font-medium py-2 px-4 rounded hover:bg-gray-100 transition duration-300 ease-in-out">
          {heroSectionContent.cta}
        </button>
      </div>
      <div className="md:flex-1">
        {/* Ensure the image path is correct */}
        <img src={heroSectionContent.image} alt="Cleaning Service" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
}
