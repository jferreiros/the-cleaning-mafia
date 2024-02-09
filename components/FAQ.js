'use client';

import React, { useState } from 'react';
import faqContent from '../content/FAQ.json';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{faqContent.title}</h2>
        <div>
          {faqContent.faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-left w-full font-semibold py-2"
              >
                {faq.question}
              </button>
              <div className={`${openIndex === index ? 'block' : 'hidden'} text-gray-700`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
