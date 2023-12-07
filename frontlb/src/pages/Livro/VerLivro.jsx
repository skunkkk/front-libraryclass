import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";
import "./VerLivro.css"; // Importe o arquivo CSS para estilos específicos

export default function VerLivro() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    obterLivros();
  }, []);

  const obterLivros = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/livros");
      setLivros(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const apagarLivro = async (isbn) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/livros/${isbn}`);
      obterLivros();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ver-livro-container">
      <Navbar />

      <h1 className="titulo-livros">Livros Cadastrados:</h1>
      <table className="livros-table">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Título</th>
            <th>Sinopse</th>
            <th>Seção</th>
            <th>Imagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.isbn_livros}>
              <td>{livro.isbn_livros}</td>
              <td>{livro.titulo_livros}</td>
              <td>{livro.sinopse_livros}</td>
              <td>{livro.id_secao}</td>
              <td>
                <img
                  src={`http://localhost:8000/storage/livros/${livro.foto_livros.split("/")[1]}`}
                  alt={`Imagem ${livro.titulo_livros}`}
                  className="livro-imagem"
                />
              </td>
              <td>
                <button className="apagar-botao" onClick={() => apagarLivro(livro.isbn_livros)}>
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
