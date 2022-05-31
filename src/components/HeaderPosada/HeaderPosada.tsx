import React from 'react'
import videoURL from "./../../videos/posadaDF.mp4"
import { FormattedMessage } from 'react-intl'

const HeaderPosada = () => {
  return (
    <header className='headerPosada'>
        <div className='info'>
            <h2>
                <FormattedMessage id='posada.header.title' defaultMessage='Nuestra hermosa posada' />
            </h2>
            <p>
                <FormattedMessage id='posada.header.description' defaultMessage='Como muchas otras familias durante la pandemia mundial nos vimos acorralados economicamente. Tras meses de sudor, lagrimas y remodelación nació La Posada de Don Felipe.' />
            </p>
        </div>
        <video src={videoURL} autoPlay={true} loop muted></video>
    </header>
  )
}

export {HeaderPosada}