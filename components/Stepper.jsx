import React, {useState} from 'react'

const Stepper = () => {
    const steps = ["Basic", "Social"]
    const [currentStep, setCurrentStep] = useState(1)
    return (
        <>
            <div className="flex justify-around">
                {
                    steps?.map((step, i) => (
                        <div key={i} className="relative flex flex-col justify-center items-center">
                            <p className="font-semibold mt-6">{step}</p>
                            <div className={`step-item active`}></div>
                        </div>
                    ))
                }
            </div>
            <button className="btn">Next</button>
        </>

    )
}
export default Stepper
