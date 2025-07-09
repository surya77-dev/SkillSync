import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  return (
    <>
      {/* Search Box */}
      <div className="relative w-full max-w-xl mx-auto lg:mx-0">
        <input
          type="text"
          placeholder="Search by role, skills, or keywords"
          className="w-full border border-gray-300 rounded-full py-3 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-green-600">
          <FaSearch />
        </button>
      </div>
    </>
  )
}

export default Searchbar