import React from "react";
import { Link } from "react-router-dom";

export default function EditarLivro() {
  return (
    <div className="container-Livro">
      <div className="livros">
        <div className="navbar">
        
        </div>
        <div className="livro">Livro 1</div>
        <div className="livro">Livro 2</div>
      </div>
      <input type="button" value="Editar Livro"/>
    </div>
  );
}
