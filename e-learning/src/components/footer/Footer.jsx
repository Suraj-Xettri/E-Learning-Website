import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center relative pt-8 pb-6 border-t border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond within 1-2 days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex justify-center items-center">
              <button
                className="bg-[#27AE60] text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition duration-500 hover:bg-[#666666] hover:text-white"
                type="button"
              >
                <FaTwitter />
              </button>
              <button
                className="bg-[#27AE60] flex text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition duration-500 hover:bg-[#666666] hover:text-white"
                type="button"
              >
                <FaFacebookSquare />
              </button>
              <button
                className="bg-[#27AE60] text-black flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition duration-500 hover:bg-[#666666] hover:text-white"
                type="button"
              >
                <FaDribbble />
              </button>
              <button
                className="bg-[#27AE60] flex text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition duration-500 hover:bg-[#666666] hover:text-white"
                type="button"
              >
                <FaGithub />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex items-top mb-6 flex-wrap sm:flex-nowrap md:flex-nowrap">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block font-bold uppercase text-black text-start text-md mb-2">
                   Content Pages
                </span>
                <ul className="list-unstyled text-start">
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-800 block pb-2 text-sm"
                      href="#"
                    >
                       Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                       Classes
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact US
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                     About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-start text-blueGray-500 text-md font-bold mb-2">
                  Legal
                </span>
                <ul className="list-unstyled text-start">
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span>2024</span>
              <a
                href="#"
                className="text-blueGray-500 hover:text-gray-800"
              >
                {" "}
                Exam Prep By
              </a>
              <a href="#" className="text-blueGray-500 hover:text-gray-800">
                Creative SRaj
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
