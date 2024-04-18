import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto mb-16 mt-12">
      <Helmet>
        <title>LUXENest | Profile</title>
      </Helmet>

      <div className="flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={user.photoURL}
              alt="Profile Image"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user.displayName}</h2>
            <p>{user.email}</p>
            <div className="card-actions">
              <button className="btn bg-purple-500 text-white">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
