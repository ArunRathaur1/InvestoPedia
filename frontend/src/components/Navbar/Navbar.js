import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/" className="text-white hover:text-blue-400" style={{paddingRight:"50px"}}>
            LogoHere
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`lg:flex flex-grow items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <a href="#feed" className="py-2 lg:py-0 hover:text-blue-400">
              Feed
            </a>
            <a href="#charts" className="py-2 lg:py-0 hover:text-blue-400">
              Charts
            </a>
            <a href="#news" className="py-2 lg:py-0 hover:text-blue-400">
              News
            </a>
          </div>

          {/* Search Box */}
          <div className="mt-4 lg:mt-0 flex-grow max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div
          className={`mt-4 lg:mt-0 flex flex-col lg:flex-row lg:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <button className="px-4 py-2 mb-2 lg:mb-0 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
            Log In
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-700 border border-blue-600 hover:bg-gray-600 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
