import React from "react";
import "./Navegacao.css";
import { Link } from "react-router-dom";
export default function NavegacaoADM() {
  return (
    <div className="container-navegacaoADM">
      <table className="tabela-adm">
        <tr>
          <td>
            <Link to={"/Sessoes"}>
              <button className="button-adm"> Seções </button>
            </Link>
          </td>
          <td>
            <Link to={"/InserirReservas "}>
              <button className="button-adm">Reservas</button>
            </Link>
          </td>
          <td>
            <Link to={"/InserirPublicacao"}>
              <button className="button-adm">Publicações</button>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={"/MuralADM"}>
              <button className="button-adm">Murais</button>
            </Link>
          </td>
          <td>
            <Link to={"/InserirLivro"}>
              <button className="button-adm">Livros</button>
            </Link>
          </td>
          <td>
            <Link to={"/VerFichas"}>
              <button className="button-adm">Fichas Livros</button>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={"/VerEmprestimo"}>
              <button className="button-adm">Emprestimos</button>
            </Link>
          </td>
          <td>
            <Link to={"/InserirDevolucao"}>
              <button className="button-adm">Devoluções</button>
            </Link>
          </td>
          <td>
            <Link to={"/CriarCategoria"}>
              <button className="button-adm">Categorias</button>
            </Link>
          </td>
        </tr>
        <tr>
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
