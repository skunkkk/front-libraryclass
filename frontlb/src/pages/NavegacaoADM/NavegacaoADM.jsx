import React from "react";
import "./Navegacao.css";
import { Link } from "react-router-dom";
export default function NavegacaoADM() {
  return (
    <div className="container-navegacaoADM">
      <table className="tabela-adm">
        <tr>
          <td>
            <Link to={"/sessoes"}>
              <button className="button-adm"> Seções </button>
            </Link>
          </td>
          <td>
            <Link to={"/InserirReservas "}>
              <button className="button-adm">Reservas</button>
            </Link>
          </td>
          <td>
            <Link to={"/noticias/criar"}>
              <button className="button-adm">Noticias</button>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={"/InserirLivro"}>
              <button className="button-adm">Livros</button>
            </Link>
          </td>
          <td>
            <Link to={"/CriarAvaliacoes"}>
              <button className="button-adm">Avaliações Periódicas</button>
            </Link>
          </td>
          <td>
            <Link to={"/CriarAutor"}>
              <button className="button-adm">Autor</button>
            </Link>
          </td>
        </tr>
        <tr>
          
          
          <td>
            <Link to={"/Login"}>
              <button className="button-adm">Sair</button>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}
