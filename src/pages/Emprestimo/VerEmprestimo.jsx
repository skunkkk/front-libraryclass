import React from 'react'
import './VerEmprestimo.css'
import { Link } from 'react-router-dom'
export default function VerEmprestimo() {
    return (
        <div className='container-veremprestimo'>
            <div className='navbar'>
                <Link to={'/CriarEmprestimo'}><p>Criar emprestimo  </p></Link>
                <p>Ver emprestio</p>
                <Link to={'/NavegacaoADM'}><p>Voltar</p></Link>
            </div>
            <box className="box1">
                <div className='box-msgmurais'>

                    <div className="msgmural">

                    </div>
                    <div className="msgmural">

                    </div>
                    <div className="msgmural">

                    </div>
                    <div className="msgmural">

                    </div>
                    <div className="msgmural">

                    </div>
                </div>
            </box>
        </div>
    )
}
