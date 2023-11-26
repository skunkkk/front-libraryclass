import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MinhasReservas() {
  const [id_reservas, setId_reservas] = useState();




  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="container-reservas"
        style={{ width: "80%", margin: "auto" }}
      >
        <div
          className="navbar-reservas"
          style={{
            background: "#333",
            color: "white",
            padding: "10px",
            marginBottom: "20px",
             
          }}
        >
          <p style={{ fontSize: "1.5em", fontWeight: "bold", margin: 0 }}>
            Minhas Reservas
          </p>
          <Link
            to={"/VerReservas"}
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "20px",
            }}
          >
           
            <p style={{ fontSize: "1.2em", margin: 0 }}>Voltar</p>
          </Link>
        </div>

        <div className="alinhar-reservas">
          <div className="reservas">
            <h1 style={{ marginBottom: "10px" }}></h1>
         
            <table style={{ width: "100%", marginTop: "20px" }}>
              <thead>
                <tr>
                  <th>ID reserva</th>
                  <th>Localização livro</th>
                  <th>Título livro</th>
                  <th>CPF/RA do retirante</th>
                  <th>Usuário retirante</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2AB</td>
                  <td>NARNIA</td>
                  <td>12345678sp</td>
                  <td>João</td>
                  <td>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
