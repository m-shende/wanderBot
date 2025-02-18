import { Button } from '@/components/ui/button'
import { getPlaceDetails } from '@/services/GlobalApi';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaShareAlt } from "react-icons/fa";


const Information = ({ tripData }) => {
    const [placePic, setPlacePic] = useState();

    useEffect(() => {
        !!tripData && getPlacePhotos();
    }, [tripData])

    const getPlacePhotos = async () => {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${tripData?.tripData?.destination}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
        setPlacePic(response.data.results[0].urls['regular']);
    }


    return (
        <div>
            <img src={placePic} className='h-[340px] w-full object-cover rounded-xl' />
            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{tripData?.userSelection?.destination}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
                            📅 {tripData?.userSelection?.noOfDays} Days
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md'>
                            💰 {tripData?.userSelection?.budget}
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md'>
                            👫 {tripData?.userSelection?.companion}
                        </h2>
                    </div>
                </div>
                <Button>
                    <FaShareAlt />
                </Button>
            </div>
        </div>
    )
}

export default Information