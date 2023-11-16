import React from 'react';
import './Login.css';

export default function () {
    return (
        <div className='container-login'>
            <div className="Titulo">
                <h1 className="nome">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo" />
            </div>
            <div className="conteudo-login">
                <h1 className='logar'>Login</h1>
               <div className='inputs-login'>
                <div className='box-user-login'>
                    <input type="email" required />
                    <label>E-mail</label>
                </div>
                <div className='box-user-login'>
                    <input type="password" required />
                    <label>Senha</label>
                </div>
                </div>
                <div className="botao-login">Entrar</div>
            </div>

        </div>
    )
}
