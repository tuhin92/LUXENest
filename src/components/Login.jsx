import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);



  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
  };

  return (
    <div className="mb-24">
      <form onSubmit={handleLogin} className="md:w-1/3 lg:w-1/3 mx-auto bg-base-100 p-12 rounded-2xl my-4 md:my-32">
        <img
          className="h-8"
          src="https://i.ibb.co/dGBVqT4/Screenshot-from-2024-04-17-08-56-39-removebg-preview.png"
          alt=""
        />
        <h2 className="text-3xl text-center font-bold text-purple-950">
          Login
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={ showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="input input-bordered pr-10"
            required
          />
          <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center mt-10 pr-3 text-xl">
            {
                showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>
            }
          </span>
        </div>
        <label className="label">
          <Link
            to="#"
            className="label-text-alt link link-hover text-blue-800"
          >
            Forgot password?
          </Link>
        </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-center mt-6">
          Don't have an account? 
          <Link to="/register" className='text-blue-600 font-bold ml-1'>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
