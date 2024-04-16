import React from 'react';
import "./ErrorPage.css";

const Errorpage = () => {
  const handleBackToHome = () => {
    window.location.href = '/'; // Navigate to the home route
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md text-white">
            <img src="https://i.ibb.co/p1yQCxS/cartoon-astronaut-by-themaskedtooner-dg6xwc9-fullview-removebg-preview.png" alt="" />
            <h1 className="text-5xl font-bold">Opps !</h1>
            <p className="py-6">
                Page not found.
            </p>
            <button className="btn btn-success" onClick={handleBackToHome}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Errorpage;
