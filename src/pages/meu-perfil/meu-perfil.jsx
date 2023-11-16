import React from "react";
import "./meu-perfil.css";

import Botao from "../../components/Botao";

export default function Perfil() {
  return (
    <div className='container-login'>
    <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
    </div>
    <div className="conteudo-login">
        <h1 className='logar'>Perfil</h1>
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
        </div>
        <div className="botao-login">Confirmar</div>
    </div>

</div>
  );
}
