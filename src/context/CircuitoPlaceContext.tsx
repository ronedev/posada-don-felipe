import React, { useState } from "react";

interface props {
    children: JSX.Element | JSX.Element[];
}

interface ICircuitoPlaceContext{
    placeSelected: string,
    changePlaceSelected: (place:string)=>void
}

const circuitoPlaceContext = React.createContext<ICircuitoPlaceContext>({} as ICircuitoPlaceContext)

const CircuitoPlaceProvider = ({children}:props) => {

    const [placeSelected, setPlaceSelected] = useState<string>('')

    const changePlaceSelected = (place:string)=>{
        if(place === placeSelected){
            setPlaceSelected('')
        }else{
            setPlaceSelected(place)
        }
    }

    return(
        <circuitoPlaceContext.Provider value={{
            placeSelected: placeSelected,
            changePlaceSelected: changePlaceSelected
        }}>
            {children}
        </circuitoPlaceContext.Provider>
    )
}

export {circuitoPlaceContext, CircuitoPlaceProvider}