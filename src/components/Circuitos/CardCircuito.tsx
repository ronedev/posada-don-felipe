import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'

interface circuito {
    circuito: {
        name: string,
        description: string,
        distance: string,
        img: string
    }
}

const CardCircuito = ({ circuito }: circuito) => {

    const [selected, setSelected] = useState<boolean>(false)

    return (
        <article className='card'>
            <img src={circuito.img} alt="card" />
            <div className='infoCard'>
                <h4>{circuito.name}</h4>
                <p>
                    <FormattedMessage id={circuito.description} />
                </p>
                <span>
                    <FormattedMessage id={circuito.distance} />
                </span>
            </div>
        </article>
    )
}

export { CardCircuito }