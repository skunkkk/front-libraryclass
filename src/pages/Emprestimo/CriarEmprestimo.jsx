import React from 'react'
import './CriarEmprestimo.css'
export default function CriarEmprestimo() {
    return (
        <div className='container-criaremprestimo'>
            <div className='classInput'>
                <label>ISBN: </label>
                <input type="text" />
            </div>
            <div className='classInput'>
                <label>Usuario: </label>
                <input type="text" />
            </div>
            <div className='classInput'>
                <label>Data: </label>
                <input type="text" />
            </div>
            <div className='classInput'>
                <label>Observação: </label>
                <input type="text" />
            </div>
            <button>Criar</button>
        </div>
    )
}
