import React from "react";

const CutomerReview = () => {
  return (
    <div className="container mx-auto my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {/* review 1  */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/2qCTB9K/4522921ee9c0-jack-nicholson-smiling-jpg.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Jack</h2>
          <p className="text-gray-600">That was amazing, i'm totally satisfied with their service</p>
          <div className="card-actions justify-end">
            <p className="text-gray-700 font-bold">Rating: 4.5 / 5.00</p>
          </div>
        </div>
      </div>

      {/* review 2  */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/QQvwmGH/killer-mike-with-mic.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mike</h2>
          <p className="text-gray-600">That was amazing, i'm totally satisfied with their service</p>
          <div className="card-actions justify-end">
            <p className="text-gray-700 font-bold">Rating: 4.5 / 5.00</p>
          </div>
        </div>
      </div>

      {/* review 3  */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/bR3MrNT/Web-Bio22-Marvin-Gomez.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cupper</h2>
          <p className="text-gray-600">That was amazing, i'm totally satisfied with their service</p>
          <div className="card-actions justify-end">
            <p className="text-gray-700 font-bold">Rating: 4.5 / 5.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutomerReview;
