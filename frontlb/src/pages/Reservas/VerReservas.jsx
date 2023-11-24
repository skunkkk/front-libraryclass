import React from "react";
import { Link } from "react-router-dom";

export default function VerReservas() {
  return (
    <div className="container-reservas">
      <div className="navbar-reservas">
        <Link to={"/InserirReservas"}>
          <p>Inserir reservas</p>
        </Link>

        <p>Ver reservas</p>

        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <div className="alinhar-reservas">
        <div className="reservas">
          <h1>Reservas Feitas:</h1>
          <li></li>
          <input
            type="text"
            placeholder="Inserir reserva para deletar"
            className="input-reservas"
          />
          <input
            type="button"
            value="Deletar Reserva"
            className="button-reservas"
          />
        </div>
      </div>
    </div>
  );
}
