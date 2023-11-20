import React from "react";
import { Link } from "react-router-dom";

export default function InserirReservas() {
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
        <p>Inserir reservas</p>

        <Link to={"/VerReservas"}>
          <p>Ver reservas</p>
        </Link>
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>  
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1>Inserir Reservas:</h1>
        <input
          type="text"
          placeholder="Inserir reserva..."
          className="input-livro"
        />
        <input type="button" value="Enviar Reserva" />
      </div>
    </div>
  );
}
