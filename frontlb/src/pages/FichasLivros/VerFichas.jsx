import axios from "axios";
import React, { useEffect, useState } from "react";

export default function VerFichas() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/fichas")
      .then((response) => setData(response.data));
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
      <h1>Fichas:</h1>
      <table border={1}>
        <tr>
          <th>id ficha livro</th>
          <th>id multa</th>
          <th>isbn livros</th>
          <th>id emprestimo</th>
        </tr>
        {data.map((elemento) => (
          <tr>
            <td>{elemento.id_ficha_livros}</td>
            <td>{elemento.id_multas}</td>
            <td>{elemento.isbn_livros}</td>
            <td>{elemento.id_emprestimos}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}


