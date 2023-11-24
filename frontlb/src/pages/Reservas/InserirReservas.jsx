import React from "react";
import "../Reservas/InserirReservas.css";
import { Link } from "react-router-dom";

export default function InserirReservas() {
  return (
    <div className="container-reservas">
      <div className="navbar-reservas">
        <p>Inserir reservas</p>

        <Link to={"/VerReservas"}>
          <p>Ver reservas</p>
        </Link>
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <div className="alinhar-reservas">
        <div className="reservas">
          <h1>Inserir Reservas:</h1>
          <input
            type="text"
            placeholder="Inserir reserva..."
            className="input-reservas"
          />
          <input
            type="button"
            className="button-reservas"
            value="Enviar Reserva"
          />
        </div>
      </div>
    </div>
  );
}
