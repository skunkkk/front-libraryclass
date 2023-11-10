import React from 'react'
import './VerEmprestimo.css'
export default function VerEmprestimo() {
    return (
        <div className='container-veremprestimo'>
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
            <button>Ver</button>
        </div>
    )
}
