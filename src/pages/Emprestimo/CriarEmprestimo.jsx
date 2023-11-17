import React from 'react'
import './CriarEmprestimo.css'
import { Link } from 'react-router-dom'
export default function CriarEmprestimo() {
    return (
        <div className='container-criaremprestimo'>
            <div className='navbar'>
        <p>Criar emprestimo  </p>
        <Link to={'/VerEmprestimo'}><p>Ver emprestio</p></Link>
        <Link to={'/NavegacaoADM'}><p>Voltar</p></Link>
      </div>
      <div className="box1">
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
        </div>
    )
}
