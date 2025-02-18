import React from 'react'
import PlaceCardItem from './PlaceCardItem'
import { Link } from 'react-router-dom';

const PlacesToVisit = ({ tripData }) => {

    return (
        <div className='mt-5'>
            <h2 className='font-bold text-lg'>Places to visit</h2>
            <div>
                {!!tripData && tripData?.tripData?.itinerary?.map((item, index) => (
                    <div key={index} className='my-5'>
                        <h2 className='font-medium text-lg'>Day {item.day}</h2>
                        <div className='grid gap-5 md:grid-cols-2 '>
                            {!!item && item.activities?.map((data, index) => (
                                <Link to={`https://www.google.com/maps/search/?api=1&query=${data?.name + data?.address}`} key={index}>
                                    <div key={index} className='text-black'>
                                        <PlaceCardItem place={data} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlacesToVisit