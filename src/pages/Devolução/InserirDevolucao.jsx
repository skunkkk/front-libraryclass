import React from 'react'
import './InserirDevolucao.css'
export default function InserirDevolucao() {
  return (
    <div className='container-inserirDevolucao'>
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
            <button>Inserir</button>
    </div>
  )
}
