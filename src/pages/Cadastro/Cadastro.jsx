import React from 'react';
import './Cadastro.css';

export default function () {
    return (
        <div className='container'>
            <div className="Titulo">
                <h1 className="nome">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo" />
            </div>
            <div className="conteudo-cad">
            <div className='box-user'>
                    <input type="text" required />
                    <label>RA / CPF</label>
                    
                </div>
                <div className='box-user'>
                    <input type="number" required />
                    <label>Número da casa</label>
                    
                </div>
                <div className='box-user'>
                    <input type="email" required />
                    <label>CEP</label>
                </div>
             
                <div className='box-user'>
                    <input type="tel" required />
                    <label>Telefone</label>
                </div>
                <div className='box-user'>
                    <input type="email" required />
                    <label>E-mail</label>
                </div>
                <div className='box-user'>
                    <input type="password" required />
                    <label>Senha</label>
                </div>
                <div className="botao-login">Entrar</div>
            </div>

        </div>
    )
}