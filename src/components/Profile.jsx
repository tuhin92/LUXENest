import { Helmet } from "react-helmet-async";

const Profile = () => {
    return (
        <div className="container mx-auto mb-16">
            <Helmet>
                <title>LUXENest | Profile</title>
            </Helmet>
            <h2>Welcome to your profile</h2>
        </div>
    );
};

export default Profile;