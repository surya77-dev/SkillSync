import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

const Profile = () => {
  const {id} = useParams();
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) return <div className="text-center mt-10 text-red-600">User not found or data not passed.</div>;
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      {/* Back Link */}
      <Link to="/browse" className="text-green-600 hover:underline text-sm mb-4 inline-block">
        ← Back to Browse
      </Link>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-md p-6 md:flex md:items-center gap-8">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="w-32 h-32 rounded-full object-cover border-4 border-green-100"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{user.name.first} {user.name.last}</h1>
          <p className="text-green-600 font-medium mb-2">{user.jobTitle}</p>
          <p className="text-sm text-gray-500 mb-4">📍 {user.location.state} , {user.location.country}</p>

          <p className="text-gray-700 text-sm mb-4">
            {user.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
          {user.skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">{skill}</span>
          ))}
        </div>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
            <div className="text-sm text-gray-600 mb-2">💰 ${user.hourlyRate}/hr</div>
            <div className="text-sm text-gray-600 mb-2">⭐ {user.rating} Rating</div>
            <div className="text-sm text-gray-600 mb-2">Level: {user.experienceLevel}</div>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">Contact</button>
            <button className="px-5 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 text-sm">Hire Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
