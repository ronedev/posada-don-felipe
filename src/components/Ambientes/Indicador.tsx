import { ambienteSelectedContext } from 'context/AmbienteSelectedContext'
import React, {useContext} from 'react'

interface props{
    id:number
}

const Indicador = ({id}: props) => {

    const {ambienteSelected, changeAmbienteSelected} = useContext(ambienteSelectedContext)

  return (
    <div className={id === ambienteSelected ? 'indicador selected' : 'indicador'} onClick={()=> changeAmbienteSelected(id)} ></div>
  )
}

export {Indicador}