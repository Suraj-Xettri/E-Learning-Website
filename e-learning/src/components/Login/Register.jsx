import React from "react";
import "./login.css";
const Register = ({ handleToggle }) => {
  return (
    <div className="flex-1 flex flex-col gap-5 items-center">
      <div className="flex-1">
        <form className="flex flex-col form gap-3 relative bg-transparent p-5 rounded-2xl border border-gray-400 max-w-[320px] sm:min-w-[360px]">
          <p className="titles">Register </p>
          <p className="message">Signup now and get full access to app. </p>
          <div className="flex gap-3">
            <label>
              <input required type="text" className="input" name="username" />
              <span>First Name</span>
            </label>

            <label>
              <input required type="text" className="input" name="username" />
              <span>Last Name</span>
            </label>
          </div>

          <label>
            <input required type="email" className="input" name="email" />
            <span>Email</span>
          </label>

          <label>
            <input required type="number" className="input" name="email" />
            <span>Contact No</span>
          </label>

          <div className="flex gap-2">
            <label>
              <input
                required
                type="password"
                className="input"
                name="password"
              />
              <span> Password</span>
            </label>

            <label>
              <input required type="password" className="input" />
              <span>Conform Password</span>
            </label>
          </div>

          <button type="submit" className="submit">
            Register
          </button>
          <p className="text-center">
            Already have an Account?{" "}
            <button
              className="text-blue-700 cursor-pointer"
              onClick={handleToggle}
            >
              Log In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
