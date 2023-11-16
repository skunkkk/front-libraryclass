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
            <div style={{ display: 'flex', width: '100%', height: '90%', flexDirection: 'row' }}>
                <div className="conteudo-cadastro-left">
                    <h2 style={{ color: 'white', fontSize: '50px' }}>Cadastro</h2>
                    <div className='inputs-login'>
                        <div className='box-user-login'>
                            <input type="email" required />
                            <label>E-mail</label>
                        </div>
                        <div className='box-user-login'>
                            <input type="text" required />
                            <label>Nome</label>
                        </div>
                        <div className='box-user-login'>
                            <input type="text" required />
                            <label>Endereço</label>
                        </div>
                        <div className='box-user-login'>
                            <input type="tel" required />
                            <label>Telefone</label>
                        </div>
                        <div className='box-user-login'>
                            <input type="password" required />
                            <label>Senha</label>
                        </div>
                        <div className='box-user-login'>
                            <input type="number" required />
                            <label>CEP</label>
                        </div>
                        <div className='box-user-login'>
                            <input type="number" required />
                            <label>Nº Casa</label>
                        </div>

                    </div>
                </div>

                <div className="conteudo-cadastro-right">
                <img src={iconler} alt="" style={{ height: "700px", width: "700px", position: 'absolute', right: '400px' }} />
                <p className='frase'>"Um Livro é um presente que você sempre pode abrir de novo."</p>
                </div>
            </div>
        </div>
    )
}