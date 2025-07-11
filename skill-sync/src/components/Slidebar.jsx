import React from 'react';

const Slidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-white border border-gray-200 p-4 rounded-lg shadow-sm sticky top-20 mr-0 h-fit">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Filters</h2>

      {/* Skills Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "Tailwind", "Figma", "JavaScript", "Python", "Adobe XD"].map(skill => (
            <label key={skill} className="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" value={skill} className="accent-green-600" />
              <span>{skill}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Experience Level</h3>
        {["Beginner", "Intermediate", "Expert"].map(level => (
          <label key={level} className="block text-sm text-gray-600 mb-1">
            <input type="radio" name="experience" value={level} className="accent-green-600 mr-2" />
            {level}
          </label>
        ))}
      </div>

      {/* Hourly Rate */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Hourly Rate ($)</h3>
        <div className="flex items-center space-x-2">
          <input type="number" placeholder="Min" className="w-1/2 p-1 border rounded text-sm" />
          <span>–</span>
          <input type="number" placeholder="Max" className="w-1/2 p-1 border rounded text-sm" />
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Rating</h3>
        {["4.0+", "4.5+", "5.0"].map(rate => (
          <label key={rate} className="block text-sm text-gray-600 mb-1">
            <input type="radio" name="rating" value={rate} className="accent-green-600 mr-2" />
            {rate} Stars
          </label>
        ))}
      </div>

      {/* Sort Option */}
      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Sort By</h3>
        <select className="w-full p-2 border rounded text-sm">
          <option value="default">Default</option>
          <option value="rateAsc">Hourly Rate ↑</option>
          <option value="rateDesc">Hourly Rate ↓</option>
          <option value="ratingAsc">Rating ↑</option>
          <option value="ratingDesc">Rating ↓</option>
        </select>
      </div>
    </aside>
  );
};

export default Slidebar;
