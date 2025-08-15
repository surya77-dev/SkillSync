import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ For routing after post
import { usePost } from "../context/usePost";

const skillsList = ["React", "Tailwind", "JavaScript", "Figma", "Python", "Node.js", "Expressjs", "MangoDb", "Git"];
const levels = ["Beginner", "Intermediate", "Expert"];

const PostJob = () => {
  const { storeJob } = usePost();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    duration: "",
    experienceLevel: "",
    skills: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillChange = (skill) => {
    setFormData(prev => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.title ||
      !formData.description ||
      !formData.budget ||
      !formData.duration ||
      !formData.experienceLevel ||
      formData.skills.length === 0
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Build final job object
    const newJob = {
      ...formData,
      budget: Number(formData.budget),
      postedAt: new Date().toISOString(),
    };

    storeJob(newJob);
    console.log(newJob);

    // Reset form
    setFormData({
      title: "",
      description: "",
      budget: "",
      duration: "",
      experienceLevel: "",
      skills: []
    });

    alert("🎉 Job posted successfully!");

    // ✅ Redirect to Dashboard after posting
    navigate("/dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📝 Post a New Job</h1>

      <form
        className="bg-white shadow-md rounded-lg p-6 space-y-6 border border-gray-200"
        onSubmit={handleSubmit}
      >

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the project..."
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills</label>
          <div className="flex flex-wrap gap-3">
            {skillsList.map((skill) => (
              <label key={skill} className="text-sm text-gray-600 flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                  className="accent-green-600"
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($)</label>
          <input
            name="budget"
            type="number"
            min="10"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g. 500"
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <input
            name="duration"
            type="text"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g. 2 weeks"
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
          <div className="flex gap-6">
            {levels.map((level) => (
              <label key={level} className="text-sm text-gray-600 flex items-center gap-1">
                <input
                  type="radio"
                  name="experienceLevel"
                  value={level}
                  checked={formData.experienceLevel === level}
                  onChange={handleChange}
                  className="accent-green-600"
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Note to Dashboard */}
        <div className="mt-4 bg-gray-100 shadow-inner rounded-md p-3 text-center">
          <p className="text-sm text-gray-500 italic">
            💡 Tip: After posting, you will be redirected to your{" "}
            <a href="/dashboard" className="text-green-600 hover:underline">
              Dashboard
            </a>{" "}
            to manage your jobs.
          </p>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 text-sm font-medium"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
