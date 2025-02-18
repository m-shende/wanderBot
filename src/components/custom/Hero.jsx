import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='flex flex-col items-center mx-56 gap-9'>
            <h2 className='font-extrabold text-6xl text-center py-12'>
                🚀 Your Dream Vacation, Just a Chat Away
            </h2>
            <p className='text-teal-500 font-bold text-center text-2xl'>
                No more stress. Our AI-powered chatbot will help you plan the perfect trip, from flights to activities, all while keeping your budget in mind.
            </p>
            <Link to="/create-trip">
                <Button>Let’s Get Started</Button>
            </Link>
            <img src="/landing.png" alt="landing" className='-mt-20' />
        </div>
    )
}

export default Hero