import React from 'react'
import '../menu-h/MenuH.css'
import { Link } from 'react-router-dom'

export default function MenuH() {
  return (
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <div style={{padding : '10%'}}></div>
        <li><a class="menu__item" href="#"><Link to={"/Perfil"}>Meu Perfil</Link></a></li>
        <li><a class="menu__item" href="#"><Link to={"/Configuracao"}>Configurações</Link></a></li>
        <li><a class="menu__item" href="#"><Link to={"/Library"}>Bibliotech</Link></a></li>
        <li><a class="menu__item" href="#"><Link to={"/FAQ"}>FAQ</Link></a></li>
      </ul>
    </div>
  )
}
