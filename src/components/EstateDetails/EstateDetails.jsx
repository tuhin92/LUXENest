import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((estate) => estate.id === idInt);
  console.log(estate);
  return (
    <div className="container  w-[890px] mx-auto py-16">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={estate.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl text-gray-800">
            {estate.estate_title}
            <div className="badge badge-secondary p-3">{estate.category}</div>
          </h2>
          <div className="text-base text-gray-600">
            <p>{estate.description}</p>
            <p> <span className="text-purple-800 font-bold">Type:</span> {estate.segment_name}</p>
            <p> <span className="text-purple-800 font-bold">Facilities:</span> {estate.facilities.join(", ")}</p>
            <p><span className="text-purple-800 font-bold">Location:</span>{estate.location}</p>
            <p className="font-bold"> <span className="text-purple-800">Price:</span> {estate.price}</p>
          </div>

          <div className="card-actions justify-end">
            <div className="badge bg-purple-200 p-4">{estate.area}</div>
            <div className="badge bg-purple-200 p-4">{estate.status}</div>
          </div>
          <button className="btn bg-amber-400">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
