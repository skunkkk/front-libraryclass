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
    
    <div className="container-Autor">
      <Navbar/>
      <div className="navbar-reservas">
        <Link to={"/editarautor/:id"}>
          <p>Editar Autor</p>
        </Link>
        <Link to={"/VerAutor"}>
          <p>Ver Autor</p>
        </Link>
        <Link to={"/CriarAutor"}>
          <p>Criar Autor</p>
        </Link>

        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <div className="alinharInput">
        <div className="classInput">
          <label>ID: </label>
          <input
            type="text"
            className="input-autor"
            placeholder="Insira o ID"
          />
        </div>
        <div
          className="classInput"
          onChange={(e) => setAutor_nome(e.target.value)}
        >
          <label>Nome do autor: </label>
          <input
            type="text"
            className="input-autor"
            placeholder="Insira o Autor"
          />
        </div>
        <div
          className="classInput"
          onChange={(e) => setAutor_nacionalidade(e.target.value)}
        >
          <label>Nacionalidade do autor: </label>
          <input
            type="text"
            className="input-autor"
            placeholder="Insira a Nacionalidade Autor"
          />
        </div>
      </div>
      <button className="button-autor" onClick={() => adicionarAutor()}>
        Criar autor
      </button>
    </div>
  );
}
