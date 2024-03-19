import React from 'react';

export default function Footer({ copyright }) {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-6 py-4">
        <div className="text-center text-sm text-white font-bold">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
