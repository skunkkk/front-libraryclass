import React from "react";
import "./faq.css";
export default function Faq() {
  return (
    <div className="config-container">
      <div className="Titulo-faq">
        <h1 className="nome-faq">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo-faq" />
      </div>

      <div className="faq-div">
        <h2>Como funciona o mural?</h2>
        <p className="txtfaq">
          O mural é um meio de comunicação entre o aluno e a coordenação.
        </p>
        <p className="txtfaq">
          La você pode fazer perguntas que serão respondidas no feed.
        </p>
      </div>
      <div className="faq-div">
        <h2>Como usar o LibraryClass? </h2>
        <p className="txtfaq">.</p>
        <p className="txtfaq">
          La você pode fazer perguntas que serão respondidas no feed.
        </p>
      </div>
      <div className="faq-div"></div>
    </div>
  );
}
