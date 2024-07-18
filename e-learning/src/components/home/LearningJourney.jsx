import React from 'react';
import { FaCube } from 'react-icons/fa';

const LearningJourney = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <p className='text-center mb-10'>Discover.</p>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h1>
        <p className="text-lg">
          Join our online courses and gain valuable knowledge from expert teachers. Sign up now and
          unlock a world of learning opportunities.
        </p>
      </div>

      <div className="flex justify-between items-start mb-10">
        <div className="text-center w-1/4">
          <FaCube className="mx-auto text-3xl mb-2" />
          <h3 className="text-xl font-bold mb-2">Step 1:</h3>
          <p>Browse our course catalog and choose the topic that interests you.</p>
        </div>

        <div className="text-center w-1/4">
          <FaCube className="mx-auto text-3xl mb-2" />
          <h3 className="text-xl font-bold mb-2">Step 2:</h3>
          <p>Create an account and complete the easy registration process.</p>
        </div>

        <div className="flex items-center justify-center w-1/4">
          <div className="bg-gray-200 h-64 w-64 flex items-center justify-center">
            <img src="path-to-your-image" alt="Learning Journey" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="text-center w-1/4">
          <FaCube className="mx-auto text-3xl mb-2" />
          <h3 className="text-xl font-bold mb-2">Step 3:</h3>
          <p>Access your chosen course materials and start learning at your own pace.</p>
        </div>

        <div className="text-center w-1/4">
          <FaCube className="mx-auto text-3xl mb-2" />
          <h3 className="text-xl font-bold mb-2">Step 4:</h3>
          <p>Engage with fellow learners and instructors through interactive discussions.</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition-colors">
          Start
        </button>
        <button className="px-6 py-2 text-black font-medium rounded-md hover:text-gray-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearningJourney;
