import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import HotelCardItem from './HotelCardItem';

const HotelRecommendation = ({ tripData }) => {
    const data = tripData?.tripData?.accomodation;

    return (
        <div>
            <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {!!data && data?.map((data, index) => (
                    <HotelCardItem data={data} key={index} />
                ))}
            </div>
        </div>
    )
}

export default HotelRecommendation