import React from 'react';
import Image from 'next/image';

export default function FeatureSection({ title, features, imageUrl, imageAlt }) {
  return (
    <section className="p-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center text-primary font-bold mb-12">{title}</h2>
        <div className="flex flex-wrap items-center justify-center">
          {/* Features List with Icons */}
          <div className="w-full md:w-1/2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center mb-4">
                <img src={feature.icon} alt={feature.alt} className="h-6 w-6 mr-2" />
                <p>{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Centered Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Adjust layout and sizing as needed */}
            <Image src={imageUrl} alt={imageAlt} width={500} height={300} objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
