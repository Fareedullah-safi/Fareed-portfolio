'use client';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
});

const navLinks = [
  { name: 'Home', href: '#Home' },
  { name: 'About', href: '#About' },
  { name: 'Services', href: '#Services' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Project', href: '#Project' },
  { name: 'Contact', href: '#Contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${poppins.className} bg-transparent w-full sticky top-0 z-50`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-10 py-3">
        <h1 className="text-gray-200 text-xl md:text-2xl font-semibold tracking-normal cursor-pointer">
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 md:gap-6 text-base md:text-lg font-semibold text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <a href={link.href} className="relative z-10">
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-gray-200 text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? '✕' : '☰'}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-3 px-6 py-4 text-base font-medium text-white bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/10 rounded-xl shadow-xl md:hidden mx-4"
        >
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer text-lg">
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative z-10 inline-block"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
