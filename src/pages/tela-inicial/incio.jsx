import React from "react";
import "./inicio.css";

import Botao from "../../components/Botao";
import { Link } from "react-router-dom";
import MenuH from "../../components/menu-h/MenuH";

export default function Inicio() {
  return (
    <div className="container-tela-inicio">
        
      <div className="Titulo-tela-inicio">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo-tela-inicio">
        <h2>Para onde deseja ir ?</h2>
        <br />
        <br />
        <Botao nomebotao="Mural" />
        <br />
        <Botao nomebotao="Library" />
        <div className="botoes-acesso-tela-inicio">
          <p className="cadastre-se">Faça seu cadastro <Link to={"/Cadastro"}> Aqui</Link></p>
          
        </div>
        <div className="botao-login-container-tela-inicio">
          <div className="botao-login-tela-inicio" ><Link to={"/Login"} style={{textDecoration : 'none'}}>Entrar</Link></div>
        </div>
      </div>
    </div>
  );
}
