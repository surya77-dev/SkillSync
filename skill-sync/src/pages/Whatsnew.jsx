import React from "react";

const WhatsNew = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-6">🚀 What’s New in SkillSync</h1>

      <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200 transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02]">
        <h2 className="text-xl font-semibold text-gray-800">✨ New Dashboard Updates</h2>
        <p className="text-gray-600 mt-2 text-sm">
          We've redesigned the dashboard to be cleaner and more intuitive. See your job posts, manage applications, and track activity all in one place.
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200 transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02]">
        <h2 className="text-xl font-semibold text-gray-800">✨ New Dashboard Updates</h2>
        <p className="text-gray-600 mt-2 text-sm">
            Now you can search freelancers by job title or skill with better filtering performance. Try finding React developers or cybersecurity experts in seconds!
        </p>
      </div>


      <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200 transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02]">
        <h2 className="text-xl font-semibold text-gray-800">✨ New Dashboard Updates</h2>
        <p className="text-gray-600 mt-2 text-sm">
            Our UI now adapts beautifully to mobile devices — so you can browse, post jobs, and hire talent on the go.
        </p>
      </div>
      </div>
    </>
  );
};

export default WhatsNew;
