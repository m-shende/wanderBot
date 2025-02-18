import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';


const SignInDialog = ({ openDialog, setOpenDialog, handleSignin }) => {

    const handleLogin = useGoogleLogin({
        onSuccess: response =>
            handleSignin(response)
        ,
        onError: error => console.log("error", error)
    });

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>

                    <DialogTitle className="sr-only">Sign in</DialogTitle>
                    <div>
                        <img src='/logo.svg' className='h-8' />
                        <h2 className='font-bold text-lg mt-7'>Sign in with Google</h2>
                    </div>
                    <DialogDescription>
                        Sign in to the app with google authentication
                        <Button className='w-full mt-5 flex gap-4 items-center' onClick={handleLogin}>
                            <FcGoogle />
                            Sign with google
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default SignInDialog
