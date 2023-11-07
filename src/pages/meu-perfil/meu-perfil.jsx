import React from "react";
import "./meu-perfil.css";

import Botao from "../../components/Botao";

export default function Perfil() {
  return (
    <div className="container-geral">
        <div className="meuperfil-pc"></div>
    <div className='container'>
    <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
    </div>
    <div className="conteudo">
        <h1 className="titulo-perfil">Meu perfil</h1>
       
        <div className='box-user'>
            <input type="text" required />
            <label>Nome</label>
        </div>
        <div className='box-user'>
            <input type="text" required />
            <label>Idade</label>
        </div>
        <div className='box-user'>
            <input type="text" required />
            <label>Sala</label>
        </div>

        <div className='box-user'>
            <input type="email" required />
            <label>E-mail</label>
        </div>
        <div className="botao-login">Confirmar</div>

    </div>

</div>
</div>
  );
}
