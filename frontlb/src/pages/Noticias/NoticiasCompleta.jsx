// pages/TodasNoticias.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";
import axios from "axios";

const NoticiasCompleta = () => {

    const [noticias,setNoticias]=useState([]);
    useEffect(()=>{
      axios.get('http://localhost:8000/publicacoes').then((res)=>setNoticias(res.data));
    },[])
  

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Todas as Notícias</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              style={{
                width: "48%", 
                marginBottom: "20px",
                boxSizing: "border-box",
              }}
            >
              <h2>{noticia.titulo}</h2>
              <img
                src={`http://localhost:8000/storage/noticias/${
                    noticia.imagem_publicacao.split("/")[1]
                  }`}
                alt={noticia.titulo}
                style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
              />
              <p>{noticia.conteudo}</p>
              <Link to={`/noticias/${noticia.id_publicacao}`}>Leia mais</Link>
            </div>
          ))}
        </div>
      </div>
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Entre em contato conosco: coordenacaoanarita@gmail.com</p>
      </footer>
    </div>
  );
};

export default NoticiasCompleta;
