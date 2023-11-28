import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function InserirLivro() {
  const [isbn_livros, setIsbn_livros] = useState("");
  const [titulo_livros, setTitulo_livros] = useState("");
  const [foto_livros, setFoto_livros] = useState(null);
  const [sinopse_livros, setSinopse_livros] = useState("");
  const [id_secao, setId_secao] = useState("");

  async function adicionarLivro() {
    const formData = new FormData();
    formData.append("isbn_livros", isbn_livros);
    formData.append("titulo_livros", titulo_livros);
    formData.append("foto_livros", foto_livros);
    formData.append("sinopse_livros", sinopse_livros);
    formData.append("id_secao", id_secao);

    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/livros",
        formData
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Link
        to="/EditarLivro"
        style={{ textDecoration: "none", color: "#007bff" }}
      >
        <p>Editar livro</p>
      </Link>
      <Link to="/VerLivro" style={{ textDecoration: "none", color: "#007bff" }}>
        <p>Ver Livro</p>
      </Link>
      <Link
        to="/NavegacaoADM"
        style={{ textDecoration: "none", color: "#007bff" }}
      >
        <p>Voltar</p>
      </Link>

      <h1>Inserir Livro:</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Inserir ISBN do Livro"
          required
          onChange={(e) => setIsbn_livros(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        />

        <input
          type="text"
          placeholder="Inserir Titulo Livro..."
          required
          onChange={(e) => setTitulo_livros(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        />
        <input
          type="file"
          required
          onChange={(e) => setFoto_livros(e.target.files[0])}
          style={{
            marginBottom: "10px",
          }}
        />
        <input
          type="text"
          placeholder="Inserir ID sessão..."
          required
          onChange={(e) => setId_secao(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        />

        <textarea
          placeholder="Inserir Sinopse Livro..."
          required
          onChange={(e) => setSinopse_livros(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        />

        <button
          type="button"
          style={{
            padding: "8px",
            width: "300px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => adicionarLivro()}
        >
          Enviar Livro
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
}
