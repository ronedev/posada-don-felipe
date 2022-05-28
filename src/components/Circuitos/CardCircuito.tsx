import { circuitoPlaceContext } from 'context/CircuitoPlaceContext'
import React, { useContext, useState } from 'react'
import { FormattedMessage } from 'react-intl'

interface circuito {
    circuitoPlace: {
        name: string,
        description: string,
        distance: string,
        img: string
    }
}

const CardCircuito = ({ circuitoPlace }: circuito) => {

    const {placeSelected, changePlaceSelected} = useContext(circuitoPlaceContext)

    return (
        <article className={placeSelected === circuitoPlace.name ? 'card selected': 'card'} onClick={()=> changePlaceSelected(circuitoPlace.name)}>
            <img src={circuitoPlace.img} alt="card" />
            <div className='infoCard'>
                <h4>{circuitoPlace.name}</h4>
                <p>
                    <FormattedMessage id={circuitoPlace.description} />
                </p>
                <span>
                    <FormattedMessage id={circuitoPlace.distance} />
                </span>
            </div>
        </article>
    )
}

export { CardCircuito }