import React, { useState } from "react";
import "./Cadastro.css";
import axios from "axios";
export default function Cadastro() {
  const [id_usuarios, setId_usuarios] = useState("");
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(0);
  const [cep, setCep] = useState("");
  const [numero_casa, setNumero_casa] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  const [observacoes, setObservacoes] = useState("...");

  async function enviarDados() {
    const dadosDoFormulario = {
      id_usuarios,
      nome,
      tipo,
      cep,
      numero_casa,
      email,
      password,
      telefone,
      observacoes,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users",
        dadosDoFormulario
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }

  return (
    <div className="container-cadastro">
      <div className="Titulo-cadastro">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo-cadastro">
        <h2 style={{ color: "white", fontSize: "50px" }}>Cadastro</h2>
        <div className="inputs-cadastro">
          <div className="box-user-cadastro">
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>E-mail</label>
          </div>
          <div className="box-user-cadastro">
            <input
              type="text"
              required
              onChange={(e) => setId_usuarios(e.target.value)}
            />
            <label>RA/CPF</label>
          </div>
          <div className="box-user-cadastro">
            <input
              type="text"
              required
              onChange={(e) => setNome(e.target.value)}
            />
            <label>Nome</label>
          </div>

          <div className="box-user-cadastro">
            <input
              type="tel"
              required
              onChange={(e) => setTelefone(e.target.value)}
            />
            <label>Telefone</label>
          </div>
          <div className="box-user-cadastro">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Senha</label>
          </div>
          <div className="box-user-cadastro">
            <input
              type="number"
              required
              onChange={(e) => setCep(e.target.value)}
            />
            <label>CEP</label>
          </div>
          <div className="box-user-cadastro">
            <input
              type="number"
              required
              onChange={(e) => setNumero_casa(e.target.value)}
            />
            <label>Nº Casa</label>
          </div>
          <div className="box-user-cadastro">
            <input
              type="text"
              required
              onChange={(e) => setObservacoes(e.target.value)}
            />
            <label>Observações</label>
          </div>
          <input
            type="button"
            value="Cadastrar"
            className="botao-cadastro"
            onClick={() => enviarDados()}
          />
          <br />
        </div>
      </div>
    </div>
  );
}
