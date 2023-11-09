import React from "react";
import "./meu-perfil.css";

import Botao from "../../components/Botao";

export default function Perfil() {
  return (
    <div className='container-perfil'>
    <div className="Titulo-perfil">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
    </div>
    <div className="conteudo-perfil">
        <h1 className="titulo-perfil">Meu perfil</h1>
       
        <div className='box-user'>
        <label>Nome</label>

            <input type="text" required />
        </div>
        <div className='box-user'>
        <label>Idade</label>

            <input type="text" required />
        </div>
        <div className='box-user'>
        <label>Sala</label>

            <input type="text" required />
        </div>

        <div className='box-user'>
        <label>E-mail</label>

            <input type="email" required />
        </div>
        <div className="botao-login-perfil">Confirmar</div>

    </div>

</div>
  );
}
