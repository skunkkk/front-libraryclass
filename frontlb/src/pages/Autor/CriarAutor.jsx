import React, { useState } from "react";
import "./CriarAutor.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";

export default function CriarAutor() {
  const [id, setId] = useState("");
  const [autor_nome, setAutor_nome] = useState("");
  const [autor_nacionalidade, setAutor_nacionalidade] = useState("");

  async function adicionarAutor() {
    const dados = {
      id,
      autor_nome,
      autor_nacionalidade,
    };
    try {
      const response = await axios.post("http://127.0.0.1:8000/autor", dados);
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Navbar />
      <div className="navbar-reservas"></div>
      <div
        className="alinharInput"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Criar Autor:</h1>
        <div>
          <input
            type="text"
            placeholder="Insira o ID"
            required
            onChange={(e) => setId(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "8px",
              width: "300px",
            }}
          />
        </div>
        <div className="classInput">
          <input
            type="text"
            placeholder="Nome do Autor"
            required
            onChange={(e) => setAutor_nome(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "8px",
              width: "300px",
            }}
          />
        </div>
        <div className="classInput">
          <input
            type="text"
            placeholder="Nacionalidade do Autor"
            required
            onChange={(e) => setAutor_nacionalidade(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "8px",
              width: "300px",
            }}
          />
        </div>
      </div>
      <button
        type="button"
        style={{
          padding: "8px",
          width: "300px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => adicionarAutor()}
      >
        Criar autor
      </button>
    </div>
  );
}
