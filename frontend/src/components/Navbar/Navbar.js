import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">
            <a href="/" className="text-white hover:text-blue-400">
              LogoHere
            </a>
          </div>
        </div>

        {/* Search Box */}
        <div className="flex-grow max-w-lg mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
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
