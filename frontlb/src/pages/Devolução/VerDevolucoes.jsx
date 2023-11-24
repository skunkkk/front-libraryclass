import React, { useEffect, useState } from "react";
import "./VerDevolucoes.css";
import axios from "axios";

export default function VerDevolucoes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/devolucaos").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="container-VerDevolucoes">
      <h1>Lista devolucoes</h1>

      <table>
        <tr>
          <td>id devolucao</td>
          <td>data devolucao</td>
          <td>quem devolveu</td>
        </tr>
        {data.map((elemento) => (
          <tr>
            <td>{elemento.id_devolucoes}</td>
            <td>{elemento.data_devolucao}</td>
            <td>{elemento.id_usuarios}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
