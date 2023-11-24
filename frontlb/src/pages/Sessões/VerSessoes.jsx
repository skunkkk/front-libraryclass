import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VerSessoes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/secoes")
      .then((response) => setData(response.data));
  }, []);

  console.log(data);

  return (
    <div className="container-sessoes">
      <div className="navbar">
        <Link to={"/Sessoes"}>
          {" "}
          <p>Inserir Seção</p>
        </Link>
        <p>Ver Seções</p>
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <h1>testando</h1>
      <table border={1}>
        <tr>
          <th>id</th>
          <th>descrição</th>
        </tr>
        {data.map((elemento) => (
          <tr>
            <td>{elemento.íd_secao}</td>
            <td>{elemento.descricao}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
