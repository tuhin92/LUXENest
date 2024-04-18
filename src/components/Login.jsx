import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from '../providers/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    // show error message 
    const [loginError, setLoginError] = useState(' ');

    const [user, setUser] = useState(null);

    // sign in method 
    const {signInUser, signInWithGoogle, signInWithGithub} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const naviagte = useNavigate();


  const handleLogin = (e) => {
    // reset error 
    setLoginError('');
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    signInUser(email, password)
    .then( result => {
        console.log(result.user);
        e.target.reset();
        naviagte('/');
    })
    .catch( error => {
        console.log('Invalid password or email');
        setLoginError(error.message);
    })
  };


    //   google sign in 
  const handleGoogleSignIn = () => {
    console.log('Attempting Google sign-in...');
    signInWithGoogle()
    .then(result => {
        console.log('Google sign-in successful:', result.user);
        naviagte('/');
    })
    .catch(error => {
        console.error('Error signing in with Google:', error);
    });
}

    // github sign in 
    const handleGithubSignIn = () => {
        console.log('Attempting Github sign-in...');
        signInWithGithub()
            .then(result => {
                console.log('GitHub sign-in successful:', result.user);
                naviagte('/');
            })
            .catch(error => {
                console.error('Error signing in with GitHub:', error);
            });
    };
    


  return (
    <div className="animate__animated animate__pulse mb-12">
            <div className="mb-24">
        <Helmet>
            <title>LUXENest | Log in</title>
        </Helmet>
      <form onSubmit={handleLogin} className="md:w-1/3 lg:w-1/3 mx-auto bg-base-100 p-12 rounded-2xl my-4 md:8 lg:my-26">
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
          {
            loginError && <p className='text-red-600'>{loginError}</p>
        }
        </label>
        <div className="form-control mt-6 gap-4">
          <button className="btn btn-primary">Login</button>

          <p className="text-center mt-6">
          Don't have an account? 
          <Link to="/register" className='text-blue-600 font-bold ml-1'>Register</Link>
        </p>
        <button onClick={handleGoogleSignIn} className="btn  bg-green-600"><FaGoogle className='text-2xl'></FaGoogle>Sign in with Google</button>
          <button onClick={handleGithubSignIn} className="btn bg-orange-600"><FaGithub className='text-2xl'></FaGithub> Sign in with Github</button>
        </div>
      </form>
      <div>
      
      </div>
    </div>
    </div>
  );
};

export default Login;
