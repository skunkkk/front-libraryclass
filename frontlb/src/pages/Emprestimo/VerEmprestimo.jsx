import React, { useEffect, useState } from "react";
import "./VerEmprestimo.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function VerEmprestimo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/emprestimos").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="container-veremprestimo">
      <div className="navbar">
        <p>Ver emprestio</p>
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <box className="box1">
        <div className="box-msgmurais">
          <div className="msgmural"></div>
          <div className="msgmural"></div>
          <div className="msgmural"></div>
          <div className="msgmural"></div>
          <div className="msgmural"></div>
        </div>
      </box>
    </div>
  );
}
