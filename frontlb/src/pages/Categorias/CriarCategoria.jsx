import React, { useState } from "react";
import "./VerCategoria.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CriarCategoria() {
  const [descricao, setDescricao] = useState("");
  const [idSecao, setIdSecao] = useState(0);
  function testarDados() {
    console.log(descricao, idSecao);
  }

  function enviaDados() {
    axios.post("http://127.0.0.1:8000/categorias", {
      descricao_categoria: descricao,
      id_secao: idSecao,
    });
  }

  return (
    <div className="container-verCategoria"
    style={{backgroundColor:"transparent"}}
    >
      <div className="classInput"
        style={{
          backgroundColor: "transparent",
          color: 'black'
        }}


      >
        <label>Titulo da categoria: </label>
        <input
          type="text"
          name="descricao_categoria"
          id="descricao_categoria"
          required
          onChange={(palavra) => setDescricao(palavra.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        />

        <label>Em qual seção está a categoria: </label>
        <input
          type="text"
          name="id_secao"
          id="id_secao"
          required
          onChange={(palavra) => setIdSecao(palavra.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        />
        <div
          style={{
            gap: "1rem",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <button onClick={enviaDados}
            style={{
              padding: "8px",
              width: "300px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >Enviar</button>
          <button
            style={{
              padding: "8px",
              width: "300px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}>apagar categoria</button>
        </div>
      </div>
    </div>
  );
}
