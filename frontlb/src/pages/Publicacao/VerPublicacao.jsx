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
   
            <td>
              {" "}
              <input
                type="text"
                placeholder="Inserir publicação para deletar"
                onChange={(e) => (e.target.value)}
              />
            </td>
            <input
              type="button"
              value="Deletar Publicação"
              
            />
      
      
      </table>
      <li></li>
    </div>
  );
}
