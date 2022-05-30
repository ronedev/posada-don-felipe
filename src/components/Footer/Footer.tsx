import React from 'react'
import { FormattedMessage } from 'react-intl'
import whatsappIcon from './../../img/icons/wsp.png'
import facebookIcon from './../../img/icons/fb.png'
import instagramIcon from './../../img/icons/insta.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='posadaInfo'>
            <h3>La Posada de <span>Don Felipe</span></h3>
            <p>
                <FormattedMessage id='footer.info' defaultMessage='Somos una humilde familia que durante la pandemia tomó la desición de comenzar este emprendimiento para sustentarse. La remodelación de la casa en su totalidad cuenta con el sudor de cada uno de nosotros, para transformar la casa donde crecimos en un lugar completamente acogedor y que nuestro hogar tambien pueda ser el hogar momentaneo de otros.' />
            </p>
        </div>
        <div className='contacto'>
            <h3>
                <FormattedMessage id='footer.contacto.title' defaultMessage='Contactanos:' />
            </h3>
            <h4>
                <FormattedMessage id='footer.contacto.telefono' defaultMessage='Teléfonos: '/>
                <span>2604846152 - 2604571333</span>
            </h4>
            <h4>
                <FormattedMessage id='footer.contacto.email' defaultMessage='Email: '/>
                <span>posadadefelipe@gmail.com</span>
            </h4>
            <h4>
                <FormattedMessage id='footer.contacto.direccion' defaultMessage='Dirección: ' />
                <span>Av. Zapata 538</span>
            </h4>
        </div>
        <div className='redes'>
            <h3>
                <FormattedMessage id='footer.redes.title' defaultMessage='Nuestras redes sociales:' />
            </h3>
            <a href="https://www.instagram.com/la.posada.de.don.felipe.sr/"><img src={instagramIcon} alt="instagram logo" /></a>
            <a href="https://www.facebook.com/La-posada-de-Don-Felipe-107542974539395"><img src={facebookIcon} alt="facebook logo" /></a>
            <a href="https://wa.me/5492604846152"><img src={whatsappIcon} alt="whatsapp logo" /></a>
        </div>
    </footer>
  )
}

export {Footer}