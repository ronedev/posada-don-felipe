import React, { useState } from "react";

interface props {
    children: JSX.Element | JSX.Element[];
}

interface IAmbienteSelected{
    ambienteSelected: number,
    ambientePrev: number,
    ambienteNext: number,
    changeAmbienteSelected: (ambienteId:number)=>void
}

const ambienteSelectedContext = React.createContext<IAmbienteSelected>({} as IAmbienteSelected)


const AmbienteSelectedProvider = ({children}: props) =>{

    const [ambienteSelected, setAmbienteSelected] = useState<number>(0)
    const [ambientePrev, setAmbientePrev] = useState<number>(0)
    const [ambienteNext, setAmbienteNext] = useState<number>(1)
    
    const changeAmbienteSelected = (ambienteId:number)=>{
        setAmbienteSelected(ambienteId)
        setAmbientePrev(ambienteId === 0 ? 0 : ambienteId - 1)
        setAmbienteNext(ambienteId + 1)
    }

    return(
        <ambienteSelectedContext.Provider value={{
            ambienteSelected: ambienteSelected,
            ambienteNext: ambienteNext,
            ambientePrev: ambientePrev,
            changeAmbienteSelected: changeAmbienteSelected
        }}>
            {children}
        </ambienteSelectedContext.Provider>
    )
}

export {ambienteSelectedContext, AmbienteSelectedProvider}