import React from 'react';

export default function ClientLogos({ title, logos }) {
  return (
    <section className="p-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">{title}</h2>
        <div className="flex flex-wrap justify-center items-center">
          {logos.map((logo, index) => (
            <div key={index} className="p-4">
              <img src={logo.src} alt={logo.alt} className="h-12 md:h-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
