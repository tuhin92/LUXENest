import React, { useContext, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    // show error message 
    const [registerError, setRegisterError] = useState('')

    const {createUser} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
 
    const handleRegister = (e)=> {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);
        console.log("Name:", name);
        console.log("Photo URL:", photo);
        // reset error 
        setRegisterError('');

        if(password.length < 6){
            setRegisterError('Password should be at least 6 character or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should at least one uppercase character.');
            return;
        }
        else if(!/[a-z]/.test(password)){
            setRegisterError('Your password should at least one lowercase character.');
            return;
        }


        // create user in firebase
        createUser(email, password, { displayName: name, photoURL: photo })
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message);
        } )
    }

    return (
        <div className="animate__animated animate__slideInDown mb-12">
                <div className="mb-24">
      <form onSubmit={handleRegister} className="md:w-1/3 lg:w-1/3 mx-auto bg-base-100 p-12 rounded-2xl my-4 md:my-32">
        <img
          className="h-8"
          src="https://i.ibb.co/dGBVqT4/Screenshot-from-2024-04-17-08-56-39-removebg-preview.png"
          alt=""
        />
        <h2 className="text-3xl text-center font-bold text-purple-950">
          Register
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="text-center mt-6 mb-4 text-base">Already have an account? <Link to="/login"> <span className='text-blue-600 font-bold'>Login</span></Link> </p>
        {
            registerError && <p className='text-red-700 text-xl'>{registerError}</p>
        }
      </form>
    </div>
        </div>
    );
};

export default Register;