import axios from "axios";
import React, { useEffect, useState } from "react";

export default function VerPublicacao() {
  const [data, setData] = useState([]);

  function apagar(id) {
    console.log(id);
  }
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/publicacoes").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>Publicações Feitas:</h1>

      <table border={1}>
        <tr>
          <th>Id Publicação</th>
          <th>Mensagem</th>
          <th>Id Usuarios</th>
          <th>Id Mural </th>
        </tr>
        {data.map((elemento) => (
          <tr>
            <td>{elemento.id_publicacao}</td>
            <td>{elemento.mensagem}</td>
            <td>{elemento.id_usuarios}</td>
            <td>{elemento.id_mural}</td>
            <td>
              {" "}
              <input
                type="text"
                placeholder="Inserir publicação para deletar"
                onChange={(e) => setId_publicacao(e.target.value)}
              />
            </td>
            <input
              type="button"
              value="Deletar Publicação"
              onClick={() => apagar(elemento.id_publicacao)}
            />
          </tr>
        ))}
      </table>
      <li></li>
    </div>
  );
}
