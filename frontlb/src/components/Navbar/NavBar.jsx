<<<<<<< HEAD
import React from 'react';
import './Navbar.css';
import LogoEscola from './LogoEscola.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Calendario from "./Cal.pdf"
=======
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
>>>>>>> d3d51f7cd7e68d55949bb3076e68f351653889ba
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
<<<<<<< HEAD
          <img src={LogoEscola} alt="Your Company" height="30" className="d-inline-block align-top"/>
=======
          <img
            src={Logo}
            alt="Your Company"
            height="30"
            className="d-inline-block align-top"
          />
>>>>>>> d3d51f7cd7e68d55949bb3076e68f351653889ba
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {location.pathname === "/CriarAutor" ? (
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
          ) : (
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
          )}
          <button className="btn btn-custom">Área do Usuário</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
