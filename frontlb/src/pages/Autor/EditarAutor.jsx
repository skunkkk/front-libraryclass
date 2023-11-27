import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./EditarAutor.css";
export default function EditarAutor() {
  const { id } = useParams();
  const [autor_nome, setAutor_nome] = useState("");
  const [autor_nacionalidade, setAutor_nacionalidade] = useState("");
  const [dadosForms, setDadosForms] = useState([]);
  useEffect(() => {
    const response = axios
      .get(`http://127.0.0.1:8000/autor/${id}/edit`)
      .then((res) => setDadosForms([res.data]));
    console.log(dadosForms);
  }, []);
  console.log(id);

  function editar() {
    const dados = {
      id,
      autor_nome,
      autor_nacionalidade,
    };
    const response = axios.put(`http://127.0.0.1:8000/autor/${id}/`, dados);
  }

  if (!id) {
    return <div>Autor nao encontrado</div>;
  } else {
    return (
      <div className="container-Autor">
        <div className="navbar-reservas">
          <Link to={"/editarautor/:id"}>
            <p>Editar Autor</p>
          </Link>
          <Link to={"/VerAutor"}>
            <p>Ver Autor</p>
          </Link>
          <Link to={"/CriarAutor"}>
            <p>Criar Autor</p>
          </Link>

          <Link to={"/NavegacaoADM"}>
            <p>Voltar</p>
          </Link>
        </div>
        <div className="alinhar-reservas">
          <div className="inputs-autor">
            <label>ID: </label>
            <input
              type="text"
              className="input-autor"
              value={dadosForms.id}
              disabled
            />
            <label>Nome do autor: </label>
            <input
              type="text"
              className="input-autor"
              value={dadosForms.autor_nome}
              onChange={(e) => setAutor_nome(e.target.value)}
              required/>
            <label>Nacionalidade do autor: </label>
            <input
              className="input-autor"
              type="text"
              value={dadosForms.autor_nacionalidade}
              onChange={(e) => setAutor_nacionalidade(e.target.value)}
              required/>
          </div>
        </div>
        <button className="button-autor" onClick={() => editar()}>
          Editar autor
        </button>
      </div>
    );
  }
}
