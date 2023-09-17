"use client"
import React, {useEffect} from 'react'
import {signOut, useSession} from "next-auth/react";
import {
    Banknote,
    CalendarClock,
    Code,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    Music,
    Settings,
    Tag, ThumbsUp, UserCircle2, Users,
    VideoIcon
} from "lucide-react";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";
// IMPORTING CHARTJS COMPONENTS
import ChartBar from "@/components/chart";
import DoughnutChart from "@/components/doughnutChart"

const Dashboard = () => {
    // const {data: session} = useSession()
    // if (session && session.user) {
    //     return (
    //         <div className="flex gap-4 ml-auto">
    //             <p className="text-sky-600">{session.user.name}</p>
    //             <button onClick={() => signOut()} className="text-red-500">
    //                 Sign Out
    //             </button>
    //         </div>
    //     )
    // }



    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
            color: "text-sky-500"
        },
        {
            label: "Transactions",
            icon: Tag,
            href: "/conversation",
            color: "text-violet-500"
        },
        {
            label: "Schedules",
            icon: CalendarClock,
            href: "/image",
            color: "text-pink-700"
        },
        {
            label: "Users",
            icon: UserCircle2,
            href: "/video",
            color: "text-orange-700"
        },
        {
            label: "Settings",
            icon: Settings,
            href: "/settings",
        },

    ]

    const cards = [
        {
            label: "Total Revenues",
            icon : Banknote,
            value : "$2,129,430",
            percent: "+2.5%",
            color: "bg-green-500"
        },
        {
            label: "Total Transactions",
            icon : Tag,
            value : "1,520",
            percent: "+1.7%",
            color: "bg-yellow-500"
        },
        {
            label: "Total Likes",
            icon : ThumbsUp,
            value : "9,721",
            percent: "+1.4%",
            color: "bg-red-500"
        },
        {
            label: "Total Users",
            icon : Users,
            value : "9,721",
            percent: "+4.2%",
            color: "bg-blue-500"
        },
    ]

    return (
        <div className="grid grid-cols-[1fr_4fr] h-full">
            <div className="bg-main p-5">
                <div className="bg-login_primary rounded-xl h-full">
                    <p className="text-white text-4xl font-bold px-10 pt-12 pb-6">Board.</p>
                    <div className="space-y-2.5 mt-4">
                        {routes.map((route) => (
                            <Link
                                href={route.href}
                                key={route.href}
                                className={"text-md group flex p-3 w-full justify-start font-semibold cursor-pointer hover:text-white hover:bg-white/10 rounded-lg text-white"}
                            >
                                <div className="grid grid-cols-[1fr_4fr] px-7 gap-2">
                                    <route.icon className="h-5 w-5 mr-3"/>
                                    <span className="">{route.label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-white text-sm px-8 fixed bottom-20">
                        <div className="flex items-end cursor-pointer hover:text-gray-300">
                            Help
                        </div>
                        <div className="mt-4 cursor-pointer hover:text-gray-300">
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main overflow-y-hidden">
                <div className="h-full grid grid-rows-[10%, 50%, 40%] gap-y-4 px-10 py-10 overflow-y-hidden">
                    <div className="m-0 p-0">
                        <p className="text-2xl font-bold">Dashboard</p>
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
                                            <span className="text-xs ml-2 text-green-500 font-medium">{card.percent}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl w-full border shadow-lg border-2 border-gray-200 p-6">
                        <p className="text-lg font-bold">Activities</p>
                        <p className="text-xs text-gray-500">May - June 2021</p>
                        <ChartBar />
                    </div>
                    <div className="flex justify-between gap-8">
                        <div className="w-1/2 p-6 bg-white shadow-lg rounded-2xl border-2 border-gray-200">
                            <p className="text-lg font-bold fixed">Top Products</p>
                            <div className="grid grid-cols-2">
                                <DoughnutChart />
                                <div className="flex flex-col justify-around">
                                    <p className="text-sm font-bold">Basic Tees</p>
                                    <p className="text-sm font-bold">Custom Short Pants</p>
                                    <p className="text-sm font-bold">Super Pants</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white  shadow-lg rounded-2xl border-2 border-gray-200">

                        </div>
                    </div>
                </div>
                {/*<SignOutButton />*/}
            </div>
        </div>
    )
}
export default Dashboard
