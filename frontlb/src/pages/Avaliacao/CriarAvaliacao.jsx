import React, { useState } from "react";
import "./CriarAvaliacao.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
    <div className="container-avaliacao">
      <div className="navbar-reservas">
        <Link to={"/CriarAvaliacoes"}>
          <p>Criar Avaliação</p>
        </Link>
        <Link to={"/VerAvaliacoes"}>
          <p>Ver Avaliações</p>
        </Link>
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <div className="alinhar-inputs">
        <div
          className="classInput"
          onChange={(e) => setId_avaliacoesPeriodicas(e.target.value)}
        >
          <label>ID avaliação: </label>
          <input type="text" className="input-avaliacao" required/>
        </div>
        <div
          className="classInput"
          onChange={(e) => setIsbn_livros(e.target.value)}
        >
          <label>ISBN: </label>
          <input type="text" className="input-avaliacao" required/>
        </div>
        <div
          className="classInput"
          onChange={(e) => setDescricao(e.target.value)}
        >
          <label>Descrição: </label>
          <input type="text" className="input-avaliacao" required/>
        </div>
      </div>
      <button
        className="button-avaliacao"
        onClick={() => adicionarAvaliacoes()}
      >
        Criar avaliação
      </button>
    </div>
  );
}
