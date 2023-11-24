import axios from "axios";
import React, { useState } from "react";

export default function InserirPublicacao() {
  const [id_publicacao, setId_publicacao] = useState();
  const [mensagem, setMensagem] = useState();
  const [id_usuarios, setId_suarios] = useState();
  const [id_mural, setId_mural] = useState();

  async function adicionarPublicacao() {
    const dados = {
      id_publicacao,
      mensagem,
      id_usuarios,
      id_mural,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/publicacoes",
        dados
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "cen  ter",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>Inserir Publicação:</h1>
      <input
        type="text"
        placeholder="Inserir Publicação..."
        onChange={(e) => setMensagem(e.target.value)}
      />
      <input
        type="button"
        value="Enviar Publicação"
        onClick={() => adicionarPublicacao()}
      />
    </div>
  );
}
