import React from "react";
import Navbar from "../../components/Navbar/NavBar";

const noticias = [
  {
    id: 1,
    titulo: "Notícia 1",
    imagem: "https://via.placeholder.com/600x400",
    conteudo: "Conteúdo da notícia 1...",
  },
  {
    id: 2,
    titulo: "Notícia 2",
    imagem: "https://via.placeholder.com/300x200",
    conteudo: "Conteúdo da notícia 2...",
  },
  {
    id: 3,
    titulo: "Notícia 3",
    imagem: "https://via.placeholder.com/300x200",
    conteudo: "Conteúdo da notícia 3...",
  },
  {
    id: 4,
    titulo: "Notícia 4",
    imagem: "https://via.placeholder.com/300x200",
    conteudo: "Conteúdo da notícia 4...",
  },
  {
    id: 5,
    titulo: "Notícia 5",
    imagem: "https://via.placeholder.com/300x200",
    conteudo: "Conteúdo da notícia 5...",
  },
];

export default function TelaNoticias() {
  return (
    <div>
      <Navbar/>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
          height: "100%",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              gridRow: noticia.id === 1 ? "span 2" : "auto",
            }}
          >
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "20px",
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ color: "#fff", marginBottom: "10px" }}>
                {noticia.titulo}
              </h3>
              <p style={{ color: "#fff", fontSize: "14px" }}>
                {noticia.conteudo}
              </p>
            </div>
          </div>
        ))}
      </div>
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Entre em contato conosco: coordenacaoanarita@gmail.com</p>
      </footer>
    </div>
  );
}
