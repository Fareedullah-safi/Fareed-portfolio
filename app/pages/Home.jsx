'use client';
import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Home = () => {
    const [downloadCV, setDownloadCV] = useState(false);

    const handleDownload = () => {
        setDownloadCV(true);
        setTimeout(() => setDownloadCV(false), 2000);
    };

    return (
        <section
            id="Home"
            className="bg-[#0a1c28] text-white w-full pt-24 md:pt-32 md:pb-28"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side */}
                <div className="flex flex-col items-center md:items-center text-center md:text-left">
                    {/* Mobile Avatar */}
                    <div className="md:hidden mb-6">
                        <img
                            src="https://res.cloudinary.com/dbz6ftcwo/image/upload/v1758961809/Fareed_jbxv4r.png"
                            alt="Fareed Safi"
                            className="w-48 h-48 object-cover rounded-full ring-2 ring-cyan-400/60 shadow-lg"
                        />
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300">Hello, It's Me</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-1">Fareed Safi</h1>
                    <h2 className="text-2xl lg:text-3xl font-medium text-gray-300 mt-2">
                        And I'm a <span className="text-cyan-500 font-semibold">Web Developer</span>
                    </h2>

                    <p className="text-gray-400 text-center mt-4 max-w-lg leading-relaxed text-sm md:text-base">
                        I'm a web developer with 1+ year of experience in building responsive interfaces,
                        integrating backends, and crafting full-stack web solutions with modern technologies like Next Js.
                    </p>
                    {/* Contact section */}

                    {/* Social Links */}
                    <ul className="flex gap-4 mt-6 text-xl text-gray-300">
                        <li className="hover:border-2 hover:border-cyan-500 rounded-full p-2 transition">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li className="hover:border-2 hover:border-green-500 rounded-full p-2 transition">
                            <a href="https://wa.me/+923429698772" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </li>
                        <li className="hover:border-2 hover:border-blue-500 rounded-full p-2 transition">
                            <a href="https://www.linkedin.com/in/fareed-safi-b1094a351/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="hover:border-2 hover:border-white rounded-full p-2 transition">
                            <a href="https://github.com/Fareedullah-safi" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>

                    {/* Download Button */}
                    <a
                        href="images/Fareed CV.pdf"
                        onClick={handleDownload}
                        className="mt-6 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-400 transition px-6 py-2 rounded-xl font-medium text-sm md:text-base"
                    >
                        {downloadCV ? 'Downloading CV...' : 'Download CV'}
                    </a>
                </div>

                {/* Right Side Avatar */}
                <div className="hidden md:flex justify-center items-center">
                    <img
                        src="https://res.cloudinary.com/dbz6ftcwo/image/upload/v1758961809/Fareed_jbxv4r.png"
                        alt="Fareed Safi"
                        className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full ring-2 ring-cyan-300/50 shadow-xl transition-transform hover:scale-105 shadow-lg shadow-cyan-600"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
