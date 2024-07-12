import React from "react";
import { FaChevronDown, FaChevronRight, FaBars, FaBook } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="">
      <header className="px-4 lg:px-6 h-14 flex justify-between w-screen items-center">
        <a href="#" className="flex items-center justify-center">
          <FaBook className="size-6" />
          <span className="sr-only">Acme Education</span>
        </a>
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <button className="rounded-full sm:hidden">
            <FaBars className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </button>
          <nav className="hidden sm:flex gap-4 sm:gap-6 items-center">
            <div className="relative group">
              <button className="flex items-center">
                Classes <FaChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 w-48">
                <a href="#" className="flex items-center justify-between p-2">
                  Class 1 <FaChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center">
                Subjects <FaChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 w-48">
                <a href="#" className="flex items-center justify-between p-2">
                  Mathematics <FaChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
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
