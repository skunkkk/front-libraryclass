import React, { useEffect, useState } from "react";
import "./inicio-library.css";
import CardLivro from "./CardLivro";
import axios from "axios";

export default function InicioLibrary() {
  const [dados, setDados] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/maisemprestados")
      .then((response) => setDados(response.data));
  }, []);

  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  const livrosFiltrados = dados.filter((livro) =>
    livro.titulo_livros.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="container-inicio-library">
      <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="container-search">
        <form className="d-flex me-2">
          <input className="form-control"
            type="search"
            placeholder="Procurar livros"
            aria-label="Search"
            value={pesquisa}
            onChange={handlePesquisaChange}
            required/>
        </form>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {livrosFiltrados.map((elemento) => (
          <div key={elemento.isbn_livros} className="col">
            <div className="card" style={{ width: "200px", height: "200px" }}>
              <CardLivro
                titulo={elemento.titulo_livros}
                imagem={`http://localhost:8000/storage/livros/${
                  elemento.foto_livros.split("/")[1]
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      {/* <h1>rafael arrume essa zona urgente que diacho eh esse aqui de componente que tem 3 responsabilidades diferentes arrume esse codigo e deixe ele perfeito, arrume o componente cards para receber as props da maneira correta o codigo ja esta ai dos livros mais emprestados o resto eh com voce,criei outro componente para substituir ate voce terminar essa joça</h1> */}
    </div>
  );
}
