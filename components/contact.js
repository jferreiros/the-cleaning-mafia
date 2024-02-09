'use client'
import React, { useState } from 'react';
import contactContent from '../content/contact.json';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState(''); // Add state to store feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const formData = { name : 'Juan', email, message, form: 'Contact Form' };


    try {
      // Send data to your API route
      const response = await fetch('/api/send', { // Ensure the URL matches your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback('Your message has been sent successfully!'); // Provide success feedback
        setEmail(''); // Reset email field
        setMessage(''); // Reset message field
      } else {
        // Handle errors or unsuccessful submissions
        setFeedback('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Failed to submit the form', error);
      setFeedback('Failed to send your message. Please try again.');
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-center text-blue-600 font-bold mb-4">{contactContent.title}</h2>
        <p className="text-center text-gray-700 mb-8">{contactContent.subtitle}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-gray-700">{contactContent.emailLabel}</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required />
          </div>
          <div>
            <label htmlFor="message" className="text-gray-700">{contactContent.messageLabel}</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4" required></textarea>
          </div>
          {feedback && <p className="text-center text-gray-500">{feedback}</p>} {/* Display feedback */}
          <div className="text-center">
            <button type="submit" className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
              {contactContent.submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
