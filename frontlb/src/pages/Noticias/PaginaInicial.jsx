import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/NavBar";
import axios from "axios";

export default function TelaNoticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/ultimasPublicacoes').then((res) => {
      const noticiasOrdenadas = res.data.sort((a, b) => b.id - a.id);
      setNoticias(noticiasOrdenadas);
    });
  }, []);

  return (
    <div>
      <Navbar />
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
        {noticias.map((noticia, index) => (
          <div
            key={noticia.id}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              gridColumn: index === 0 ? "span 2" : "auto", // Ajustado para index === 0
            }}
          >
            <img
              src={`http://localhost:8000/storage/noticias/${
                noticia.imagem_publicacao.split("/")[1]
              }`}
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
