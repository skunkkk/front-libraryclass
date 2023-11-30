import React, { useState } from "react";
import "./InserirDevolucao.css";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
export default function InserirDevolucao() {
  const [id_devolucoes, setId_devolucoes] = useState("");
  const [data_devolucao, setData_devolucao] = useState("");
  const [id_usuarios, setId_usuarios] = useState("");

  async function adicionarDevolucao() {
    const dados = {
      id_devolucoes,
      data_devolucao,
      id_usuarios,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/devolucaos",
        dados
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }
  return (
    <div className="container-inserirDevolucao">
      <Navbar />
      
      <div
        className="classInput"
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
        <h1>Inserir devolução</h1>
        <label
          style={{
            color: "black",
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        >
          ID da devolução:{" "}
        </label>
        <input
          type="text"
          onChange={(e) => setId_devolucoes(e.target.value)}
          required
        />

        <label
          style={{
            color: "black",
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        >
          ID usuario:{" "}
        </label>
        <input
          type="text"
          onChange={(e) => setId_usuarios(e.target.value)}
          required
        />

        <label
          style={{
            color: "black",
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        >
          Data:{" "}
        </label>
        <input
          type="text"
          onChange={(e) => setData_devolucao(e.target.value)}
          required
        />
        <button
          style={{
            marginTop: "1rem",
            padding: "8px",
            width: "230px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => adicionarDevolucao()}
        >
          Inserir
        </button>
      </div>
    </div>
  );
}
