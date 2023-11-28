import React from "react";
import "./Navbar.css";
import Logo from "./LogoEscola.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faNewspaper,
  faBook,
  faCalendar,
  faEye,
  faPlus,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Calendario from "./Cal.pdf";

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           <img
//             src={Logo}
//             alt="Your Company"
//             height="30"
//             className="d-inline-block align-top"
//           />
//         </a>
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
    case "/InserirReservas":
      conteudoNav = (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/VerReservas"}>
                <FontAwesomeIcon icon={faEye} /> Ver Reservas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/InserirReservas"}>
                <FontAwesomeIcon icon={faPlus} /> Criar Reservas
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
    case "/VerReservas":
      conteudoNav = (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/VerReservas"}>
                <FontAwesomeIcon icon={faEye} /> Ver Reservas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/InserirReservas"}>
                <FontAwesomeIcon icon={faPlus} /> Criar Reservas
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
        <a className="navbar-brand" href="#">
          {" "}
          <img
            src={Logo}
            alt="Your Company"
            height="30"
            className="d-inline-block align-top"
          />
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {conteudoNav}
          <button className="btn btn-custom">Área do Usuário</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
