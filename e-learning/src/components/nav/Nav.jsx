import React from "react";
import {FaBars, FaBook } from "react-icons/fa";
import Dropdown from "./Dropdown";
const Nav = () => {

  const subject = ["Maths" , "Science", "Social"]
  const classNO= ["Class 1", "class 2"]

  return (
    <div className="relative">
      <header className="px-4 bg-[#ECE3D4] fixed z-20 border-b border-black lg:p-[40px] h-14 flex justify-around w-screen items-center">
        <a href="#" className="flex gap-4 items-center justify-center">
          <FaBook className="text-2xl" />
          <span className="font-semibold text-2xl">Exam Preperation</span>
        </a>
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <button className="rounded-full sm:hidden">
            <FaBars className="h-5 w-5" />
          </button>
        
          <nav className="hidden sm:flex gap-4 sm:gap-5 pr-2 items-center">
          <Dropdown value = "Class" options={classNO}/>
          <Dropdown value = "Subject" options = {subject}/>

            <a
              href="#"
              className="text-sm lg:text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm lg:text-sm font-medium hover:underline underline-offset-4"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm lg:text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
