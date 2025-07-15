import React from 'react'
import { usePost } from "../context/usePost";




const Dashboard = () => {
  // For now, you can replace this with context or dummy data
   const { Jobs, removeJob } = usePost();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📋 My Posted Jobs</h1>

      {Jobs.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No jobs posted yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-sm border rounded-lg p-6 space-y-4"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold text-green-700">{job.title}</h2>
                <span className="text-sm text-gray-400">{job.postedAt}</span>
              </div>

              <p className="text-sm text-gray-600">{job.description}</p>

              <div className="flex flex-wrap gap-2 text-xs">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <p>
                  💵 <span className="font-medium">${job.budget}</span>
                </p>
                <p>⏱ {job.duration}</p>
                <p>🎯 {job.experienceLevel}</p>
              </div>

              <div className="flex justify-end">
                <button
                  className="px-4 py-1 text-sm text-red-600 border border-red-500 rounded hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;


