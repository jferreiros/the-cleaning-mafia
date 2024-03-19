'use client'
import React, { useState } from 'react';

export default function Subscribe02({ title, description, buttonText }) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement the logic to handle the subscription with the email address
    // This might involve sending the email to a backend service or an API that handles newsletter subscriptions
    console.log('Subscribing with email:', email);
    // Reset the email input after submission or provide feedback to the user
    setEmail('');
    // Provide feedback to the user, such as a success message
  };

  return (
    <section className="p-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-gray-700 mb-8">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1 block w-3/4 md:w-1/2 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
