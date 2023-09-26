"use client"

import React, {useContext, useState} from 'react'
import {UserContext, UserContextProvider} from "@/context/UserContext";


const Stepper = ({onClose}) => {
    const steps = ["Basic", "Social"]
    const [currentStep, setCurrentStep] = useState(1)
    const [complete, setComplete] = useState(false)

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [insta, setInsta] = useState("")
    const [youtube, setYoutube] = useState("")
    const {setUser}= useContext(UserContext)
    const {user} = useContext(UserContext)

    const renderForms = () => {
        if (complete) {
            const data = {
                name,
                mail,
                phone,
                insta,
                youtube
            }
            setUser(data)
            onClose()
        }
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <div className="mt-8">
                            <p className="text-md">Enter Name*</p>
                            <input value={name} onChange={ev => setName(ev.target.value)} className="in" placeholder="Eg. John Doe"/>

                            <p className="font-md mt-2">Enter Mail*</p>
                            <input value={mail} onChange={ev => setMail(ev.target.value)} className="in" placeholder="Eg. John@xyz.com" />

                            <p className="font-md mt-2">Enter Phone*</p>
                            <input value={phone} onChange={ev => setPhone(ev.target.value)} className="in" placeholder="Eg. 9123456789" />
                        </div>
                    </div>
                )

            case 2:
                return (
                    <div>
                        <div className="mt-8">
                            <p className="text-md">Instagram Link<span className="text-gray-400 text-sm"> (Optional)</span></p>
                            <input value={insta} onChange={ev => setInsta(ev.target.value)} className="in" placeholder="Eg. instagram.com/username"/>

                            <p className="font-md mt-2">Youtube Link<span className="text-gray-400 text-sm"> (Optional)</span></p>
                            <input value={youtube} onChange={ev => setYoutube(ev.target.value)} className="in" placeholder="Eg. youtube/username" />
                        </div>
                    </div>
                )
        }
    }

    return (
        <>
            <div className="flex justify-around mb-6">
                {
                    steps?.map((step, i) => (
                        <div key={i} className="relative flex flex-col justify-center items-center">
                            <p className="font-semibold mt-6 step">{step}</p>
                            <div className={`step-item ${currentStep === i+1 && "active"} complete`}></div>
                        </div>
                    ))
                }
            </div>

            <div className="mb-6">
                {renderForms()}
            </div>

            <div className="grid justify-items-end gap-4">
                <div className="flex gap-4">
                    {currentStep === 2 &&
                        <div>
                            <button className="bg-[#ffffff] border border-gray-400 hover:bg-gray-200 my-2 py-2 px-3 rounded-xl text-white w-18"
                                    onClick={() => {
                                        setCurrentStep((prev) => prev - 1)
                                    }}
                            >
                                <span className="text-black text-sm font-semibold">Back</span>
                            </button>
                        </div>
                    }
                    <button
                        className="bg-[#4285F4] my-2 py-2 px-3 rounded-xl text-white w-18"
                            onClick={() => {
                                currentStep === steps.length ?
                                    setComplete(true) :
                                    setCurrentStep((prev) => prev + 1)
                            }}
                    >
                        <span className="font-semibold text-sm">{currentStep === steps.length ? "Done" : "Next"}</span>
                    </button>
                </div>

            </div>

        </>

    )
}
export default Stepper
