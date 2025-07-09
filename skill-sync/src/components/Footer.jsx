// src/components/Footer.jsx

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">SkillSync</h2>
          <p className="mt-2 text-sm text-gray-500">
            Connecting skills with opportunity — one job at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/browse" className="hover:text-green-600">Browse Freelancers</Link></li>
            <li><Link to="/post-job" className="hover:text-green-600">Post a Job</Link></li>
            <li><Link to="/login" className="hover:text-green-600">Login</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Surya!</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/About" className="hover:text-green-600">About Us</Link></li>
            <li><a href="https://github.com/surya77-dev" className="hover:text-green-600">Contact</a></li>
            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        © 2025 SkillSync. All rights reserved.
      </div>
    </footer>
  );
}
