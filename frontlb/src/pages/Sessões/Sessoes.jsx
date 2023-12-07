import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";

export default function InserirSessoes() {
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  const enviarDados = () => {
    axios.post("http://127.0.0.1:8000/secoes", { descricao: descricao })
      .then((response) => {
        console.log(response);
        alert("Sessão criada com sucesso");
        navigate("/versessoes");
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao criar sessão");
      });
  };

  const isDescricaoVazia = descricao.trim() === "";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Navbar />
      <div style={{ marginTop: "20px", width: "300px" }}>
        <h1 style={{ textAlign: "center" }}>Criar Seção</h1>
        <label style={{ marginBottom: "8px" }}>Descrição:</label>
        <input
          type="text"
          style={{ width: "100%", padding: "8px", marginBottom: "16px", boxSizing: "border-box" }}
          placeholder="Insira a descrição da seção"
          required
          onChange={(elemento) => setDescricao(elemento.target.value)}
        />
        <button
          style={{
            width: "100%",
            padding: "10px",
            background: isDescricaoVazia ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: isDescricaoVazia ? "not-allowed" : "pointer",
          }}
          onClick={!isDescricaoVazia ? enviarDados : null}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
