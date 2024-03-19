import React from 'react';

export default function Testimonials({ title, testimonials }) {
  return (
    <section className="p-12 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center text-primary font-bold mb-12">{title}</h2>
        <div className="flex flex-wrap justify-around items-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="bg-white rounded-lg shadow p-5">
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                <footer className="mt-4">
                  <p className="font-semibold text-primary">- {testimonial.author}</p>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
