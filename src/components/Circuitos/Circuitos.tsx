import React from 'react'
import { FormattedMessage } from 'react-intl'
import leftArrow from './../../img/icons/leftArrow.png'
import rightArrow from './../../img/icons/rightArrow.png'
import nihuilCard from './../../img/nihuil.png'

const Circuitos = () => {
  return (
    <section className='circuitosSection'>
        <div className='circle'>
            <h2>
                <FormattedMessage id='circuitos.title' defaultMessage='Nuestra hermosa ciudad'/>
            </h2>
        </div>
        <div className='carrusel'>
            <img src={leftArrow} alt="left arrow" />
            <div className='circuito' id='0'>
                <h3>
                    <FormattedMessage id='circuitos.circuito.title' defaultMessage="Circuito del " />
                    <span>Atuel</span>
                </h3>
                <div className='lugaresGrid'>
                    <article className='card'>
                        <img src={nihuilCard} alt="card" />
                        <div className='infoCard'>
                            <h4>Nihuil</h4>
                            <p>
                                <FormattedMessage id='circuitos.card1.text' defaultMessage='Se halla en el extremo oriental del Embalse El Nihuil, desarrollándose como una villa turística sobre dicho lago artificial, aprovechando también el atractivo del Cañón del Atuel.' />
                            </p>
                            <span>
                                <FormattedMessage id='circuitos.card1' defaultMessage='A aproximadamente 70 km de La Posada de Don Felipe'/>
                            </span>
                        </div>
                    </article>
                    <article className='card'>
                        <img src={nihuilCard} alt="card" />
                        <div className='infoCard'>
                            <h4>Nihuil</h4>
                            <p>
                                <FormattedMessage id='circuitos.card1.text' defaultMessage='Se halla en el extremo oriental del Embalse El Nihuil, desarrollándose como una villa turística sobre dicho lago artificial, aprovechando también el atractivo del Cañón del Atuel.' />
                            </p>
                            <span>
                                <FormattedMessage id='circuitos.card1' defaultMessage='A aproximadamente 70 km de La Posada de Don Felipe'/>
                            </span>
                        </div>
                    </article>
                    <article className='card'>
                        <img src={nihuilCard} alt="card" />
                        <div className='infoCard'>
                            <h4>Nihuil</h4>
                            <p>
                                <FormattedMessage id='circuitos.card1.text' defaultMessage='Se halla en el extremo oriental del Embalse El Nihuil, desarrollándose como una villa turística sobre dicho lago artificial, aprovechando también el atractivo del Cañón del Atuel.' />
                            </p>
                            <span>
                                <FormattedMessage id='circuitos.card1' defaultMessage='A aproximadamente 70 km de La Posada de Don Felipe'/>
                            </span>
                        </div>
                    </article>
                </div>
            </div>
            <img src={rightArrow} alt="right arrow" />
        </div>
    </section>
  )
}

export {Circuitos}