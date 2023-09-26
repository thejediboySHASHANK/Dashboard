import React, {useContext, useEffect, useState} from 'react'
import Stepper from "@/components/Stepper"
import {UserContext, UserContextProvider} from "@/context/UserContext";
const Modal = ({isVisible, onClose} : any) => {

    const {user}:any = useContext(UserContext)

    useEffect(() => {
        console.log (user)
    }, [user])

    if (!isVisible) return null;
    // const [show, setShow] = useState(false)

    return (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center"
        >
            <div className="w-[544px] flex flex-col">
                <div  className="bg-white p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Add New Profile</p>
                        <button
                            className="text-black text-xl place-self-end"
                            onClick={() => onClose()}
                        >
                            X
                        </button>
                    </div>

                    <div className="border-b mt-5"></div>
                    <div className="">
                        <Stepper onClose={onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal
