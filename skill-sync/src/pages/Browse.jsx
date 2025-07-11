import React from 'react'
import JobList from '../components/JobList'
import Slidebar from '../components/Slidebar'

const Browse = () => {
  return (
    <>
    <section className="relative bg-white">
  <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center justify-center text-center gap-10">
    {/* Centered Text Content */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Explore <span className="text-green-600">Top</span> Freelance Talent.
      </h1>
      <p className="text-gray-600 text-lg font-poppins font-light leading-relaxed max-w-xl mx-auto">
        Browse skilled professionals across design, development, writing, and more.
      </p>
    </div>
  </div>
</section>
    <div className="flex flex-col md:flex-row gap-6 py-8 max-w-7xl mx-auto">
  {/* Sidebar */}
  {/* Main Content */}
  <div className="flex-1">
    <JobList />
  </div>
</div>
    </>
  )
}

export default Browse