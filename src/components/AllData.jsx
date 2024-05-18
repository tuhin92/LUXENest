import React, { useEffect, useState } from "react";
import SingleData from "./SingleData";

const AllData = () => {
    const [properties, setProperties] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchLocation, setSearchLocation] = useState("");
    const [searchPrice, setSearchPrice] = useState("");

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

    const handleSearch = () => {
        // Filter properties based on search criteria
        const filteredProperties = properties.filter(property => {
            // Check if location matches searchLocation (case insensitive)
            const locationMatch = property.location.toLowerCase().includes(searchLocation.toLowerCase());
            // Check if price is less than or equal to searchPrice (if searchPrice is a valid number)
            const priceMatch = !isNaN(parseFloat(searchPrice)) && parseFloat(property.price) <= parseFloat(searchPrice);
            return locationMatch && (isNaN(parseFloat(searchPrice)) || priceMatch);
        });
        setProperties(filteredProperties);
    };

    return (
        <div className="bg-base-020">
            <div className="hero">
                <div className="container mx-auto my-16">
                    <div className="card w-full max-w-md mx-auto shadow-lg">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">Search Properties</h2>
                            <div className="mb-4">
                                <label className="block mb-2">Location</label>
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    value={searchLocation}
                                    onChange={(e) => setSearchLocation(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Max Price</label>
                                <input
                                    type="text"
                                    placeholder="Enter max price"
                                    value={searchPrice}
                                    onChange={(e) => setSearchPrice(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
