import React from 'react'

const Discover = () => {
  return (
    <div className="p-6 flex mt-10 flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center rounded-lg sm:px-8 h-[30vh] w-full sm:w-[70vw] bg-zinc-500 sm:pt-6 sm:pb-8 box-border p-4">
      <h1 className="sm:text-3xl text-2xl font-bold text-center sm:mb-4">Unlock Your Potential with Us</h1>
      <p className="text-gray-700 text-center sm:text-lg tracking-tighter">Explore our wide range of courses and stay updated with the latest educational content</p>
      <div className="flex items-center justify-center mt-4">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Sign Up</button>
        <button className="ml-4 bg-transparent hover:bg-zinc-300 transition duration-200 font-bold py-2 px-4 rounded-md focus:outline-none">Learn More</button>
      </div>
    </div>
  </div>
  
  )
}

export default Discover