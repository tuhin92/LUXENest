import { useEffect, useState } from "react";
import SingleData from "./SingleData";

const AllData = () => {
    const [proparties, setProparties] = useState([]);

    useEffect( ()=> {
        fetch('dataSet.json')
        .then( res => res.json())
        .then( data => setProparties(data))
    }, [])

    return (
        <div className="bg-base-020">
            <h1 className=" my-16 text-center text-4xl text-purple-950 font-semibold"> All Property</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    proparties.map( property => <SingleData key={property.id} property={property}></SingleData> )
                }
            </div>
        </div>
    );
};

export default AllData;