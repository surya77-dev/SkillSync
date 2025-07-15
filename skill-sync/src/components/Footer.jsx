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

        {/* Surya Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">About the Creator</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-green-600">About Project</Link>
            </li>
            <li>
              <a
                href="https://github.com/surya77-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                GitHub: surya77-dev
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/suryananthan-s-4839682a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                LinkedIn: Suryananthan S
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Credit */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        Built with ❤️ by <span className="text-green-600 font-semibold">Suryananthan S</span> • Final Year CSE • 2025<br />
        © 2025 SkillSync. All rights reserved.
      </div>
    </footer>
  );
}
