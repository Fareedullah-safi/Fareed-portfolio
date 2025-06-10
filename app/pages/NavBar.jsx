'use client';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['500'], // minimal weight
});

const navItems = ['Home', 'About', 'Service', 'Skills', 'Project', 'Contact'];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`${poppins.className} bg-[#080e28] w-full`} role="navigation" aria-label="Main navigation">
            <div className="flex items-center justify-between px-10  py-3">
                <h1 className="text-gray-200 text-xl md:text-2xl font-semibold tracking-normal cursor-pointer">
                    <Link href='/'>
                        Portfolio
                    </Link>
                </h1>

                <ul className="hidden md:flex gap-4 md:gap-6 text-base md:text-1xl font-semibold text-gray-200">
                    {navItems.map((item) => (
                        <li key={item} className="relative group cursor-pointer">
                            <span className="relative z-10">{item}</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#008B8B] transition-all duration-500 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                <div
                    className="md:hidden text-gray-200 text-2xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </div>
            </div>

            {isOpen && (
                <ul className="md:hidden flex flex-col items-start gap-3 px-6 pb-4 text-base font-medium text-gray-200 bg-gray-800 transition-all duration-300">
                    {navItems.map((item) => (
                        <li key={item} className="relative group cursor-pointer w-full pt-1">
                            <span className="relative z-10">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
