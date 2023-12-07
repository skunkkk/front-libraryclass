import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CriarEmprestimo.css";
import Navbar from "../../components/Navbar/NavBar";

export default function CriarEmprestimo() {
  const [data_emprestimos, setData_emprestimos] = useState("");
  const [id_usuarios, setId_usuarios] = useState("");
  const [isbn_livros, setIsbn_livros] = useState("");

  async function adicionarEmprestimo() {
    const dados = {
      data_emprestimos,
      id_usuarios,
      isbn_livros,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/emprestimos",
        dados
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }

  return (
    <div className="container-criaremprestimo">
       <Navbar/>
  
      <div className="box1">
        <div className="classInput">
          <label>ISBN: </label>
          <input
            type="text"
            onChange={(e) => setIsbn_livros(e.target.value)}
            required
          />
        </div>
        <div className="classInput">
          <label>Usuário: </label>
          <input
            type="text"
            onChange={(e) => setId_usuarios(e.target.value)}
            required
          />
        </div>
        <div className="classInput">
          <label>Data: </label>
          <input
            type="date"
            onChange={(e) => setData_emprestimos(e.target.value)}
            required
          />
        </div>
        <button onClick={() => adicionarEmprestimo()}>Criar</button>
      </div>
    </div>
  );
}
