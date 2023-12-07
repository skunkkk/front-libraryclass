import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("authData");
  const { hasExpired } = useJwt(token);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleLogin = async () => {
    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("authData", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Falha na autenticação");
    }
  };

  return (
    <div className="container-login">
      <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo-login">
        <h1 className="logar">Login</h1>
        <div className="inputs-login">
          <div className="box-user-login">
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>E-mail</label>
          </div>
          <div className="box-user-login">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Senha</label>
          </div>
        </div>
        <button
          type="button"
          className="botao-cadastro"
          onClick={() => handleLogin()}
        >
          Entrar
        </button>
        <br />
      </div>
    </div>
  );
}
