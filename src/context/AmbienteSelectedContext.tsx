import React, { useState } from "react";

interface props {
    children: JSX.Element | JSX.Element[];
}

interface IAmbienteSelected{
    ambienteSelected: number,
    changeAmbienteSelected: (ambienteId:number)=>void
}

const ambienteSelectedContext = React.createContext<IAmbienteSelected>({} as IAmbienteSelected)


const AmbienteSelectedProvider = ({children}: props) =>{

    const [ambienteSelected, setAmbienteSelected] = useState<number>(0)
    
    const changeAmbienteSelected = (ambienteId:number)=>{
        setAmbienteSelected(ambienteId)
    }

    return(
        <ambienteSelectedContext.Provider value={{
            ambienteSelected: ambienteSelected,
            changeAmbienteSelected: changeAmbienteSelected
        }}>
            {children}
        </ambienteSelectedContext.Provider>
    )
}

export {ambienteSelectedContext, AmbienteSelectedProvider}