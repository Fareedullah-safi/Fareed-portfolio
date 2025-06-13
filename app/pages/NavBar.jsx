'use client';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Services', href: 'Services' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#Project' },
    { name: 'Contact', href: '#Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-2ss00">
          Port<span className="text-cyan-500">folio</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-cyan-500 duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden  text-2xl text-gray-200 cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden backdrop-blur-md bg-white/30 shadow-md backdrop-blur-lg p-6 space-y-4 text-gray-900 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="block hover:text-cyan-500 duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
