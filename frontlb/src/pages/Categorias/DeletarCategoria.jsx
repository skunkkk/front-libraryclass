import React from "react";

export default function DeletarCategoria() {
  return (
    <div className="container-verCategoria">
      <div className="classInput">
        <label>Categoria: </label>
        <input type="text" />
      </div>
      <div className="classInput">
        <label>ID seção: </label>
        <input type="text" />
      </div>

      <button>Deletar Categoria</button>
    </div>
  );
}
