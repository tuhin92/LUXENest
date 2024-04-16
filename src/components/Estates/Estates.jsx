import { useEffect, useState } from "react";
import Estate from "../../Estate/Estate";

const Estates = () => {

    const [estates, setEstates] = useState([]);
    useEffect( ()=>{
        fetch('estates.json')
        .then(res => res.json())
        .then(data => setEstates(data));
    },[])


    return (
        <div className='mt-12'>
            <h2 className='text-4xl font-bold text-purple-950 '>Estates:{estates.length}</h2>
            <div>
                {
                    estates.map(estate => <Estate key={estates.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;