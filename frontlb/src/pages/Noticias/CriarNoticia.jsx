import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/Navbar/NavBar";

export default function CriarNoticia() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagem_publicacao, setImagem] = useState(null);

  async function criarNoticia() {
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("conteudo", conteudo);
    formData.append("imagem_publicacao", imagem_publicacao);
    formData.append("id_usuarios", 123);

    try {
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
          }

      const response = await axios.post(
        "http://localhost:8000/publicacoes",
        formData,
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }

  return (
    <>
    <Navbar/>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
      <div style={{ width: "400px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Criar Notícia</h1>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            required
            onChange={(e) => setTitulo(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "8px",
              width: "100%",
            }}
          />

          <label htmlFor="conteudo">Conteúdo:</label>
          <textarea
            id="conteudo"
            required
            onChange={(e) => setConteudo(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "8px",
              width: "100%",
              minHeight: "100px", 
            }}
          />

          <label htmlFor="imagem">Imagem:</label>
          <input
            type="file"
            id="imagem"
            required
            onChange={(e) => setImagem(e.target.files[0])}
            style={{
              marginBottom: "10px",
            }}
          />

          <button
            type="button"
            style={{
              padding: "8px",
              width: "100%",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => criarNoticia()}
          >
            Enviar Notícia
          </button>
        </div>
      </div>
    </div>
    </>

  );
}
