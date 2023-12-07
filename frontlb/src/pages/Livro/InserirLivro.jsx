import axios from "axios";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";

export default function InserirLivro() {
  const [isbn_livros, setIsbn_livros] = useState("");
  const [titulo_livros, setTitulo_livros] = useState("");
  const [foto_livros, setFoto_livros] = useState(null);
  const [sinopse_livros, setSinopse_livros] = useState("");
  const [id_secao, setId_secao] = useState("");
  const [id, setId_Autor] = useState("");

  const inputFileRef = useRef(null);

  const limparFormulario = () => {
    setIsbn_livros("");
    setTitulo_livros("");
    setFoto_livros(null);
    setSinopse_livros("");
    setId_secao("");
    setId_Autor("");

    // Resetando o campo de arquivo
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  };

  const exibirToast = (mensagem, tipo) => {
    const toast = document.getElementById("livroToast");
    toast.classList.add(`bg-${tipo}`);
    toast.innerText = mensagem;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  };

  async function adicionarLivro() {
    const formData = new FormData();
    formData.append("isbn_livros", isbn_livros);
    formData.append("titulo_livros", titulo_livros);
    formData.append("foto_livros", foto_livros);
    formData.append("sinopse_livros", sinopse_livros);
    formData.append("id_secao", id_secao);
    formData.append("id", id);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/livros",
        formData
      );

      exibirToast("Livro criado com sucesso!", "success");
      limparFormulario();
    } catch (erros) {
      console.error(erros);
      exibirToast("Erro ao criar o livro. Verifique os campos.", "danger");
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
      }}
    >
      <Navbar />

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
          value={isbn_livros}
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
          value={titulo_livros}
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
          ref={inputFileRef}
          onChange={(e) => setFoto_livros(e.target.files[0])}
          style={{
            marginBottom: "10px",
          }}
        />
        <input
          type="text"
          placeholder="Inserir ID sessão..."
          required
          value={id_secao}
          onChange={(e) => setId_secao(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        />
        <input
          type="text"
          placeholder="Inserir ID do autor..."
          required
          value={id}
          onChange={(e) => setId_Autor(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            width: "300px",
          }}
        />

        <textarea
          placeholder="Inserir Sinopse Livro..."
          required
          value={sinopse_livros}
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
          Criar Livro
        </button>

        <button
          type="button"
          style={{
            padding: "8px",
            width: "300px",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={() => limparFormulario()}
        >
          Limpar Formulário
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div
          id="livroToast"
          className="toast align-items-center text-white"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            margin: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}
