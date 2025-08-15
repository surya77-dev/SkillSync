import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row  justify-center items-center py-12 px-4 bg-gray-50 min-h-screen">
      {/* Left Side Text */}
      <div className="hidden lg:flex flex-col gap-4 max-w-md mr-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome Back to <span className="text-green-600">SkillSync</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Connect with top freelancers, post jobs, and manage your work effortlessly.
        </p>
        <ul className="text-gray-500 list-disc ml-5 mt-2 text-sm space-y-1">
          <li>🔐 Secure Login</li>
          <li>💼 Manage Projects</li>
          <li>📈 Track Your Progress</li>
        </ul>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to SkillSync</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            // Dummy login validation
            if (email === 'user@skillsync.com' && password === '123456') {
              localStorage.setItem("isLoggedIn", "true"); // ✅ store login state
              alert("🔐 Login successful! Welcome to SkillSync.");
              navigate("/home");
            } else {
              alert("❌ Invalid credentials. Try again.");
            }
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="user@skillsync.com"
              defaultValue="user@skillsync.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="123456"
              defaultValue="123456"
              required
            />
          </div>


          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don&apos;t have an account?
          <Link to="/register">
            <button className="ml-1 text-green-600 hover:underline">Register</button>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
