import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps}) => {
  return (
    <div className='container mt-4 mb-8 flex justify-around'>
        <button 
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-yellow py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray
        ${
            currentStep === 1 ? " cursor-not-allowed" : ""
        }`}
        >
            Back
        </button>

        <button
            onClick={() => handleClick("next")}
            className='cursor-pointer rounded-lg bg-yellow py-2 px-4 font-semibold uppercase text-white duration-200 ease-in-out hover:gray'
        >
            {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>

    </div>
  )
}

export default StepperControl