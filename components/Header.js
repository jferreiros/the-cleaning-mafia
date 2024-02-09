// components/Header.js
import React from 'react';
import Link from 'next/link';
import navigationData from '../content/navigation.json';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-5">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <div className="flex space-x-4">
          {navigationData.navigation.map((item, index) => (
            <Link href={item.path} key={index}>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
