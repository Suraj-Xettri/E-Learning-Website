import React, { useState } from "react";
import "./dropdown.css";
const Dropdown = ({ value, options }) => {
  return (
    <div className="select">
      <select
        className="w-full text-[#0056D2] bg-transparent cursor-pointer rounded-md border-gray-700 px-2 py-1"
        id="country"
      >
        <option value="">Select a {value}</option>

        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
