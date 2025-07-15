import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link from React Router

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <span className="text-xl font-bold text-green-600">SkillSync</span>
        </Link>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-green-600">Home</Link>
        </li>
        <li>
          <Link to="/browse" className="hover:text-green-600">Browse Freelancers</Link>
        </li>
        <li>
          <Link to="/post-job" className="hover:text-green-600">Post a Job</Link>
        </li>
        <li>
          <Link to="/Dashboard" className="hover:text-green-600">Dashboard</Link>
        </li>
        <li>
            <Link to="/NewUpdates" className="hover:text-green-600">WhatsNew</Link>
        </li>
        <li>
            <Link to="/About" className="hover:text-green-600">About</Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="space-x-3">
        <Link to="/login">
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
