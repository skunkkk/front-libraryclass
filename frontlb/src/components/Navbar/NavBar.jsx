import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faNewspaper,
  faBook,
  faCalendar,
  faHeart,
  faPencil,
  faEye,
  faPlus,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Calendario from "./Cal.pdf";
import Logo from "./LogoAR.png";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  let conteudoNav;

  switch (location.pathname) {
    case "/criarautor":
      conteudoNav = (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/VerAutor"}>
                <FontAwesomeIcon icon={faEye} /> Ver Autor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/CriarAutor"}>
                <FontAwesomeIcon icon={faPlus} /> Criar Autor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/NavegacaoADM"}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
              </Link>
            </li>
          </ul>
        </>
      );
      break;

    case "/Sessoes":
      conteudoNav = (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/VerAutor"}>
                <FontAwesomeIcon icon={faEye} /> Ver Sessão
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/CriarAutor"}>
                <FontAwesomeIcon icon={faPlus} /> Criar Sessão
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/NavegacaoADM"}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
              </Link>
            </li>
          </ul>
        </>
      );
      break;

    default:
      conteudoNav = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faNewspaper} /> Noticias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faBook} /> LibraryClassApp
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" download href={Calendario}>
              <FontAwesomeIcon icon={faCalendar} /> Calendario
            </a>
          </li>
        </ul>
      );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          {conteudoNav}
          <button className="btn btn-custom">Área do Usuário</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
