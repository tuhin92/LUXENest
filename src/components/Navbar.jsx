import { NavLink } from "react-router-dom";
import { GiCrossedAirFlows } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      {/* <li><NavLink to='/login'>Login</NavLink></li> */}
      {/* <li><NavLink to='/register'>Register</NavLink></li> */}
      <li>
        <NavLink to="/customersReview">Customers Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/budgetManage">Budget Managing</NavLink>
      </li>
      <li>
        <NavLink to="/feedback">FeedBack</NavLink>
      </li>
      <li>
        <NavLink to="/payment">Payment</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <GiCrossedAirFlows />
          <a className="btn btn-ghost text-2xl text-purple-900">LUXENest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <NavLink to="/profile" className="flex items-center gap-2">
                  <span>
                    <img className="h-12 w-12" src={user.photoURL} alt="" />
                  </span>
                  <span className="font-bold">{user.displayName}</span>
                </NavLink>
              </div>

              <button
                onClick={handleLogOut}
                className="btn bg-red-600 text-white"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button className="btn btn-success text-white">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
