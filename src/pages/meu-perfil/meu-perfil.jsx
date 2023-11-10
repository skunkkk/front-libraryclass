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
    <div class="center">
  <h1>Meu Perfil</h1>
  <form>
    <div class="inputbox">
      <input type="email" required="required"/>
      <span>Email</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>Nome</span>
    </div>
    <div class="inputbox">
      <input type="number" required="required"/>
      <span>Idade</span>
    </div>
    <div class="inputbox">
      <input type="password" required="required"/>
      <span>Senha</span>
    </div>
    <div class="inputbox">
      <input className="botao-login-perfil"type="button" value="Confirmar"/>
    </div>
  </form>
</div>


</div>
  );
}
