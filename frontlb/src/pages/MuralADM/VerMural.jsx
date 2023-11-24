import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VerMural() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/murais").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="container-muraladm">
      <div className="navbar">
        <Link to={"/MuralADM"}>
          {" "}
          <p>Inserir no mural</p>
        </Link>
        <p>Ver murais</p>
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <div className="box1">
        <table border={1}>
          <tr>
            <th>id mural</th>
            <th>descricao </th>
          </tr>
          {/* {data.map((elemento)=>(
            <tr>
              <td>{elemento.id_mural}</td>
              <td>{elemento.descricao}</td>
           
            </tr>
            ))} */}
        </table>
        <div className="box-msgmurais">
          <div className="msgmural"></div>
          <div className="msgmural"></div>
          <div className="msgmural"></div>
          <div className="msgmural"></div>
          <div className="msgmural"></div>
        </div>
      </div>
    </div>
  );
}
