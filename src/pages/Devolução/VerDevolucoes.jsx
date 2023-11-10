import React from 'react'
import './VerDevolucoes.css'

export default function VerDevolucoes() {
  return (
    <div className='container-VerDevolucoes'>
        <div className='classInput'>
                <label>ID da devolução: </label>
                <input type="text" />
            </div>
            <div className='classInput'>
                <label>ID usuario: </label>
                <input type="text" />
            </div>
            <div className='classInput'>
                <label>Data inicial: </label>
                <input type="text" />
            </div>
            <div className='classInput'>
                <label>Data final: </label>
                <input type="text" />
            </div>
            <button>Ver</button>
    </div>
  )
}
