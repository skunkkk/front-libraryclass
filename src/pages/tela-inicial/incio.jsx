import React from "react";
import "./inicio.css";

import Botao from "../../components/Botao";
import { Link } from "react-router-dom";
import MenuH from "../../components/menu-h/MenuH";

export default function Inicio() {
  return (
    <div className="container">
        
      <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo">
        <h2>Para onde deseja ir ?</h2>
        <br />
        <br />
        <Botao nomebotao="Mural" />
        <br />
        <Botao nomebotao="Library" />
        <div className="botoes-acesso">
          <p className="cadastre-se">Faça seu cadastro</p>
          <a href="" className="aqui">
            <Link to={"/Cadastro"}> Aqui</Link>
          </a>
        </div>
        <div className="botao-login-container">
          <div className="botao-login" ><Link to={"/Login"}>Entrar</Link></div>
        </div>
      </div>
    </div>
  );
}
