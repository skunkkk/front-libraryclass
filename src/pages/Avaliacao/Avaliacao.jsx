import React from 'react'
import './Avaliacao.css'
export default function Avaliacao() {
  return (
    <div className='container-avaliacao'>
         <div className='classInput'>
                <label>Criar avaliação: </label>
                <input type="text" />
                <button>Criar avaliação</button>
            </div>
            <div className='classInput'>
                <label>Ver avaliacao: </label>
                <input type="text" />
                <button>Ver avaliações</button>0
           </div> 
    </div>
  )
}
