"use client"
import React, {Fragment, useEffect, useState} from 'react'
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import {
    Banknote, Bell,
    CalendarClock,
    Code,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    Music, Plus, Search,
    Settings, Sidebar,
    Tag, ThumbsUp, UserCircle2, Users,
    VideoIcon
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

const Dashboard = () => {

    const cards = [
        {
            label: "Total Revenues",
            icon: Banknote,
            value: "$2,129,430",
            percent: "+2.5%",
            color: "bg-green-500"
        },
        {
            label: "Total Transactions",
            icon: Tag,
            value: "1,520",
            percent: "+1.7%",
            color: "bg-yellow-500"
        },
        {
            label: "Total Likes",
            icon: ThumbsUp,
            value: "9,721",
            percent: "+1.4%",
            color: "bg-red-500"
        },
        {
            label: "Total Users",
            icon: Users,
            value: "9,721",
            percent: "+4.2%",
            color: "bg-blue-500"
        },
    ]

    const [showModal, setShowModal] = useState(false)

    return (
        <Fragment>
            <div className="grid grid-cols-[1fr_4fr] h-full">
                <div className="bg-main p-5">
                    <SideBar />
                </div>
                <div className="bg-main overflow-y-hidden">
                    <div className="h-full grid grid-rows-[10%, 50%, 40%] gap-y-4 px-10 py-10 overflow-y-hidden">
                        <div className="m-0 p-0">
                            <Navbar/>
                            <div className="mt-4 flex justify-between gap-8">
                                {cards.map((card) => (
                                    <div
                                        key={card.value}
                                        className="bg-white w-1/4 py-4 px-6 border shadow-lg border-2 border-gray-200 rounded-2xl flex flex-col"
                                    >
                                        <div className={`p-1.5 w-fit rounded-full text-white flex ${[card.color]}`}>
                                            <card.icon className={`h-5 w-5 justify-center`}/>
                                        </div>
                                        <span className="text-xs mt-1 font-medium">{card.label}</span>
                                        <div className="grid grid-cols-[3fr_1fr] mt-1">
                                            <span className="text-xl font-bold">{card.value}</span>
                                            <div className="flex items-center bg-green-100 rounded-2xl">
                                            <span
                                                className="text-xs ml-2 text-green-500 font-medium">{card.percent}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl w-full border shadow-lg border-2 border-gray-200 p-6">
                            <p className="text-lg font-bold">Activities</p>
                            <p className="text-xs text-gray-500">May - June 2021</p>
                            <ChartBar/>
                        </div>
                        <div className="flex justify-between gap-8">
                            <div className="w-1/2 p-6 bg-white shadow-lg rounded-2xl border-2 border-gray-200">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <p className="text-lg font-bold">Top Products</p>
                                        <DoughnutChart/>
                                    </div>

                                    <div className="flex flex-col justify-around">
                                        <p className="text-sm font-bold">Basic Tees</p>
                                        <p className="text-sm font-bold">Custom Short Pants</p>
                                        <p className="text-sm font-bold">Super Pants</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-around items-center w-1/2
                            bg-white shadow-lg rounded-2xl border-2 border-gray-200"
                            >
                                <div className="flex flex-col items-center"
                                     onClick={() => setShowModal(true)}
                                >

                                    <div className="bg-gray-100 p-3 rounded-full">
                                        <Plus className="w-10 h-10 text-gray-400 cursor-pointer"/>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-2">Add Profile</p>
                                    <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Dashboard
