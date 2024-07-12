import React, { useState } from "react";
import "./dropdown.css";
const Dropdown = (props) => {
  return (
    <div className="select">
      <select
        className="w-full bg-transparent cursor-pointer rounded-md border-gray-700 text-black px-2 py-1"
        id="country"
      >
        <option value="">Select a {props.value}</option>
        <option value="1">Class 1</option>
        <option value="2">Class 2</option>
        <option value="3">Class 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
