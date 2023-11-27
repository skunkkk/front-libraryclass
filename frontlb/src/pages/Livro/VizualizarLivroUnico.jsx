import React, { useState } from "react";

const fakeBookData = {
  titulo: "Aventuras no Espaço",
  foto: "https://via.placeholder.com/150",
  sinopse:
    "Em uma galáxia distante, um grupo de heróis embarca em uma jornada épica...",
  resenhas: [
    { id: 1, autor: "Autor 1", texto: "Ótimo livro!" },
    { id: 2, autor: "Autor 2", texto: "Uma história cativante." },
  ],
};

export default function VisualizarLivroUnico() {
  const [resenhaTexto, setResenhaTexto] = useState("");

  const adicionarResenha = () => {
    const novaResenha = {
      id: fakeBookData.resenhas.length + 1,
      autor: "Novo Autor",
      texto: resenhaTexto,
    };

    fakeBookData.resenhas = [...fakeBookData.resenhas, novaResenha];

    setResenhaTexto("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "#f0f0f0",
        borderRadius: "10px",
      }}
    >
      <h1>{fakeBookData.titulo}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          background: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <div style={{ flex: "1.3" }}>
          <img
            src={fakeBookData.foto}
            alt="Capa do Livro"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </div>
        <div
          style={{
            flex: "1.4",
            textAlign: "left",
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p>{fakeBookData.sinopse}</p>
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            Autor: {fakeBookData.resenhas[0].autor}
          </p>
        </div>
        <div
          style={{
            flex: "1.3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", 
          }}
        >
          <button
            style={{
              padding: "5px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "80%",
            }}
          >
            Pegar Emprestado
          </button>
        </div>
      </div>
      <h2 style={{ marginTop: "20px" }}>Resenhas</h2>
      {fakeBookData.resenhas.map((resenha) => (
        <div
          key={resenha.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px",
            width: "50%",
            background: "#fff",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>Autor: {resenha.autor}</p>
          <p>{resenha.texto}</p>
        </div>
      ))}
      <div style={{ width: "50%", marginTop: "20px" }}>
        <textarea
          placeholder="Escreva sua resenha..."
          value={resenhaTexto}
          required
          onChange={(e) => setResenhaTexto(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        ></textarea>
        <button
          onClick={adicionarResenha}
          style={{
            padding: "5px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Adicionar Resenha
        </button>
      </div>
    </div>
  );
}
