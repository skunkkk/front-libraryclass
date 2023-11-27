import axios from "axios";
import React from "react";
import { useState } from "react";

export default function InserirFicha() {
  const [idficha, setIdFicha] = useState("");
  const [idMulta, setIdMulta] = useState("");
  const [isbnLivros, setIsbnLivros] = useState("");
  const [idEmprestimo, setIdEmprestimo] = useState("");

  const dados = {
    idficha,
    idMulta,
    isbnLivros,
    idEmprestimo,
  };
  async function enviarDados() {
    const response = await axios.post(
      "http://localhost:8000/fichadoLivro",
      dados
    );
    console.log(response.data);
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
        height: "100vh",
      }}
    >
      <h1>Inserir Ficha:</h1>

      <label htmlFor="">Id da ficha</label>
      <input type="text" onChange={(e) => setIdFicha(e.target.value)}  required/>
      <label htmlFor="">id da multa</label>
      <input type="text" onChange={(e) => setIdMulta(e.target.value)} required/>
      <label htmlFor="">isbn livros</label>
      <input type="text" onChange={(e) => setIsbnLivros(e.target.value)} required/>
      <label htmlFor="">id emprestimo</label>
      <input type="text" onChange={(e) => setIdEmprestimo(e.target.value)} required/>

      <input type="text" placeholder="Inserir Ficha..." required/>

      <button type="button" onClick={() => enviarDados()}>
        Enviar Ficha
      </button>
    </div>
  );
}
