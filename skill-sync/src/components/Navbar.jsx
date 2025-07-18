import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, PlusCircle, LayoutDashboard, Bell } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <Home size={22} />, label: 'Home' },
    { path: '/browse', icon: <Briefcase size={22} />, label: 'Browse' },
    { path: '/post-job', icon: <PlusCircle size={22} />, label: 'Post' },
    { path: '/dashboard', icon: <LayoutDashboard size={22} />, label: 'Dashboard' },
    { path: '/newupdates', icon: <Bell size={22} />, label: 'Updates' },
  ];

  return (
    <>
      {/* Top Navbar (Desktop Only) */}
      <nav className="hidden md:flex justify-between items-center bg-white px-6 py-3 shadow-md sticky top-0 z-50">
        <Link to="/" className="text-2xl font-bold text-green-600">SkillSync</Link>

        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/home" className='hover:text-green-600'>Home</Link></li>
          <li><Link to="/browse" className="hover:text-green-600">Browse Freelancers</Link></li>
          <li><Link to="/post-job" className="hover:text-green-600">Post a Job</Link></li>
          <li><Link to="/dashboard" className="hover:text-green-600">Dashboard</Link></li>
          <li><Link to="/newupdates" className="hover:text-green-600">WhatsNew</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
        </ul>

        <div className="flex space-x-3">
          <Link to="/">
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50">Login</button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Register</button>
          </Link>
        </div>
      </nav>

      {/* Bottom Navbar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t z-50">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center text-xs ${
                location.pathname === item.path ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
