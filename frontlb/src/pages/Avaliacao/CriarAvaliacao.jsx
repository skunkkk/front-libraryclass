import React, { useState } from "react";
import "./CriarAvaliacao.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
export default function CriarAvaliacoes() {
  const [id_avaliacoesPeriodicas, setId_avaliacoesPeriodicas] = useState("");
  const [isbn_livros, setIsbn_livros] = useState("");
  const [descricao, setDescricao] = useState("");

  async function adicionarAvaliacoes() {
    const dados = {
      id_avaliacoesPeriodicas,
      isbn_livros,
      descricao,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/avaliacaoPeriodicas",
        dados
      );
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
        height: "",
      }}
    >
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
     
          onChange={(e) => setId_avaliacoesPeriodicas(e.target.value)}
          <input type="text"  placeholder="ID avaliação:" required   style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}/>
       
       
          
          <input
            type="text"
            placeholder="ISBN:"
            required
            onChange={(e) => setIsbn_livros(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "8px",
              width: "300px",
            }}
          />
     
       
         
          <input
            type="text"
            placeholder="Descrição:"
            required
          onChange={(e) => setDescricao(e.target.value)}

            style={{
              marginBottom: "10px",
              padding: "8px",
              width: "300px",
            }}
          />
     
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
        onClick={() => adicionarAvaliacoes()}
      >
        Criar avaliação
      </button>
    </div>
  );
}
