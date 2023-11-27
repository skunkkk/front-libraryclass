import React, { useState } from "react";
import "./InserirDevolucao.css";
import axios from "axios";
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
      <h1>Inserir devolução</h1>
      <div className="classInput"
        style={{
          backgroundColor: 'transparent', marginBottom: "10px",
          padding: "8px",
          width: "300px",
        }}
      >
        <label style={{ color: 'black' }}>ID da devolução: </label>
        <input type="text" onChange={(e) => setId_devolucoes(e.target.value)} required />

        <label style={{ color: 'black' }}>ID usuario: </label>
        <input type="text" onChange={(e) => setId_usuarios(e.target.value)} required />



        <label style={{ color: 'black' }}>Data: </label>
        <input
          type="text"
          onChange={(e) => setData_devolucao(e.target.value)}
          required />
        <button 
        style={{ 
          marginTop: '1rem',
          padding: "8px",
          width: "230px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
      
      }} onClick={() => adicionarDevolucao()}>Inserir</button>
      </div>

    </div>
  );
}
