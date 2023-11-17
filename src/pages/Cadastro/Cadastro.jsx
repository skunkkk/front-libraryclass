import React from 'react';
import './Cadastro.css';
import iconler from '../Cadastro/iconler.png';
export default function Cadastro() {
    return (
        <div className='container-cadastro'>
            <div className="Titulo-cadastro">
                <h1 className="nome">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo" />
            </div>
                <div className="conteudo-cadastro">
                    <h2 style={{ color: 'white', fontSize: '50px' }}>Cadastro</h2>
                    <div className='inputs-cadastro'>
                        <div className='box-user-cadastro'>
                            <input type="email" required />
                            <label>E-mail</label>
                        </div>
                        <div className='box-user-cadastro'>
                            <input type="text" required />
                            <label>Nome</label>
                        </div>
                        <div className='box-user-cadastro'>
                            <input type="text" required />
                            <label>Endereço</label>
                        </div>
                        <div className='box-user-cadastro'>
                            <input type="tel" required />
                            <label>Telefone</label>
                        </div>
                        <div className='box-user-cadastro'>
                            <input type="password" required />
                            <label>Senha</label>
                        </div>
                        <div className='box-user-cadastro'>
                            <input type="number" required />
                            <label>CEP</label>
                        </div>
                        <div className='box-user-cadastro'>
                            <input type="number" required />
                            <label>Nº Casa</label>
                        </div>
                        <input type='button' value="Cadastrar" className='botao-cadastro'/>
                    </div>
                </div>

           
            
        </div>
    )
}