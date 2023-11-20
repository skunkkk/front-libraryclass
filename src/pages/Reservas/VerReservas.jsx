import React from "react";
import { Link } from "react-router-dom";

export default function VerReservas() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
       <div className="navbar">
       <Link to={"/InserirReservas"}>
        <p>Inserir reservas</p>
        </Link>
       
          <p>Ver reservas</p>
        
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <h1>Reservas Feitas:</h1>
      <li></li>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
      <input type="text" placeholder="Inserir reserva para deletar" className="input-livro" />
      <input type="button" value="Deletar Reserva"/>
    </div>
    </div>
  );
}
