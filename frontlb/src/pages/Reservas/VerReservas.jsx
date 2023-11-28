import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";

export default function VerReservas() {
  return (
    <div className="container-reservas">
      <Navbar></Navbar>
      <div className="navbar-reservas"></div>
      <div className="alinhar-reservas">
        <div className="reservas">
          <h1>Reservas Feitas:</h1>
          <li></li>
          <input
            type="text"
            placeholder="Inserir reserva para deletar"
            className="input-reservas"
            required
          />
          <input
            type="button"
            value="Deletar Reserva"
            className="button-reservas"
            required
          />
        </div>
      </div>
    </div>
  );
}
