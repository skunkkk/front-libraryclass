import React from 'react'
import '../menu-h/MenuH.css'

export default function MenuH() {
  return (
    <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">Meu Perfil</a></li>
      <li><a class="menu__item" href="#">Configurações</a></li>
      <li><a class="menu__item" href="#">Bibliotech</a></li>
      <li><a class="menu__item" href="#">FAQ</a></li>
    </ul>
  </div>
  )
}
