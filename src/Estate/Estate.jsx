import './Estate.css'
const Estate = ({ estate }) => {
    const { category, estate_title, status, area, description, price, image } =
      estate;
    return (
      <div className="mt-8">
        <div className="card bg-base-100 shadow-xl estate-card"> {/* Added estate-card class */}
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-purple-800">
              {estate_title}
              <div className="badge badge-secondary p-3">{category}</div>
            </h2>
            <p className="text-gray-500">{description}</p>
            <p className="text-gray-600 font-bold">Price: {price}</p>
            <div className="card-actions justify-end">
              <div className="badge bg-purple-200 p-4">{area}</div>
              <div className="badge bg-purple-200 p-4">{status}</div>
            </div>
            <button className="btn bg-amber-400">View Property</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Estate;
  