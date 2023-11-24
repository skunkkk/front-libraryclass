import React, { useEffect, useState } from "react";
import "./meu-perfil.css";

import Botao from "../../components/Botao";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Perfil() {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");

  const [dadosForms, setDadosForms] = useState([]);
  useEffect(() => {
    const response = axios
      .get(`http://127.0.0.1:8000/users/${id}/edit`)
      .then((res) => setDadosForms([res.data]));
    console.log(dadosForms);
  }, []);
  console.log(id);

  async function atualizarPerfil() {
    const dados = {
      email,
      nome,
      cep,
      telefone,
    };
    const response = await axios.put(
      "http://127.0.0.1:8000/users/${id}/",
      dados
    );
  }
  return (
    <div className="container-login">
      <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo-login">
        <h1 className="logar">Perfil</h1>
        <div className="inputs-login">
          <div className="box-user-login">
            <label>ID: </label>
            <input
              type="text"
              className="input-autor"
              value={dadosForms.id}
              disabled
            />
          </div>
          <div className="box-user-login">
            <input
              type="email"
              required
              value={dadosForms.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>E-mail</label>
          </div>
          <div className="box-user-login">
            <input
              type="text"
              required
              value={dadosForms.nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>Nome</label>
          </div>
          <div className="box-user-login">
            <input
              type="text"
              required
              value={dadosForms.cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <label>Endereço</label>
          </div>
          <div className="box-user-login">
            <input
              type="tel"
              required
              value={dadosForms.telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <label>Telefone</label>
          </div>
        </div>
        <div className="botao-login">Confirmar</div>
      </div>
    </div>
  );
}
