import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserTripCardItem = ({ tripData }) => {
    const [placePic, setPlacePic] = useState();

    useEffect(() => {
        !!tripData && getPlacePhotos();
    }, [tripData])

    const getPlacePhotos = async () => {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${tripData?.tripData?.destination}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
        setPlacePic(response.data.results[0].urls['regular']);
    }

    return (
        <Link to={`/view-trip/${tripData.id}`}>
            <div className='hover:scale-105 transition-all text-black'>
                <img src={placePic} alt="" className='object-cover rounded-xl h-[200px]' />
                <div>
                    <h2 className='font-bold text-lg'>
                        {tripData?.userSelection?.destination}
                    </h2>
                    <h2 className='text-sm text-gray-500'>{tripData?.userSelection?.noOfDays} Days trip with {tripData?.userSelection?.budget}</h2>
                </div>
            </div>
        </Link>
    )
}

export default UserTripCardItem