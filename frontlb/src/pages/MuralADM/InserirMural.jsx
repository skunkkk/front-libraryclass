import React, { useState } from "react";
import "./MuralADM.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
export default function InserirMural() {
  const [id_mural, setId_mural] = useState("");

  const [descricao, setDescricao] = useState("");

  async function adicionarMural() {
    const dados = {
      id_mural,
      descricao,
    };
    try {
      const response = await axios.post("http://127.0.0.1:8000/murais", dados);
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }
  return (
    <div className="container-muraladm">
       <Navbar/>
      
      <div className="box1">
        <h1>Inserir mensagem no mural</h1>
        <textarea
          className="txtarea"
          onChange={(e) => setDescricao(e.target.value)}
          required
        ></textarea>
        <button className="btn-enviar" onClick={() => adicionarMural()}>
          Enviar
        </button>
      </div>
    </div>
  );
}
