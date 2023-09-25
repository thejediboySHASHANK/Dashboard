import React, {useState} from 'react'
import Stepper from "@/components/Stepper"
const Modal = ({isVisible, onClose} : any) => {
    if (!isVisible) return null;
    const [show, setShow] = useState(false)

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
                            // onSubmit={() => onClose()}
                        >
                            X
                        </button>
                    </div>

                    <div className="border-b mt-5"></div>
                    <div className="">
                        <Stepper />
                    </div>
                    <div className="mt-8">
                        <p className="text-md">Enter Name*</p>
                        <input className="in" placeholder="Eg. John Doe"/>

                        <p className="font-md mt-2">Enter Mail*</p>
                        <input className="in" placeholder="Eg. John@xyz.com" />

                        <p className="font-md mt-2">Enter Phone*</p>
                        <input className="in" placeholder="Eg. 9123456789" />

                        <button className="btn">
                            Next
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal
