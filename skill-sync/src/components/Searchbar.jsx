import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ filters, setFilters }) => {
  const [input, setInput] = useState(filters.jobTitle);

  const handleSearch = () => {
    setFilters({ ...filters, jobTitle: input });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value === "") {
      setFilters({ ...filters, jobTitle: "" });
    }
  };

  return (
    <>
      {/* Search Box */}
      <div className='flex justify-center w-full my-4'>
      <div className="relative w-full max-w-xl mx-auto lg:mx-0">
        <input
          type="text"
          value={input}
          placeholder="Search by role, skills"
          className="w-full border border-gray-300 rounded-full py-3 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-green-600"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
      </div>
    </>
  )
}

export default Searchbar