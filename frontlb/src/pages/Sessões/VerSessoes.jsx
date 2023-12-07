import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";

export default function VerSessoes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/secoes")
      .then((response) => setData(response.data));
  }, []);

  console.log(data);

  return (
    <div className="container-sessoes"
    style={{
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "100vw",
      height: "",
    }}
  >
      
      
    
      <h1>Sessoes</h1>
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
