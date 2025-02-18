import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";


const PlaceCardItem = ({ place }) => {

    const [placePic, setPlacePic] = useState();

    useEffect(() => {
        !!place && getPlacePhotos();
    }, [place])

    const getPlacePhotos = async () => {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${place?.name}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
        setPlacePic(response.data.results[0].urls['small']);

    }

    return (
        <div>
            <h2 className='font-medium text-sm text-teal-800'>{place?.best_time_to_visit}</h2>
            <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-sm cursor-pointer' >
                <img src={placePic} className='w-40 h-40 rounded-xl' />
                <div>
                    <h2 className='font-bold text-lg'>{place.name}</h2>
                    <p className='text-sm text-gray-500 mt-2'>{place.description.substring(0, 100) + '...'}</p>
                    <div className='flex flex-row gap-5 items-center'>
                        <p className='mt-2 text-xs bg-gray-300 font-normal rounded-lg px-2 p-1 text-center'>
                            Ticket price: {place.ticket_price}
                        </p>
                        <FaMapLocationDot className='sm:h-8 xl:h-5 sm:w-5 xl:w-5' />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default PlaceCardItem