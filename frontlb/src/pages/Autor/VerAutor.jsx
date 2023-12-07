import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VerAutor.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function VerAutor() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/autor").then((response) => {
      setData(response.data);
    });
  }, []);

  const apagarAutor = (id) => {
    console.log(id);
    // Adicione aqui a lógica para apagar o autor
  };

  return (
    <div className="container-VerAutor">
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="mb-4">Autores</h1>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID do Autor</th>
                  <th scope="col">Nome do Autor</th>
                  <th scope="col">Nacionalidade do Autor</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {data.map((elemento) => (
                  <tr key={elemento.id}>
                    <td>{elemento.id}</td>
                    <td>{elemento.autor_nome}</td>
                    <td>{elemento.autor_nacionalidade}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => apagarAutor(elemento.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                        &nbsp;Apagar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
