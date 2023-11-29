import React from "react";
import "./VerCategoria.css";
import Navbar from "../../components/Navbar/NavBar";
export default function VerUmaCategoria() {
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

      <button>apagar categoria</button>
    </div>
  );
}
