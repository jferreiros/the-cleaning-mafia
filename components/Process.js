import React from 'react';

export default function CleaningProcess({ title, steps }) {
  return (
    <section className="p-12 bg-primary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center text-white font-bold mb-12">{title}</h2>
        <div className="flex flex-wrap md:flex-nowrap">
          {steps.map((step, index) => (
            <div key={index} className={`md:flex-1 px-6 ${index !== steps.length - 1 ? 'mb-6 md:mb-0' : ''} ${index === 1 ? 'md:mx-4' : ''}`}>
              <div className="p-6 bg-white rounded-lg shadow-xl">
                <div className="mb-4">
                  <span className="text-primary text-xl font-bold">{step.phase}</span>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
