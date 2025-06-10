import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen p-8 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nobis possimus fenitur
            audem fugit? Dolorum cupiditate deleniti perspiciatis ea soluta repellat dignissimos qum
            assumenda, iusto quas nulla ullam. Quaerat, maiores!
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-cyan-400">✉</span>
              contact@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <span className="text-cyan-400">📞</span>
              012345678
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
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
            className="w-full p-3 rounded bg-cyan-400 text-white font-semibold hover:bg-cyan-500 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact