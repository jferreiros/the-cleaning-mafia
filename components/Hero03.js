import React from 'react';

export default function Hero03({ title, subtitle, cta, backgroundImage }) {
  return (
    <section 
      className="text-white text-center py-20 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-50"></div>
      
      {/* Content */}
      <div className="max-w-5xl p-4 flex flex-col min-h-96 justify-center items-center mx-auto relative z-10">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <button className="bg-white text-primary font-medium py-2 px-4 rounded hover:bg-gray-100 transition duration-300 ease-in-out">
          {cta}
        </button>
      </div>
    </section>
  );
}
