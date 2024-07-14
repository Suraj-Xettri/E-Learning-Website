import React from "react";
import {FaBars, FaBook } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { Link , NavLink } from "react-router-dom";
const Nav = () => {

  const subject = ["Maths" , "Science", "Social"]
  return (
    <div className="relative">
      <header className="px-4 text-[#0056D2] bg-[#E9E9E9] fixed z-20 border-b border-[#CCCCCC] lg:p-[40px] h-14 flex justify-around w-screen items-center">
        <a href="#" className="flex gap-4 items-center justify-center">
          <FaBook className="text-2xl" />
          <span className="font-semibold text-2xl">Exam Preperation</span>
        </a>
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <button className="rounded-full sm:hidden">
            <FaBars className="h-5 w-5" />
          </button>
        
          <nav className="hidden sm:flex gap-4 sm:gap-5 pr-2 items-center">
          <Dropdown value = "Courses" options = {subject}/>
            <NavLink
              to="/"
              className="text-sm lg:text-sm font-medium hover:underline underline-offset-4"
            >
              Home
            </NavLink>
            <NavLink
              to="/AboutUs"
              className="text-sm lg:text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </NavLink>
            <NavLink
              to="/Contact"
              className="text-sm lg:text-sm font-medium hover:underline underline-offset-4"
            >
              Contact Us
            </NavLink>
          </nav>
          <button className="bg-[#0056D2] px-4 py-2 rounded-2xl text-white hover:bg-[#0041A8] transition duration-500">Sign up</button>
        </div>
      </header>
    </div>
  );
};

export default Nav;
