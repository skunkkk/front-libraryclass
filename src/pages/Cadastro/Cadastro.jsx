import React from 'react';
import './Cadastro.css';

export default function () {
    return (
        <div className='container-cadastro'>
            <div className="Titulo-cadastro">
                <h1 className="nome">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo" />
            </div>
            <div className="conteudo-cadastro">
            <div className='box-user-cadastro'>
                    <input type="text" required />
                    <label>RA / CPF</label>
                    
                </div>
                <div className='box-user-cadastro'>
                    <input type="number" required />
                    <label>Número da casa</label>
                    
                </div>
                <div className='box-user-cadastro'>
                    <input type="email" required />
                    <label>CEP</label>
                </div>
             
                <div className='box-user-cadastro'>
                    <input type="tel" required />
                    <label>Telefone</label>
                </div>
                <div className='box-user-cadastro'>
                    <input type="email" required />
                    <label>E-mail</label>
                </div>
                <div className='box-user-cadastro'>
                    <input type="password" required />
                    <label>Senha</label>
                </div>
                <div className="botao-login-cadastro">Entrar</div>
            </div>

        </div>
    )
}