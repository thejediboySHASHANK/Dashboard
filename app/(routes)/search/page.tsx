"use client"
import React, {Fragment, useContext, useEffect, useState} from 'react'
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";

import {
    Banknote, Bell,
    CalendarClock,
    Code, Dot,
    ImageIcon, Instagram,
    LayoutDashboard, Mail, MessageCircle,
    MessageSquare,
    Music, Plus, Search,
    Settings, Sidebar,
    Tag, ThumbsUp, UserCircle2, Users,
    VideoIcon, Youtube
} from "lucide-react";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";
// IMPORTING CHARTJS COMPONENTS
import ChartBar from "@/components/chart";
import DoughnutChart from "@/components/doughnutChart"
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar"
import Modal from "@/components/Modal";
import Swal from "sweetalert2";
import {UserContext} from "@/context/UserContext";


const Dashboard = () => {
    const {setUser}: any = useContext(UserContext)
    const {user}: any = useContext(UserContext)

    const [showModal, setShowModal] = useState(false)
    console.log(showModal)

    const logs = [
        {
            "level": "error",
            "message": "Failed to connect to DB",
            "resourceId": "server-1234",
            "timestamp": "2023-09-15T08:00:00Z",
            "traceId": "abc-xyz-123",
            "spanId": "span-456",
            "commit": "5e5342f",
            "metadata": {
                "parentResourceId": "server-0987"
            }
        },
        {
            "level": "error",
            "message": "Failed to connect to DB",
            "resourceId": "server-1234",
            "timestamp": "2023-09-15T08:00:00Z",
            "traceId": "abc-xyz-123",
            "spanId": "span-456",
            "commit": "5e5342f",
            "metadata": {
                "parentResourceId": "server-0987"
            }
        },
        {
            "level": "error",
            "message": "Failed to connect to DB",
            "resourceId": "server-1234",
            "timestamp": "2023-09-15T08:00:00Z",
            "traceId": "abc-xyz-123",
            "spanId": "span-456",
            "commit": "5e5342f",
            "metadata": {
                "parentResourceId": "server-0987"
            }
        },
        {
            "level": "error",
            "message": "Failed to connect to DB",
            "resourceId": "server-1234",
            "timestamp": "2023-09-15T08:00:00Z",
            "traceId": "abc-xyz-123",
            "spanId": "span-456",
            "commit": "5e5342f",
            "metadata": {
                "parentResourceId": "server-0987"
            }
        },
        {
            "level": "error",
            "message": "Failed to connect to DB",
            "resourceId": "server-1234",
            "timestamp": "2023-09-15T08:00:00Z",
            "traceId": "abc-xyz-123",
            "spanId": "span-456",
            "commit": "5e5342f",
            "metadata": {
                "parentResourceId": "server-0987"
            }
        },
        {
            "level": "error",
            "message": "Failed to connect to DB",
            "resourceId": "server-1234",
            "timestamp": "2023-09-15T08:00:00Z",
            "traceId": "abc-xyz-123",
            "spanId": "span-456",
            "commit": "5e5342f",
            "metadata": {
                "parentResourceId": "server-0987"
            }
        }
    ]
    const Close = () => {
        setShowModal(false)
        console.log(showModal)
    }
    return (
        <Fragment>
            <div className="md:grid md:grid-cols-[1fr_4fr] h-full">
                <div className="bg-main md:p-5">
                    <SideBar/>
                </div>
                <div className="bg-main">
                    <div className="h-full md:grid md:grid-rows-[10%] gap-y-4 px-3 md:px-10 py-10">
                        <div>
                            <Navbar />
                        </div>
                        <div className="">
                            <div className="w-full flex justify-around items-start gap-8">
                                <textarea className="rounded-2xl pl-6 pt-3 focus:outline-none w-3/4 shadow-md" placeholder="Try searching, message: Failed to connect to DB"/>
                                <button className="bg-[#4285F4] my-2 py-2 px-3 rounded-xl text-white w-1/4 flex justify-center gap-4">
                                    <Search />
                                    Search
                                </button>
                            </div>
                            <div className="text-center mt-20 text-gray-500 font-semibold">
                                {/*Nothing to display right now, please search for a specific field.*/}
                                {logs.map((log) => (
                                    <div
                                        key={log.spanId}
                                        className="bg-white w-full md:w-full py-4 px-6 border shadow-lg border-2 border-gray-200 rounded-2xl"
                                    >
                                        <div>{log.message}</div>
                                        <div>{log.spanId}</div>
                                        <div>{log.level}</div>
                                        <div>{log.message}</div>
                                        <div>{log.level}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Dashboard
