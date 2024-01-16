import { createContext, useContext, useState } from "react";

const StepperContext = createContext({userData: "", setUserData: null});

export function UserContextProvider({ children }){
    const [ userData, setUserData] = useState("");

    return(
        <UserContext.Provider value={{ userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export function useDonateContext(){
    const{ userData, setUserData} = useContext(StepperContext);

    return{ userData, setUserData}
}