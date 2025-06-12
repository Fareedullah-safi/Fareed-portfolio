import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='Contact' className="min-h-screen pt-15 p-8 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-gray-400">
            Feel free to reach out to discuss a project, collaboration, or just to say hi. I'm always open to new opportunities.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-cyan-400">✉</span>
              fareed.domain@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <span className="text-cyan-400">📞</span>
              +92 342 9698772
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://wa.me/+923429698772"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/fareed-safi-b1094a351/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Fareedullah-safi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 rounded bg-transparent border border-gray-700 focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 rounded bg-transparent border border-gray-700 focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="w-full p-3 rounded bg-transparent border border-gray-700 focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Enter Your Message"
              rows="6"
              className="w-full p-3 rounded bg-transparent border border-gray-700 focus:border-cyan-400 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-cyan-400 text-white font-semibold hover:bg-cyan-500 transition-colors
            cursor-pointer
            "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
