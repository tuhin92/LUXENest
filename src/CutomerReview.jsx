import React from "react";

const CutomerReview = () => {
  return (
    <div className="container mx-auto my-12">
      {/* review 1  */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Jack</h2>
          <p className="text-gray-600">That was amazing, i'm totally satisfied with their service</p>
          <div className="card-actions justify-end">
            <p>Rating: 4.5 / 5.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutomerReview;
