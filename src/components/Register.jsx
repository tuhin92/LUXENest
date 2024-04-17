import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="mb-24">
      <form className="md:w-1/3 lg:w-1/3 mx-auto bg-base-100 p-12 rounded-2xl my-4 md:my-32">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="text-center mt-6">Already have an account? <Link to="/login"> <span className='text-blue-600 font-bold'>Login</span></Link> </p>
      </form>
    </div>
    );
};

export default Register;