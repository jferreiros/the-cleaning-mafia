// components/HeroSection01.js
import React from 'react';

export default function Hero01({ title, subtitle, cta }) {
  return (
    <section className="bg-primary text-white text-center p-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-96">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <button className="bg-white text-primary font-medium py-2 px-4 rounded hover:bg-gray-100 transition duration-300 ease-in-out">
          {cta}
        </button>
      </div>
    </section>
  );
}
