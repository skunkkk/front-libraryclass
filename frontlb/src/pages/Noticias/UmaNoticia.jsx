// components/NoticiaCompleta.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";
import axios from "axios";

const UmaNoticia = () => {
  const { id } = useParams();
  const [noticias,setNoticias]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8000/publicacoes/`).then((res)=>setNoticias(res.data));
  },[])
  const noticia = noticias.find((n) => n.id_publicacao === parseInt(id, 10));

  if (!noticia) {
    return <div>Notícia não encontrada</div>;
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h1>{noticia.titulo}</h1>
        <img
          src={`http://localhost:8000/storage/noticias/${
            noticia.imagem_publicacao.split("/")[1]
          }`}
          alt={noticia.titulo}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
        <p>{noticia.conteudo}</p>
        <Link to="/noticiascompleta">Voltar para Todas as Notícias</Link>
      </div>
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Entre em contato conosco: coordenacaoanarita@gmail.com</p>
      </footer>
    </div>
  );
};

export default UmaNoticia;
