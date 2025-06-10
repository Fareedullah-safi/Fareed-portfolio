'use client';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'], // minimal weight
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${poppins.className} bg-[#080e28] w-full sticky top-0 z-50`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-10 py-3">
        <h1 className="text-gray-200 text-xl md:text-2xl font-semibold tracking-normal cursor-pointer">
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 md:gap-6 text-base md:text-1xl font-semibold text-gray-200">
          <li className="relative group cursor-pointer">
            <span className="relative z-10">
              <a href='#Home'>Home</a>
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="relative z-10">
              <a href="#About">
                About
              </a>
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="relative z-10">
              <a href="#Services">
                Services
              </a>
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="relative z-10">
              <a href="#Skills">
                Skills
              </a>
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="relative z-10">
              <a href="#Project">
                Project
              </a>
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="relative z-10">
              <a href="#Contact">
                Contact
              </a>
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Mobile Hamburger/Close Icon */}
        <div
          className="md:hidden text-gray-200 text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? '✕' : '☰'}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden flex flex-col items-start gap-3 px-6 pb-4 text-base font-medium text-gray-200 bg-gray-800 transition-all duration-300"
        >
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer w-full pt-1">
              {/* Use Link component for mobile nav items too */}
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {' '}
                {/* Close menu on click */}
                <span className="relative z-10">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;