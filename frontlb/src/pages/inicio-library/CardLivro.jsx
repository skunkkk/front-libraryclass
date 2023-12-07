import React, { useState } from "react";
import "./CardLivro.css";

function CardLivro({ titulo, imagem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card-livro ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="livro-imagem" src={imagem} alt={titulo} />
      {hovered && <div className="livro-titulo">{titulo}</div>}
    </div>
  );
}

export default CardLivro;
