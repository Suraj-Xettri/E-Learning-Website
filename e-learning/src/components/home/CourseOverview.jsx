import React from 'react';
import { FaCube } from 'react-icons/fa';

const CourseOverview = () => {
  return (
    <div className="container flex flex-col gap-5 mt-24 p-16">
        <p className='mb-3'>Empower</p>
      <div className="flex flex-col w-[50vw]">
        <h1 className="text-5xl font-bold mb-4">Unlock Your Potential with Expert Online Courses</h1>
        <p className="text-lg mb-8 mt-4">
          Our courses offer the expertise, flexibility, and comprehensive curriculum you need to succeed.
          Learn from top instructors and take control of your learning journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around mb-10">
        <div className="flex flex-col gap-2">
          <FaCube className="text-3xl mb-2" />
          <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
          <p>Learn from industry-leading experts in their respective fields.</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <FaCube className="text-3xl mb-2" />
          <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
          <p>Study at your own pace and access course materials anytime, anywhere.</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <FaCube className="text-3xl mb-2" />
          <h3 className="text-xl font-bold mb-2">Comprehensive Curriculum</h3>
          <p>Gain in-depth knowledge and skills through our well-rounded curriculum.</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button className="px-6 py-2 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition-colors">
          Enroll
        </button>
        <button className="px-6 py-2 text-blue-500 font-medium rounded-md hover:text-gray-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CourseOverview;
