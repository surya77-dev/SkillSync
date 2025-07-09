import React from 'react'
import JobList from '../components/JobList'

const Browse = () => {
  return (
    <>
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Explore <span className="text-green-600">Top</span> Freelance Talent.
          </h1>
          <p className="text-gray-600 text-lg font-poppins font-light leading-relaxed max-w-xl">
            Browse skilled professionals across design, development, writing, and more.            </p>
        </div>
        </div>
    </section>
    <div>
        <JobList />
    </div>
    </>
  )
}

export default Browse