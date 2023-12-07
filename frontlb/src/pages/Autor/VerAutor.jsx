import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VerAutor.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";
export default function VerAutor() {
  const [data, setData] = useState([]);

  function apagar(id) {
    console.log(id);
  }
  useEffect(() => {
    axios.get("http://localhost:8000/autor").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <div
      className="container-VerAutor"
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Navbar />

      <div className="alinhar-autores">
        <div className="autores">
          <h1>Autores</h1>

          <table border={1}>
            <tr className="autores-caracter">
              <td>id do autor</td>
              <td>nome do autor</td>
              <td>nacionalidade do autor</td>
              <td>ações</td>
            </tr>
            {data.map((elemento) => (
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.autor_nome}</td>
                <td>{elemento.autor_nacionalidade}</td>
                <td>
                  <button onClick={() => apagar(elemento.id)}>Apagar</button>
                </td>
              </tr>
            ))}
          </table>
          <div></div>
        </div>
      </div>
    </div>
  );
}
