import { db } from '@/services/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import Information from '../components/Information';
import HotelRecommendation from '../components/HotelRecommendation';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

const ViewTrip = () => {
    const { tripId } = useParams();
    const [tripData, setTripData] = useState();

    useEffect(() => {
        !!tripId && getTripData();

    }, [tripId])

    const getTripData = async () => {
        try {
            const docRef = doc(db, 'AITrips', tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const tripInfo = docSnap.data();
                setTripData(tripInfo);
            } else {
                return toast({
                    variant: "info",
                    title: "No trip data found"
                })
            }
        } catch (error) {
            return toast({
                variant: "destructive",
                title: "Something went wrong!!"
            });
        }

    }

    return (
        <div className='p-10 md:px-20 lg-px-44 xl:px-56'>
            {!!tripData ? (
                <>
                    {/* Information section */}
                    <Information tripData={tripData} />

                    {/* recommended hotels */}
                    <HotelRecommendation tripData={tripData} />

                    {/* daily plan */}
                    <PlacesToVisit tripData={tripData} />

                    {/* footer */}
                    <Footer tripData={tripData} />
                </>
            ) : <div className='flex flex-col items-center font-semibold'>No trips found</div>}

        </div>
    )
}

export default ViewTrip