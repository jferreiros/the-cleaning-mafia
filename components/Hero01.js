// components/HeroSection01.js
import React from 'react';
import heroSectionContent from '../content/hero01.json';

export default function Hero01() {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{heroSectionContent.title}</h1>
        <p className="text-xl mb-8">{heroSectionContent.subtitle}</p>
        <button className="bg-white text-blue-600 font-medium py-2 px-4 rounded hover:bg-gray-100 transition duration-300 ease-in-out">
          {heroSectionContent.cta}
        </button>
      </div>
    </section>
  );
}
