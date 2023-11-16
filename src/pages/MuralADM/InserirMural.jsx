import React from 'react'
import './MuralADM.css'
export default function InserirMural() {
  return (
    <div className='container-muraladm'>
            <h1>Inserir mensagem no mural</h1>
            <textarea className='txtarea'></textarea>
            <button className='btn-enviar'>Enviar</button>
    </div>
  )
}
