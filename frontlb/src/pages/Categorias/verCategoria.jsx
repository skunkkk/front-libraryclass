import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VerCategoria() {
  const [data, setData] = useState([]);
  const [id, setID] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/categorias")
      .then((response) => setData(response.data));
  }, [data]);

  console.log(data);

  function apagar(id_enviado) {
    setID(id_enviado);
    axios.delete(`http://127.0.0.1:8000/categorias/${id}`);
  }

  return (
    <div style={{ color: "black" }}>
      <h1>testando</h1>
      <table border={1}>
        <tr>
          <th>id</th>
          <th>tipo de categoria </th>
          <th>qual a seção</th> <th>Ações</th>
        </tr>
        {data.map((elemento) => (
          <tr>
            <td> {elemento.id_categorias}</td>
            <td>{elemento.descricao_categoria}</td> <td>{elemento.id_secao}</td>{" "}
            <td>
              <button
                onClick={() => {
                  apagar(elemento.id_categorias);
                }}
              >
                Apagar
              </button>
            </td>
          </tr>
        ))}
      </table>
      <Link to={"/CriarAvaliacoes"}>ir para criar avaliação</Link>
    </div>
  );
}
