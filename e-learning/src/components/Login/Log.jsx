import React, { useState } from 'react'
import Register from "./Register"

const Log = () => {
 
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex h-screen w-screen flex-col pt-[120px] justify-center items-center  bg-transparent">
      <div className="relative">
        <label className="flex flex-col items-center">
          <input
            type="checkbox"
            className="sr-only"
            checked={isFlipped}
            onChange={handleToggle}
          />
          <div className="relative inline-block w-12 h-6 bg-gray-300 rounded-full transition-colors duration-300 ease-in-out">
            <span
              className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                isFlipped ? "translate-x-6" : ""
              }`}
            />
          </div>
          <div className="mt-2 text-lg font-semibold">
            {isFlipped ? "Sign up" : "Log in"}
          </div>
        </label>
      </div>

      {
        isFlipped ? (
          <Register handleToggle = {handleToggle}/>
        ) : (
          <div className="flex-1 flex flex-col gap-5 items-center">
            <div className="flex-1">
              <form className="form">
                <p className="title">Welcome Back </p>
                <p className="message">
                 Log in to get full access to app.
                </p>
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
                   "Log In"
                </button>

                <p className="text-center">Forgot Password ?</p>

                <p className='text-center'>Don't Have an account?<button onClick={handleToggle} className='text-blue-700 font-semibold'>Register</button></p>
              </form>
             
            </div>
          </div>
        )
      }
    </div>
  );
};
export default Log