import React, {useState, useEffect, useRef} from 'react'

const Stepper = ({steps, currentStep}) => {
    const [newStep, setNewStep] = useState([]);
    const stepsRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;

        while(count < newSteps.length){
            // current step
            if(count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted:true,
                    selected:true,
                    completed:true,
                }
                count++;
            }
            //steps completed
            else if (count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected:true,
                    completed:true,
                }
                count++;
            }
            //steps pending
            else{
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected:false,
                    completed:false,
                }
                count++;
            }
        }
        return newSteps;
    }

    useEffect(() => {
        const stepsState = steps.map((step, index) => 
            Object.assign(
                {},
                {
                    description: step,
                    completed:false,
                    highlighted: index === 0 ? true: false,
                    selected: index === 0 ? true : false,
                }
            )
        )

        stepsRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepsRef.current);
        setNewStep(current);
    }, [steps, currentStep])
    return (
    <div
    key={index}
    className={
        index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"
    }>
        <div className='relative flex flex-col items-center'>
            <div className={`rounded-full transition duration-500 ease-in-out border-2 border-yellow h-12 w-12 flex items-center justify-center py-3
            ${
                steps.selected ? "bg-yellow text-white font-bold border border-yellow" : ""
            }`}>
                {step.completed ? (
                    <span className='text-white font-bold text-xl'>&#10003</span>
                ) : (
                    index + 1
                )}

            </div>
        </div>


    </div>
    )
    }

export default Stepper