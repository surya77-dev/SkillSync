import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to SkillSync</h2>
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("🔐 Login successful! Welcome to SkillSync.");
            navigate("/Dashboard");
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
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
  )
}

export default LoginForm
