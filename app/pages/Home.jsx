import React from 'react';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Home = () => {
    return (
        <section className="bg-[#0a1c28] w-full grid grid-cols-1 md:grid-cols-2 h-screen">
            {/* Left Side Content */}
            <div className="flex flex-col items-center justify-center text-center px-6 md:px-0">
                {/* Mobile Avatar */}
                <div className="md:hidden mb-4">
                    <img
                        src="images/Fareed.png"
                        alt="Fareed Safi"
                        className="w-60 h-60 object-cover mt-3 rounded-full"
                    />
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300">Hello, It's Me</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Fareed Safi</h1>
                <h2 className="text-2xl lg:text-3xl font-medium text-gray-300 mt-1">
                    And I'm a <span className="text-cyan-500 font-semibold">Web Developer</span>
                </h2>

                <p className="text-gray-400 max-w-xl mt-4 text-sm md:text-base leading-relaxed">
                    I'm a web developer with over 1 year of experience. My expertise includes responsive frontend design, backend integration, and full-stack web development.
                </p>

                {/* Social Links */}
                <ul className="flex gap-4 text-xl text-gray-300 mt-4">
                    <li className="transition-all duration-300 hover:border-2 hover:border-cyan-500 rounded-full p-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className="transition-all duration-300 hover:border-2 hover:border-green-500 rounded-full p-2">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li className="transition-all duration-300 hover:border-2 hover:border-blue-500 rounded-full p-2">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="transition-all duration-300 hover:border-2 hover:border-white rounded-full p-2">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    </li>
                </ul>

                <button className="mt-5 bg-cyan-500 text-white px-6 py-2 rounded-2xl text-sm md:text-base font-semibold transition hover:bg-cyan-600">
                    More About Me
                </button>
            </div>

            {/* Right Side Image */}
            <div className="hidden md:flex justify-center items-center">
                <img
                    src="images/Fareed.png"
                    alt="Fareed Safi"
                    className="
      w-64 h-64        /* base size */
      sm:w-72 sm:h-72  /* small screens up */
      md:w-80 md:h-80  /* medium screens up */
      lg:w-96 lg:h-96  /* large screens up */
      object-cover
      rounded-full
      ring-2 ring-cyan-300/50      /* subtle outer ring */
      shadow-lg shadow-cyan-500/30 /* gentle colored shadow */
      transition-transform transition-shadow transition-ring
      duration-300 ease-in-out
      md:hover:scale-105            /* slight pop on hover */
      md:hover:shadow-2xl           /* deeper shadow on hover */
      md:hover:ring-4              /* accentuate ring on hover */
    "
                />
            </div>

        </section>
    );
};

export default Home;
