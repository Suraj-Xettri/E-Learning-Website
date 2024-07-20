import React from "react";

const Subscribe = () => {
  return (
    <div className="container flex justify-between px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-4">
        Stay Updated with Our Newsletter
      </h1>

      <div>
        <p className="text-center text-gray-700 mb-8">
          Get the latest updates and course offerings straight to your inbox.
        </p>
        <form className="flex flex-col items-center">
          <label htmlFor="email" className="text-gray-700 mb-2">
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="shadow-sm rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">
          By subscribing, you agree to our Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
