import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import leftArrow from './../../img/icons/leftArrow.png'
import rightArrow from './../../img/icons/rightArrow.png'
import CircuitoIndividual from './CircuitoIndividual'
import { circuitosInfo } from './circuitosInfo'

const Circuitos = () => {

    const [carruselSelected, setCarruselSelected] = useState<string>('atuel')

    const changeCircuito = ()=>{
        switch(carruselSelected){
            case 'atuel':
                setCarruselSelected('diamante')
                break
            case 'diamante':
                setCarruselSelected('atuel')
                break
            default:
                setCarruselSelected('atuel')
        }
    }

    return (
        <section className='circuitosSection'>
            <div className='circle'>
                <h2>
                    <FormattedMessage id='circuitos.title' defaultMessage='Nuestra hermosa ciudad' />
                </h2>
            </div>
            <div className='carrusel'>
                <img src={leftArrow} alt="left arrow" className={carruselSelected === 'diamante' ? 'arrowVisible' : 'arrowInvisible'} onClick={()=>changeCircuito()} />
                <div className='circuitoContainer'>
                    {Object.keys(circuitosInfo).map((circuitoName, idx) => {
                        const id: string = idx.toString()
                        return (
                            <div className={carruselSelected === circuitoName ? 'circuito selected' : 'circuito'} id={id}>
                                <h3>
                                    <FormattedMessage id='circuitos.circuito.title' defaultMessage="Circuito del " />
                                    <span>{circuitoName}</span>
                                </h3>
                                {idx === 0 ? <CircuitoIndividual circuito={circuitosInfo.atuel} /> : <CircuitoIndividual circuito={circuitosInfo.diamante} />}
                            </div>
                        )
                    })}
                </div>
                <img src={rightArrow} alt="right arrow" className={carruselSelected === 'atuel' ? 'arrowVisible' : 'arrowInvisible'} onClick={()=>changeCircuito()} />
            </div>
        </section>
    )
}

export { Circuitos }