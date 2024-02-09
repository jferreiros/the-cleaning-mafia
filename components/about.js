// components/AboutSection.js
import React from 'react';
import aboutContent from '../content/aboutUs.json';

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center my-12">
      <div className="flex-1">
        {/* Ensure the image path is correct */}
        <img src={aboutContent.image} alt="About The Cleaning Mafia" className="w-full h-auto object-cover rounded-lg shadow-md" />
      </div>
      <div className="flex-1 px-6 py-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{aboutContent.title}</h2>
        <p className="text-gray-700">{aboutContent.content}</p>
      </div>
    </section>
  );
}
