import React from 'react';

export default function Benefits({ title, benefits }) {
  return (
    <section className="p-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center text-primary font-bold mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img src={benefit.icon} alt="" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
