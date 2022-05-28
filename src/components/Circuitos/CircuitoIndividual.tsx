import React from 'react'
import { CardCircuito } from './CardCircuito'

interface circuito{
    name: string,
    description: string,
    distance: string,
    img: string
}
interface props{
    circuito: Array<circuito>
}

const CircuitoIndividual = ({circuito}:props) => {
  return (
        <div className='lugaresGrid'>
            {circuito.map(circ =>{
                return(
                    <>
                        <CardCircuito circuitoPlace={circ} />
                    </>
                )
            })}
        </div>
    )
}

export default CircuitoIndividual