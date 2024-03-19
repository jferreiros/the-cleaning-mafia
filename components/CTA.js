import React from 'react';
import Link from 'next/link';

export default function CtaSection({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="bg-primary text-white text-center ">
      <div className="max-w-5xl mx-auto p-12 min-h-96 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="my-2">{subtitle}</p>
        <Link href={buttonLink}>
          <span className="inline-block bg-secondary text-white py-2 px-6 rounded font-bold hover:bg-yellow-300 transition duration-300 ease-in-out">
            {buttonText}
          </span>
        </Link>
      </div>
    </section>
  );
}
