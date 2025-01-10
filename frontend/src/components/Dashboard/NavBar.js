import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="h-full bg-gray-800 text-white flex flex-col p-4 shadow-lg rounded-lg">
      {/* NavBar Header */}
      <div className="text-2xl font-bold text-center mb-8">
        <h2>App Name</h2>
      </div>

      {/* Navigation Links */}
      <div className="space-y-6">
        <Link to='/Dashboard/feed'><NavItem label="Feed" /></Link>
        <Link to='/Dashboard/News'><NavItem label="News" /></Link>
        <Link to='/Dashboard'><NavItem label="Dashboard" /></Link>
      </div>
    </div>
  );
}

// NavItem component for reuse and better organization
const NavItem = ({ label }) => (
  <div className="text-xl font-medium text-gray-300 hover:text-gray-100 cursor-pointer transition-colors duration-200">
    {label}
  </div>
);
