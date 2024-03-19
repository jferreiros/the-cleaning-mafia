'use client'
import React, { useState } from 'react';

export default function Contact({ title, subtitle, emailLabel, messageLabel, submitButton }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name: 'Juan', email, message, form: 'Contact Form' };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback('Your message has been sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        setFeedback('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Failed to submit the form', error);
      setFeedback('Failed to send your message. Please try again.');
    }
  };

  return (
    <section className="p-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center text-primary font-bold mb-4">{title}</h2>
        <p className="text-center text-gray-700 mb-8">{subtitle}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-gray-700">{emailLabel}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="text-gray-700">{messageLabel}</label>
            <textarea 
              id="message" 
              name="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4" 
              required
            ></textarea>
          </div>
          {feedback && <p className="text-center text-gray-500">{feedback}</p>}
          <div className="text-center">
            <button type="submit" className="inline-block bg-primary text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
              {submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
