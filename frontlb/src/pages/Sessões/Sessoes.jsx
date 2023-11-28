import React, { useState } from "react";
import "../Sessões/Sessoes.css";
import axios from "axios";

import Navbar from "../../components/Navbar/NavBar";
export default function InserirSessoes() {
  const [descricao, setDescricao] = useState("");

  function enviarDados() {
    axios
      .post("http://127.0.0.1:8000/secoes", { descricao: descricao })
      .then((response) => console.log(response))
      .then(alert("sessão criada com sucesso"));
  }
  return (
    <div className="container-sessoes">

      <Navbar/>
      <h1>Criar seção</h1>
      <label>Descrição</label>
      <input
        type="text"
        placeholder="descrição"
        id="descrição"
        className="input-livro"
        required
        onChange={(elemento) => setDescricao(elemento.target.value)}
      />
      <input type="button" onClick={enviarDados} value="Enviar" />
    </div>
  );
}
