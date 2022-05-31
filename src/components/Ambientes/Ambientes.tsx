import React from 'react'
import { AmbienteSelectedProvider } from 'context/AmbienteSelectedContext'
import { AmbienteCard } from './AmbienteCard'
import { ambientesInfo } from './ambientesInfo'
import { Indicador } from './Indicador'

const Ambientes = () => {

    return (
        <section className='ambientesContainer'>
            <AmbienteSelectedProvider>
                <div className='ambientesCarrusel'>
                    {ambientesInfo.map((ambiente, idx) => {
                        return (
                            <>
                                <AmbienteCard ambiente={ambiente} id={idx} totalAmbientes={ambientesInfo.length}/>
                            </>
                        )
                    })}
                </div>
                <div className='ambientesIndicadores'>
                    {ambientesInfo.map((ambiente, idx) => {
                        return (
                            <>
                                <Indicador id={idx} />
                            </>
                            )
                    })}
                </div>
            </AmbienteSelectedProvider>
        </section>
    )
}

export { Ambientes }