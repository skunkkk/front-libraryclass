import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageNotFound from "./notfound.png";
const NotFound = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <div style={styles.content}>
          <h1 style={styles.heading}>404 - Página não encontrada</h1>
          <p style={styles.paragraph}>
            Parece que você tentou acessar uma página que não existe.
          </p>
          <Link
            to="/"
            style={{
              ...styles.link,
              backgroundColor: isHovered ? "#0056b3" : "#007BFF",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Voltar à página inicial
          </Link>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={ImageNotFound} alt="Imagem Grande" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "linear-gradient(to right, #007BFF, #0056b3)", // Gradiente no fundo
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Sombreamento pesado
  },
  textContainer: {
    flex: "70%",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", // Cor do texto
  },
  content: {
    textAlign: "center",
  },
  heading: {
    fontSize: "3em",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "1.5em",
    marginBottom: "20px",
  },
  link: {
    display: "inline-block",
    fontSize: "1.5em",
    textDecoration: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    transition: "background-color 0.3s",
  },
  imageContainer: {
    flex: "30%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default NotFound;
