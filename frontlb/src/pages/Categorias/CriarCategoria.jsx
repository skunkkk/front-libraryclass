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
    <div className="container-verCategoria">
      <div className="classInput">
        <label>Titulo da categoria: </label>
        <input
          type="text"
          name="descricao_categoria"
          id="descricao_categoria"
          onChange={(palavra) => setDescricao(palavra.target.value)}
        />
      </div>
      <div className="classInput">
        <label>Em qual seção está a categoria: </label>
        <input
          type="text"
          name="id_secao"
          id="id_secao"
          onChange={(palavra) => setIdSecao(palavra.target.value)}
        />
      </div>
      <button onClick={enviaDados}>Enviar</button>
      <button>apagar categoria</button>
    </div>
  );
}
