import React from 'react';
import NavBar from './NavBar';
import { Outlet} from 'react-router-dom';

export default function Dashboard() {

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left side - NavBar */}
      <div className="w-64 bg-gray-800 p-4">
        <NavBar />
      </div>

      {/* Right side - DashboardContent */}
      <div className="flex-1 p-6 bg-gray-900">
            <Outlet></Outlet>
      </div>
    </div>
  );
}
