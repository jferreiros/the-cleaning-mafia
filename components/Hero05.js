import React from 'react';
import ButtonPrimary from './ButtonPrimary';

export default function Hero04({ title, subtitle, cta }) {
  return (
    <section className="bg-white text-left p-12">
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-start min-h-96">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <ButtonPrimary children={cta}/>
      </div>
    </section>
  );
}
