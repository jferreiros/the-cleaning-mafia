import React from 'react';

export default function PainSection({ number, title, description, question, painPoints }) {
  return (
    <section className="p-12">
      <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-center">{question}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {painPoints.map((point, index) => (
              <div key={index} className="p-2 shadow">
                {point}
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
