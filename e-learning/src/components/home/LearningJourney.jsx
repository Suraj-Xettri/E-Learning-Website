import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { IoIosCreate } from "react-icons/io";
import { CgBrowse } from "react-icons/cg";
import { GiMaterialsScience } from "react-icons/gi";
const LearningJourney = () => {
  return (
    <div className="container flex flex-col justify-center items-center gap-6 p-5 sm:p-16">
      <p className="text-center">Discover.</p>
      <div className="flex justify-center items-center">
        <div className="text-center sm:text-center mb-10 sm:w-[60vw]">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Start Your Learning Journey Today
          </h1>
          <p className="text-lg">
            Join our online courses and gain valuable knowledge from expert
            teachers. Sign up now and unlock a world of learning opportunities.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mb-10">
        <div className="flex flex-col lg:flex-col md:flex-row sm-flex-row  gap-10 items-center justify-center ">
          <div className="text-center w-2/4">
            <CgBrowse className="mx-auto text-3xl mb-2" />
            <h3 className="text-xl font-bold mb-2">Step 1:</h3>
            <p>
              Browse our course catalog and choose the topic that interests you.
            </p>
          </div>

          <div className="text-center w-2/4">
            <IoIosCreate className="mx-auto text-3xl mb-2" />
            <h3 className="text-xl font-bold mb-2">Step 2:</h3>
            <p>Create an account and complete the easy registration process.</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <div className="bg-gray-200  flex items-center justify-center w-full h-full">
            <img
              src="./learningjourney.jpg"
              alt="Learning Journey"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-col md:flex-row sm-flex-row gap-10 items-center justify-center">
          <div className="text-center w-2/4">
            <GiMaterialsScience className="mx-auto text-3xl mb-2" />
            <h3 className="text-xl font-bold mb-2">Step 3:</h3>
            <p>
              Access your chosen course materials and start learning at your own
              pace.
            </p>
          </div>

          <div className="text-center w-2/4">
            <PiStudentBold className="mx-auto text-3xl mb-2" />
            <h3 className="text-xl font-bold mb-2">Step 4:</h3>
            <p>
              Engage with fellow learners and instructors through interactive
              discussions.
            </p>
          </div>
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
