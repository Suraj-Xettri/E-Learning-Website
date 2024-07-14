import React from "react";
import "./login.css";
const Register = () => {
  return (
    <div className="flex-1 flex flex-col gap-5 items-center">
      <div className="flex-1">
        <form className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to app. </p>

          <label>
            <input required type="text" className="input" name="username" />
            <span>Username</span>
          </label>

          <label>
            <input required type="email" className="input" name="email" />
            <span>Email</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="password"
              className="input"
              name="password"
            />
            <span>Password</span>
          </label>
          <button type="submit" className="submit">
            "Register"
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
