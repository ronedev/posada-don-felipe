import React from 'react'
import { FormattedMessage } from 'react-intl'
import { MapContainer } from './MapContainer'

const Ubicacion = () => {
  return (
    <section className='ubicacionSection'>
        <div className='infoUbicacion'>
            <h2><FormattedMessage id='posada.ubicacion.title' defaultMessage='¿Donde estamos?' /></h2>
            <p><FormattedMessage id='posada.ubicacion.description' defaultMessage='Estamos a 10 cuadras del km0 de la ciudad. Cine, bares, cafes, local de juegos tipo arcade, restaurantes y más a tan solo ¡10 cuadras de tu hospedaje! Podes ver que otras cosas se encuentran en los alrededores de la posada desde Google Maps: ' /></p>
            <button className='btn2'><FormattedMessage id='posada.ubicacion.btn' defaultMessage='Consultar reserva' /></button>
        </div>
        <MapContainer />
    </section>
  )
}

export {Ubicacion}