import { ambienteSelectedContext } from 'context/AmbienteSelectedContext'
import React, { useContext} from 'react'
import { FormattedMessage } from 'react-intl'

interface props {
    ambiente: {
        name: string,
        description: string,
        image: string
    }
    id: number
}

const AmbienteCard = ({ ambiente, id }: props) => {

    const {ambienteSelected} = useContext(ambienteSelectedContext)

    return (
        <article className={id === ambienteSelected ? 'ambienteCard selected' : 'ambienteCard'}>
            <div className='ambienteInfo'>
                <h2>
                    <FormattedMessage id={ambiente.name} />
                </h2>
                <p>
                    <FormattedMessage id={ambiente.description} />
                </p>
                <button className='btn2'>
                    <FormattedMessage id='ambiente.btn' defaultMessage='Reservar' />
                </button>
            </div>
            <img src={ambiente.image} alt="ambiente" />
        </article>
    )
}

export { AmbienteCard }