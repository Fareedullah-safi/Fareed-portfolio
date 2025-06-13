import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0a1c28] text-gray-400 text-center py-6 border-t border-gray-700">
            <p className="text-sm md:text-base">
                &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Fareed</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
