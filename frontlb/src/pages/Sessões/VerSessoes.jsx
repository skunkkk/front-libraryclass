import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";

export default function VerSessoes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/secoes").then((response) => setData(response.data));
  }, []);

  return (
    <div className="container-sessoes" style={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center", flexDirection: "column", width: "100vw" }}>
      <Navbar />

      <h1>Sessões</h1>
      <table style={{ borderCollapse: "collapse", width: "80%", margin: "20px auto", border: "1px solid #ddd" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th style={{ padding: "12px", textAlign: "center" }}>ID</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr key={elemento.id_secao} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "12px", textAlign: "center" }}>{elemento.id_secao}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{elemento.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
