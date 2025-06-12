'use client';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

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
      className={`bg-transparent w-full sticky top-0 z-50 ${poppins.className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between md:backdrop-blur-sm">
        <h1 className="text-gray-200 px-8 py-3 text-2xl font-bold tracking-wide cursor-pointer">
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex px-8 gap-6 text-1xl font-semibold text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <a href={link.href} className="relative z-10">
                {link.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-gray-200 text-3xl cursor-pointer transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? '✕' : '☰'}
        </div>
      </div>

      {/* Mobile Navigation with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3 px-6 py-4 bg-white/5 backdrop-blur-md backdrop-saturate-150 border border-white/10 rounded-xl shadow-lg md:hidden text-gray-100 text-base"
          >
            {navLinks.map((link) => (
              <li key={link.name} className="cursor-pointer">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
