import React, { useEffect, useState } from "react";
import "./inicio-library.css";
import CardLivro from "./CardLivro";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
import { useNavigate } from "react-router-dom";

export default function InicioLibrary() {
  const [dados, setDados] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/maisemprestados")
      .then((response) => setDados(response.data));
  }, []);

  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  const handleLivroClick = (isbn) => {
    navigate(`/livroUnico/${isbn}`);
  };

  const livrosFiltrados = dados.filter((livro) =>
    livro.titulo_livros.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="container-inicio-library">
      <Navbar />
      <div className="Titulo">
        <h1 style={{ color: "black", fontFamily: "Poppins",textAlign:"center" }}>LibraryClass</h1>
      </div>
      <div className="container-conteudo">
        <div className="container-search">
          <form className="d-flex me-2">
            <input
              className="form-control"
              type="search"
              placeholder="Procurar livros"
              aria-label="Search"
              value={pesquisa}
              onChange={handlePesquisaChange}
              required
            />
          </form>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-2">
          {livrosFiltrados.map((elemento) => (
            <div key={elemento.isbn_livros} onClick={() => handleLivroClick(elemento.isbn_livros)} >
              <CardLivro
                titulo={elemento.titulo_livros}
                imagem={`http://localhost:8000/storage/livros/${elemento.foto_livros.split("/")[1]}`}
                
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
