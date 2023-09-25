"use client"
import React, {useState} from 'react'
import {Bell, Search} from "lucide-react";
import Image from "next/image";
import {signOut, useSession} from "next-auth/react";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const {data: session} = useSession()
    const router = useRouter()
    const handleSignOut = async () => {
        Swal.fire({
            title: 'Do you want to Sign Out?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await signOut()
                router.push('/login')
            }
        })
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
                            onClick={handleSignOut}
                            src={session.user.image}
                            width={2}
                            height={2}
                            className="rounded-full w-5 h-5 cursor-pointer"
                            alt="user profile"
                            layout="responsive"
                        />
                    </div> :
                    <div>
                        <Link href="/login" className="hover:text-primary">
                            Sign In / Sign Up
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}
export default Navbar
