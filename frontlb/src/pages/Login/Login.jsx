import React, { useEffect, useState } from "react";
import "./Login.css";
import { useJwt } from "react-jwt";
const token = localStorage.getItem("authData");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { decodedToken, hasExpired } = useJwt(token);
  console.log(token);

  useEffect(() => {
    if (hasExpired) {
      console.log("O token expirou.");
    } else {
      console.log("Token decodificado:", decodedToken);
    }
  }, [decodedToken, hasExpired]);

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

      // Armazene o token no armazenamento local
      localStorage.setItem("authData", JSON.stringify(data));
      console.log("Login bem-sucedido! Token armazenado:", data.token);
    } else {
      console.error("Falha na autenticação");
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
          className="botao-login"
          onClick={() => handleLogin()}
        >
          Entrar
        </button>
        <br></br>

        <input type="button" value="checar" className="botao-cadastro" />
      </div>
    </div>
  );
}
