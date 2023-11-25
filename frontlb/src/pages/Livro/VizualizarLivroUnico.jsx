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

export default function VizualizarLivroUnico() {
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
      }}
    >
      <h1>{fakeBookData.titulo}</h1>
      <div style={{ width: "50%" }}>
        <img
          src={fakeBookData.foto}
          alt="Capa do Livro"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <p>{fakeBookData.sinopse}</p>
        <button style={{ padding: "10px", marginBottom: "20px" }}>
          Pegar Emprestado
        </button>
      </div>
      <h2>Resenhas</h2>
      {fakeBookData.resenhas.map((resenha) => (
        <div key={resenha.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", width: "50%" }}>
          <p>Autor: {resenha.autor}</p>
          <p>{resenha.texto}</p>
        </div>
      ))}
      <div style={{ width: "50%", marginTop: "20px" }}>
        <textarea
          placeholder="Escreva sua resenha..."
          value={resenhaTexto}
          onChange={(e) => setResenhaTexto(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        ></textarea>
        <button onClick={adicionarResenha} style={{ padding: "10px" }}>
          Adicionar Resenha
        </button>
      </div>
    </div>
  );
}
