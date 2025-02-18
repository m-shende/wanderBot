import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HotelCardItem = ({ data }) => {
    const [placePic, setPlacePic] = useState();

    useEffect(() => {
        !!data && getPlacePhotos();
    }, [data])

    const getPlacePhotos = async () => {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${data?.name}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
        setPlacePic(response.data.results[0].urls['regular']);
    }

    return (
        <Link to={`https://www.google.com/maps/search/?api=1&query=${data?.name + data?.address}`}>
            <div className='hover:scale-110 transition-all'>
                <img src={placePic} className='h-[200px] rounded-xl w-52' />
                <div className='my-2 flex flex-col gap-2 text-black'>
                    <h2 className='font-medium text-sm'>{data?.name}</h2>
                    <h2 className='text-xs text-gray-500'>📍 {data?.address}</h2>
                    <h2 className='text-sm'>{`💲` + data.price_per_night}</h2>
                    <h2 className='text-sm'>⭐ {data?.rating} stars</h2>
                </div>
            </div>
        </Link >
    )
}

export default HotelCardItem