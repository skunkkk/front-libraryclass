import React from "react";
import { Link } from "react-router-dom";

export default function EditarLivro() {
  return (
    <div className="container-Livro">
      <div className="livros">
        <div className="navbar">
          <Link to={"/InserirLivro"}>
            <p>Inserir livro</p>
          </Link>
          <p>Editar livro</p>
          <Link to={"/VerLivro"}>
            <p>Ver Livro</p>
          </Link>
          <Link to={"/NavegacaoADM"}>
            <p>Voltar</p>
          </Link>
        </div>
        <div className="livro">Livro 1</div>
        <div className="livro">Livro 2</div>
      </div>
      <input type="button" value="Editar Livro"/>
    </div>
  );
}
