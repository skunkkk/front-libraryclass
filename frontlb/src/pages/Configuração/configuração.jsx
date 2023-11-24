import React from "react";
import "./configuração.css";
export default function Configuração() {
  return (
    <div className="config-container">
      <div className="Titulo-config">
        <h1 className="nome-config">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo-config" />
      </div>

      <div className="config-div">
        <div className="config1">Modo escuro</div>
        <div className="config2">Switch</div>
      </div>
      <div className="config-div">
        <div className="config1">Tamanho da fonte</div>
        <div className="config2">Select</div>
      </div>
      <div className="config-div">
        <div className="config1">TalkTab</div>
        <div className="config2">Switch</div>
      </div>
      <div className="config-div">
        <div className="config1">Meu perfil</div>
        <div className="config2">Editar</div>
      </div>
      <div className="config-div"></div>
    </div>
  );
}
