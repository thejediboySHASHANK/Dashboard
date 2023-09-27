import React from 'react'
import Image from "next/image";
import Github from "@/assests/login_assets/Github.png";
import Twitter from "@/assests/login_assets/Twitter.png";
import LinkedIn from "@/assests/login_assets/LinkedIn.png";
import Discord from "@/assests/login_assets/Discord.png";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="md:grid md:grid-cols-2 h-full overflow-y-hidden">
            <div className="hidden bg-login_primary md:grid">
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
            <div className="flex items-center justify-around mt-48 md:mt-0 md:bg-[#F8FAFF]">
                <div>
                    <p className="text-3xl font-bold px-3 md:px-0">Sign Up</p>
                    <p className="text-sm mt-1 px-3 md:px-0">Sign up to your account</p>
                    {/*<button>Click</button>*/}
                    <div className="bg-[#FFFFFF] w-96 rounded-xl mt-4">
                        <div className="p-6">
                            <form className="grid mb-4">
                                <span className="text-sm">Email address</span>
                                <input
                                    type="email"
                                    placeholder="please enter your email"
                                    className="in mt-2.5"
                                />
                                <span className="text-sm mt-3">Name</span>
                                <input
                                    type="email"
                                    placeholder="please enter your name"
                                    className="in mt-2.5"
                                />
                                <span className="text-sm mt-3">Password</span>
                                <input
                                    type="password"
                                    placeholder="please enter your password"
                                    className="in mt-2.5"
                                />
                            </form>
                            {/*<div className="text-sm text-login_primary mt-4">Forgot password?</div>*/}
                            <button className="btn font-semibold">Sign Up</button>
                        </div>
                    </div>
                    <div className="text-center text-sm mt-6">Already have an account? <Link href="/login" className="text-login_primary">Login here</Link></div>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage
