import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VerLivro() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/livros")
      .then((response) => setData(response.data));
  }, [data]);

  console.log(data);

  function apagar(id) {
    axios.delete(`http://127.0.0.1:8000/livros/${id}`);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="navbar">
        <Link to={"/InserirLivro"}>
          <p>Inserir livro</p>
        </Link>
        <Link to={"/EditarLivro"}>
          {" "}
          <p>Editar livro</p>{" "}
        </Link>

        <p>Ver Livro</p>

        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <h1>Livros Cadastrados:</h1>
      <table border={1}>
        <tr>
          <td>ISBN LIVROS</td>
          <td>TITULO DO LIVRO</td>
          <td>SINOPSE DO LIVRO</td>
          <td>SECAO QUE ESTA</td>
          <td>IMAGEM DO LIVRO</td>
          <td>ACOES</td>
        </tr>

        {data.map((elemento) => (
          <tr>
            <td>{elemento.isbn_livros}</td>
            <td>{elemento.titulo_livros}</td>
            <td>{elemento.sinopse_livros}</td>
            <td>{elemento.id_secao}</td>
            <td>
              <img
                src={`http://localhost:8000/storage/livros/${
                  elemento.foto_livros.split("/")[1]
                }`}
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            </td>
            <td>
              <button
                onClick={() => {
                  apagar(elemento.isbn_livros);
                }}
              >
                Apagar
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
