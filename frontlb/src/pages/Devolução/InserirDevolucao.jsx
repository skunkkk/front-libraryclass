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
      <div
        className="classInput"
        onChange={(e) => setId_devolucoes(e.target.value)}
      >
        <label>ID da devolução: </label>
        <input type="text" />
      </div>
      <div
        className="classInput"
        onChange={(e) => setId_usuarios(e.target.value)}
      >
        <label>ID usuario: </label>
        <input type="text" />
      </div>

      <div
        className="classInput"
        onChange={(e) => setData_devolucao(e.target.value)}
      >
        <label>Data: </label>
        <input type="text" />
      </div>
      <button onClick={() => adicionarDevolucao()}>Inserir</button>
    </div>
  );
}
