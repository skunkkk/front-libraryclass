import React from 'react';
import './Mural.css';
import Post from '../../components/post/post';
import MenuH from '../../components/menu-h/MenuH';

export default function Mural() {
     return (
    //     preto : #ocobob
    //     verde : #36a9a9
    //     azul : #143788
    // branco : #f1ebe2
        <div className='container-mural'>
            <div style={{padding : '5%'}}></div>
            <div class="sidebar" >
                <p></p>
                <a className='opcoes'>Meu Perfil</a>
                <a className='opcoes'>Configurações</a>
                <a className='opcoes'>Bibliotech</a>
                <a className='opcoes'>FAQ</a>
            </div>
            <div className='Titulo-mural'>
            {/* <div class="hamburger-menu">
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
  </div> */}
  <MenuH />
                <h1 className="nome-mural">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo-mural" />
            
            </div>
            <div class="sidebar" style={{right : 0}} >
                <div>
                <h3>Dúvidas?</h3>
                <h4>Faça uma pergunta ao administrador</h4>
                <input placeholder='Escreva aqui...' />
                </div>
            </div>

            <div className='conteudo-mural'>

                <div className='posts'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>

            </div>
        </div>


    )
}
