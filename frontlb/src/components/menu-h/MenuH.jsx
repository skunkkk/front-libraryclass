import React from 'react';
import '../menu-h/MenuH.css';
import { Link } from 'react-router-dom';

export default function MenuH() {
  return (
      <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
      <h1 className="menu-title">(coloque a logo aqui)Library Class</h1>

        <div style={{ padding: '10%' }}></div>
        <li>
          <Link to="/Perfil" className="menu__item">
            Meu Perfil
          </Link>
        </li>
        <li>
          <Link to="/Configuracao" className="menu__item">
            Configurações
          </Link>
        </li>
        <li>
          <Link to="/Mural" className="menu__item">
            Mural
          </Link>
        </li>
        <li>
          <Link to="/Library" className="menu__item">
            LibraryClass APP
          </Link>
        </li>
        <li>
          <Link to="/FAQ" className="menu__item">
            Ajuda
          </Link>
        </li>
      </ul>
    </div>
    
  );
}
