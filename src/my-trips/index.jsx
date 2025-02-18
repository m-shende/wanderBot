import { db } from '@/services/firebaseconfig';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserTripCardItem from './UserTripCardItem';

const MyTrips = () => {
    const navigate = useNavigate();
    const [userTrips, setUserTrips] = useState([]);

    const getUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            navigate("/");
            return;
        }

        try {
            setUserTrips([]);
            const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
            const querySnapshot = await getDocs(q);

            const tripsArray = [];
            querySnapshot.forEach((doc) => {
                tripsArray.push(doc.data());
            });

            setUserTrips(tripsArray);

        } catch (error) {
            console.error("Error fetching trips:", error);
        }
    };


    useEffect(() => {
        getUserTrips();
    }, []);

    if (userTrips.length === 0) {
        return (
            <div className='flex flex-col items-center mt-10 font-semibold'>No Trips found</div>
        )
    }

    return (
        <div className='flex flex-col gap-10 xs:p-10 sm:px-10 md:px-32 lg:px-56 mt-10 '>
            <h2 className='font-bold text-3xl'>My trips</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 md:gap-5 mt-5 xl:gap-5'>
                {!!userTrips.length > 0 ? userTrips.map((trips, index) => (
                    <UserTripCardItem tripData={trips} key={index} />
                )) : [0, 1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div key={index} className='h-[200px] w-full bg-slate-200 animate-pulse rounded-xl'>

                    </div>
                ))}
            </div>
        </div>
    )

}

export default MyTrips;