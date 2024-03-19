// components/HeroSection02.js
import React from 'react';

export default function Hero02({ title, subtitle, cta, image }) {
  return (
    <section className="bg-primary">
      <div className="max-w-5xl mx-auto p-12 flex flex-col min-h-96 md:flex-row items-center  text-white text-center md:text-left">
        <div className="md:flex-1">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-8">{subtitle}</p>
          <button className="bg-white text-primary font-medium py-2 px-4 rounded hover:bg-gray-100 transition duration-300 ease-in-out">
            {cta}
          </button>
        </div>
        <div className="md:flex-1">
          {/* Ensure the image path is correct */}
          <img src={image} alt="Hero Image" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}
