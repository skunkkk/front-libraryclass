import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VerAvaliacoes.css";
export default function VerAvaliacoes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/avaliacaoPeriodicas").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="container-veravaliacao">
      <div className="navbar-reservas">
        <Link to={"/CriarAvaliacoes"}>
          <p>Criar Avaliação</p>
        </Link>
        <Link to={"/VerAvaliacoes"}>
          <p>Ver Avaliações</p>
        </Link>
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <div className="alinhar-inputs-ver">
        <h1>Avaliacoes Periodicas Feitas :</h1>

        <table>
          <tr className="dados-avaliacao">
            <td>id avaliacoes</td>
            <td>descricao</td>
            <td>isbn</td>
          </tr>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.id_avaliacoesPeriodicas}</td>
              <td>{elemento.descricao}</td>
              <td>{elemento.isbn_livros}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
