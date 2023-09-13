import React from 'react'
import Image from "next/image";
import Link from "next/link";

// IMPORTING IMAGES
import Github from ".././../../assests/login_assets/Github.png"
import Twitter from "../../../assests/login_assets/Twitter.png"
import LinkedIn from "../../../assests/login_assets/LinkedIn.png"
import Discord from "../../../assests/login_assets/Discord.png"
const LoginPage = () => {
    return (
        <div className="grid grid-cols-2 h-full">
            <div className="bg-login_primary grid">
                <div>
                    <div className="text-white text-lg font-bold px-8 py-12">
                        LOGO
                    </div>
                </div>
                <div className="text-white text-6xl font-bold grid items-center text-center">
                    <span>Board.</span>
                </div>
                <div className="flex flex-cols justify-center items-end py-8 gap-8">
                    <Image
                        src={Github}
                        alt="github"
                        className="h-10 w-10"

                    />
                    <Image
                        src={Twitter}
                        alt="github"
                        className="h-10 w-10"

                    />
                    <Image
                        src={LinkedIn}
                        alt="github"
                        className="h-10 w-10"

                    />
                    <Image
                        src={Discord}
                        alt="github"
                        className="h-10 w-10"

                    />
                </div>
            </div>
            <div className="flex items-center justify-around bg-[#F8FAFF]">
                <div>
                    <p className="text-3xl font-bold">Sign In</p>
                    <p className="text-sm mt-1">Sign in to your account</p>
                    {/*<button>Click</button>*/}
                    <div className="bg-[#FFFFFF] w-96 rounded-xl mt-4">
                        <div className="p-6">
                            <form className="grid">
                                <span className="text-sm">Email address</span>
                                <input
                                    type="email"
                                    placeholder="please enter your email"
                                    className="mt-2.5"
                                />
                                <span className="text-sm mt-3">Password</span>
                                <input
                                    type="password"
                                    placeholder="please enter your password"
                                    className="mt-2.5"
                                />
                            </form>
                            <div className="text-sm text-login_primary mt-4">Forgot password?</div>
                            <button className="mt-6 font-semibold">Sign In</button>
                        </div>
                    </div>
                    <div className="text-center text-sm mt-6">Don't have an account? <Link href="/signup" className="text-login_primary">Register here</Link></div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage
