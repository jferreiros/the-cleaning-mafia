'use client';

import React, { useState } from 'react';

export default function FAQSection({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-950">{title}</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="max-w-2xl mx-auto">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-left w-full font-semibold p-4 border text-white bg-primary rounded-md"
              >
                {faq.question}
              </button>
              <div className={`${openIndex === index ? 'block' : 'hidden'} text-gray-700 p-4`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
