import React from 'react';

export default function About({ image, title, content }) {
  return (
    <section className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-96 md:flex-row p-12">
      <div className="flex-1">
        <img src={image} alt="About Us" className="w-full h-auto object-cover rounded-lg shadow-md" />
      </div>
      <div className="flex-1 px-6 py-4">
        <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
    </section>
  );
}
