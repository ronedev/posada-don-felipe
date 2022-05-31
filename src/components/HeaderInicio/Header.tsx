import React from 'react'
import { FormattedMessage } from 'react-intl'

const Header = () => {
  return (
    <header className='header'>
        <h2>
            <FormattedMessage id='header.title' defaultMessage='Descubrí nuestros paisajes' />
        </h2>
        <div className='circle'>
            <button className='btn1' onClick={()=> window.location.href = "/contacto"}>
                <FormattedMessage id='header.btn' defaultMessage='¡Consulta disponibilidad!'/>
            </button>
        </div>
    </header>
  )
}

export default Header