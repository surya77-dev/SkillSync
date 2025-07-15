import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can also use SVGs/icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-green-600">
          SkillSync
        </Link>

        {/* Hamburger Icon (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/browse" className="hover:text-green-600">Browse Freelancers</Link></li>
          <li><Link to="/post-job" className="hover:text-green-600">Post a Job</Link></li>
          <li><Link to="/Dashboard" className="hover:text-green-600">Dashboard</Link></li>
          <li><Link to="/NewUpdates" className="hover:text-green-600">WhatsNew</Link></li>
          <li><Link to="/About" className="hover:text-green-600">About</Link></li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-3">
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
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-700">
          <Link to="/" onClick={toggleMenu} className="block hover:text-green-600">Home</Link>
          <Link to="/browse" onClick={toggleMenu} className="block hover:text-green-600">Browse Freelancers</Link>
          <Link to="/post-job" onClick={toggleMenu} className="block hover:text-green-600">Post a Job</Link>
          <Link to="/Dashboard" onClick={toggleMenu} className="block hover:text-green-600">Dashboard</Link>
          <Link to="/NewUpdates" onClick={toggleMenu} className="block hover:text-green-600">WhatsNew</Link>
          <Link to="/About" onClick={toggleMenu} className="block hover:text-green-600">About</Link>
          <Link to="/login" onClick={toggleMenu} className="block text-green-600 mt-2">Login</Link>
          <Link to="/register" onClick={toggleMenu} className="block bg-green-600 text-white px-4 py-1 rounded-md mt-1 w-fit">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
