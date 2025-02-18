import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { googleLogout } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import SignInDialog from './SignInDialog';
import axios from 'axios';

const Header = () => {
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        googleLogout();
        localStorage.clear();
        navigate("/");
    }

    const handleSigninClick = () => {
        if (!user) {
            setOpenDialog(true);
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
            // handleSigninClick();
        }).catch((error) => {
            toast({
                variant: "destructive",
                title: "Something went wrong!! Could not get userinfo"
            })
        })
    }

    return (
        <div className='p-3 shadow-sm flex justify-between items-center px-5'>
            <Link to="/">
                <img src="/logo.svg" />
            </Link>
            <div>
                {user ?
                    <div className='flex items-center gap-5'>
                        <Link to="/create-trip">
                            <Button variant="outline" className="rounded-full text-slate-800">Create Trip</Button>
                        </Link>
                        <Link to="/my-trips">
                            <Button variant="outline" className="rounded-full text-slate-800">My Trips</Button>
                        </Link>
                        <Popover>
                            <PopoverTrigger>
                                <img src={user?.picture} alt="" className='h-[35px] w-[35px] rounded-full cursor-pointer' />
                            </PopoverTrigger>
                            <PopoverContent>
                                <h2 onClick={handleLogout}>Logout</h2>
                            </PopoverContent>
                        </Popover>

                    </div>
                    :
                    <Button onClick={handleSigninClick}>Sign In</Button>
                }
            </div>
            <SignInDialog openDialog={openDialog} setOpenDialog={handleOpenDialog} handleSignin={getUserProfile} />
        </div>
    )
}

export default Header