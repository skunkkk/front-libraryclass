import React from "react";
import "./status-livro.css";

export default function StatusLivro() {
  return (
    <div className="container">
      <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo">
        <div className="status-container">
          <p>Disponibilidade :</p>
          <p className="disponibilidade">Disponivel/Indiponivel</p>
          <button class="btn-reserva">Fazer reserva</button>
          <div className="faq-status">
            <div className="disponibilidade-div">
              <p className="faq-satus-font">
                Se o livro não estiver disponivel, espere até que volte para a
                biblioteca.
              </p>
              <p className="faq-satus-font">
                Se caso Estiver com dificuldades para consultar o status,
                porcure ajuda na secretaria da escola
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
