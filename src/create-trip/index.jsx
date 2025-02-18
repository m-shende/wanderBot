import SignInDialog from '@/components/custom/SignInDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AI_PROMPT, selectBudgetOptions, selectTravelCompanionOptions } from '@/constants/options'
import { useToast } from '@/hooks/use-toast'
import { chatSession } from '@/services/AIModal'
import { db } from '@/services/firebaseconfig'
import LocationIQ from '@/services/LocationIQ'
import axios from 'axios'
import { doc, setDoc } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { FiLoader } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'


const CreateTrip = () => {
    const [formData, setFormData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const handleGenerateTrip = async () => {
        const user = localStorage.getItem('user')

        if (!user) {
            setOpenDialog(true);
            return;
        }

        if (formData?.noOfDays > 5 || formData?.noOfDays <= 0) {
            toast({
                variant: "destructive",
                title: "No. of days should be in between 1 to 5"
            })
        }

        if (!formData?.destination || !formData.budget || !formData.companion) {
            toast({
                variant: "destructive",
                title: "Please fill in all details"
            })
            return;
        }

        try {
            setLoading(true);
            const PROMPT = AI_PROMPT
                .replace('{destination}', formData?.destination)
                .replace('{totalDays}', formData?.noOfDays)
                .replace('{companion}', formData?.companion)
                .replace('{budget}', formData?.budget)
                .replace('{totalDays}', formData?.noOfDays)

            const result = await chatSession.sendMessage(PROMPT);
            if (!!result) {
                saveAITrip(result?.response?.text());
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Something went wrong!!"
            })
        } finally {
            setLoading(false);
        }
    }

    const handleOpenDialog = () => {
        setOpenDialog(!openDialog);
    }

    const getUserProfile = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'Application/json'
            }
        }).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data));
            setOpenDialog(false);
            handleGenerateTrip();
        }).catch((error) => {
            toast({
                variant: "destructive",
                title: "Something went wrong!! Could not get userinfo"
            })
        })
    }

    const saveAITrip = async (tripData) => {
        try {
            setLoading(true);
            const user = JSON.parse(localStorage.getItem("user"));

            const documentId = Date.now().toString();

            await setDoc(doc(db, "AITrips", documentId), {
                userSelection: formData,
                tripData: JSON.parse(tripData),
                userEmail: user?.email,
                id: documentId
            });

            navigate(`/view-trip/${documentId}`);

        } catch (error) {
            toast({
                variant: "destructive",
                title: "Something went wrong!! Could not save trip!!"
            })
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col gap-10 xs:px-10 sm:px-10 md:px-32 lg:px-56 mt-10">
            <h2 className='font-bold text-4xl text-center'>Ready to start? Let’s create your perfect trip!</h2>
            <p className='text-teal-500 text-center text-2xl'>Whether you're dreaming of a relaxing beach getaway, a thrilling city adventure, or a cultural exploration, our AI-powered trip planner will craft the perfect itinerary tailored just for you!</p>

            <div className='flex flex-col gap-10 mt-20'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>What is your destination?</h2>
                    <LocationIQ onChange={(value) => handleInputChange('destination', value)} />
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>How many days will you be traveling?</h2>
                    <Input type="number" placeholder={'Ex. 3'} onChange={(e) => handleInputChange('noOfDays', e.target.value)} />
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>What's your budget?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {selectBudgetOptions.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    `p-5 border rounded-lg hover:shadow cursor-pointer
                                    ${formData?.budget == item.label && 'bg-teal-50 shadow-lg border-teal-200'} 
                                `}
                                onClick={(e) => handleInputChange('budget', item.label)}
                            >
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-xl'>{item.label}</h2>
                                <h2 className='text-sm text-gray-500 py-5'>{item.description}</h2>
                                <h2 className='text-sm text-gray-500 font-semibold align-bottom'>{item.range}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>Who do you want plan on traveling with on your next adventure?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {selectTravelCompanionOptions.map((item, index) => (
                            <div
                                key={index}
                                className={`
                                    p-5 border rounded-lg hover:shadow cursor-pointer
                                    ${formData?.companion == item.label && 'bg-teal-50 shadow-lg border-teal-200'} 
                                `}
                                onClick={(e) => handleInputChange('companion', item.label)}
                            >
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-xl'>{item.label}</h2>
                                <h2 className='text-sm text-gray-500 py-5'>{item.description}</h2>
                                <h2 className='text-sm text-gray-500 font-semibold align-bottom'>{item.range}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='my-10 flex justify-end'>
                <Button onClick={handleGenerateTrip} disabled={!!loading}>
                    {loading ? <FiLoader /> : "Generate Trip!!"}
                </Button>
            </div>

            <SignInDialog openDialog={openDialog} setOpenDialog={handleOpenDialog} handleSignin={getUserProfile} />

        </div>
    )
}

export default CreateTrip