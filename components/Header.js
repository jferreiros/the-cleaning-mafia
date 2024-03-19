import React from 'react';
import Link from 'next/link';

export default function Header({ logo, navItems, cta }) {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <img src={logo.src} alt={logo.alt} className="h-10 cursor-pointer" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="text-gray-800 hover:text-primary px-4 cursor-pointer">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href={cta.href}>
          <span className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300 ease-in-out cursor-pointer">
            {cta.text}
          </span>
        </Link>
      </div>
    </header>
  );
}
