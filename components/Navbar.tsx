"use client"
import React, {useState} from 'react'
import {Bell, Search} from "lucide-react";
import Image from "next/image";
import {useSession} from "next-auth/react";

const Navbar = () => {
    const {data: session} = useSession()
    const [show, setShow] = useState(false)

    if (show) {
        return (
            <div className="flex justify-around items-start">
                <div className="absolute w-2/5 h-40 bg-white text-white">

                </div>
            </div>

        )
    }

    return (
        <div className="flex justify-between">
            <p className="text-2xl font-bold">Dashboard</p>
            <div className="items-center flex gap-4">
                <div className="flex items-center bg-white pr-5 rounded-2xl text-md py-1 border border-gray-200">
                    <input className="rounded-2xl pl-6 focus:outline-none" placeholder="Search..."/>
                    <Search className="w-4 h-4" />
                </div>
                <Bell className="w-6 h-6" />
                {session && session.user && session.user.image ?
                    <div className="w-8 h-8">
                        <Image
                            src={session.user.image}
                            width={2}
                            height={2}
                            className="rounded-full w-5 h-5"
                            alt="user profile"
                            layout="responsive"
                        />
                    </div> :
                    <div>
                        <p>Sign In / Sign Up</p>
                    </div>
                }
            </div>
        </div>
    )
}
export default Navbar
