import React, {useState} from 'react'

const Stepper = () => {
    const steps = ["Basic", "Social"]
    const [currentStep, setCurrentStep] = useState(1)
    const [complete, setComplete] = useState(false)

    return (
        <>
            <div className="flex justify-around">
                {
                    steps?.map((step, i) => (
                        <div key={i} className="relative flex flex-col justify-center items-center">
                            <p className="font-semibold mt-6 step">{step}</p>
                            <div className={`step-item ${currentStep === i+1 && "active"} complete`}></div>
                        </div>
                    ))
                }
            </div>

            <div>
                {
                    steps?.map((step, i) => (
                        <div>
                            {i+1 < currentStep || complete ?
                                <div>

                                </div> :
                                <div>
                                    <div className="mt-8">
                                        <p className="text-md">Enter Name*</p>
                                        <input className="in" placeholder="Eg. John Doe"/>

                                        <p className="font-md mt-2">Enter Mail*</p>
                                        <input className="in" placeholder="Eg. John@xyz.com" />

                                        <p className="font-md mt-2">Enter Phone*</p>
                                        <input className="in" placeholder="Eg. 9123456789" />
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>

            <button className="btn"
                    onClick={() => {
                        currentStep === steps.length ?
                            setComplete(true) :
                            setCurrentStep((prev) => prev + 1)
                    }}
            >
                {currentStep === steps.length ? "Done" : "Next"}
            </button>
        </>

    )
}
export default Stepper
