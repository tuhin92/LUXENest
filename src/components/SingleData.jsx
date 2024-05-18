import React from "react";

const SingleData = ({ property }) => {
    const { image, price, location, name } = property;

    return (
        <div className="">
            <div className="card w-96 shadow-xl container mx-auto">
                <figure><img src={image} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="text-base">
                        <p> <span className="text-sky-600 font-bold">Price:</span> {price}</p>
                        <p><span className="text-sky-600 font-bold">Location:</span> {location}</p>
                    </div>
                    <button className="btn btn-info">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleData;
