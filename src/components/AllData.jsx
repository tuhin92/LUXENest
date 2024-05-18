import React, { useEffect, useState } from "react";
import SingleData from "./SingleData";

const AllData = () => {
    const [properties, setProperties] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/data')
            .then(res => res.json())
            .then(data => setProperties(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <div className="bg-base-020">
            <h1 className="my-16 text-center text-4xl text-purple-950 font-semibold">All Property</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property, index) => (
                    (showAll || index < 6) && <SingleData key={property.id} property={property} />
                ))}
            </div>
            {!showAll && properties.length > 6 && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block" onClick={handleShowAll}>Show All</button>
            )}
            {showAll && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block" onClick={handleShowLess}>Show Less</button>
            )}
        </div>
    );
};

export default AllData;
