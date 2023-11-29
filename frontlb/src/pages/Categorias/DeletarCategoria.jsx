import React from "react";
import Navbar from "../../components/Navbar/NavBar";

export default function DeletarCategoria() {
  return (
    <div className="container-verCategoria">
       <Navbar/>
      <div className="classInput">
        <label>Categoria: </label>
        <input type="text" required/>
      </div>
      <div className="classInput">
        <label>ID seção: </label>
        <input type="text" required/>
      </div>

      <button>Deletar Categoria</button>
    </div>
  );
}
