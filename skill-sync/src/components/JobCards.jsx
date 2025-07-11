import React from 'react'
import JobList from './JobList'
import Loader from './Loader'
import ProfileLink from './ProfileLink'

const JobCards = ({ jobBrowse = [], Loading }) => {
  return (
    <div className="p-6">
      {Loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(jobBrowse || []).map((freelancer, index) => (
            <div key={index} className="bg-white p-4 shadow rounded-lg hover:shadow-xl shadow-green-300 ease-out transition:0.5s">
              <img src={freelancer.picture.large} alt={freelancer.name.first} className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h2 className="text-center font-semibold">{freelancer.name.first} {freelancer.name.last}</h2>
              <p className="text-sm text-center text-gray-500">{freelancer.jobTitle}</p>
              <p className="text-xs text-center mt-2">{freelancer.bio}</p>
              <div className="flex justify-center gap-2 mt-3 flex-wrap">
                {freelancer.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">{skill}</span>
                ))}
              </div>
              <div className="text-center text-sm mt-4 text-gray-600">
                💰 ${freelancer.hourlyRate}/hr &nbsp; ⭐ {freelancer.rating}
              </div>
              <div className="text-center text-xs text-gray-400 mt-1">
                {freelancer.experienceLevel}
              </div>
              <div className='flex justify-center my-4'>
              <ProfileLink />
              </div>
            </div>
          ))}
          
        </div>
      )}
    </div>
  )
}

export default JobCards