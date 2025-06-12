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
        <ul className="hidden md:flex gap-4 md:gap-6 text-base md:text-1xl font-semibold text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <span className="relative z-10">
                <a href={link.href}>{link.name}</a>
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
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
          className="flex flex-col gap-2 px-6 bg-transparent text-base font-medium text-gray-200 bg-white/0 backdrop-blur-md backdrop-saturate-150 border border-white/10 rounded-xl shadow-lg md:hidden "
        >
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer text-1xl">
              <span className="relative z-10">
                <a href={link.href}>{link.name}</a>
              </span>
              <span className="absolute left-0 bottom-0"></span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
