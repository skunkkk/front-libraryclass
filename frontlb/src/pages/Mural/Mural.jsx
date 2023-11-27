import React, { useState } from "react";
import "./Mural.css";
import Post from "../../components/post/post";
import MenuH from "../../components/menu-h/MenuH";

export default function Mural() {
  const [data, setData] = useState([]);

  return (
    //     preto : #ocobob
    //     verde : #36a9a9
    //     azul : #143788
    // branco : #f1ebe2
    <div className="container-mural">
      <div className="titulo-mural">
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
        {/* <MenuH /> */}
        <h1 className="nome-mural">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo-mural" />
        <details className="adm">
          <summary>?</summary>{" "}
          <div class="sidebar" style={{ right: 0 }}>
            <div>
              <h3>Dúvidas?</h3>
              <h4>Faça uma pergunta ao administrador</h4>
              <input placeholder="Escreva aqui..." required/>
            </div>
          </div>
        </details>
      </div>

      <div className="conteudo-mural">
        <div className="posts">
          <div className="enviar-adm">
            <div className="titulo-mural-enviar">
              <h2>Postar Mensagem</h2>
            </div>
            <div className="inputs-mural">
              <p style={{ color: "black" }}>Titulo:</p>
              <input placeholder="Escreva aqui... " required/>
              <p style={{ color: "black" }}>Mensagem:</p>
              <input placeholder="Escreva aqui... " required/>

              <p style={{ color: "black" }}>Cargo:</p>
              <input placeholder="Escreva aqui... "required />
            </div>
            <button className="button-mural">Enviar</button>
          </div>
          <Post
            titulo="Agressão virtual"
            mensagem="Venho por meio desta denunciar um caso alarmante de cyberbullying que está ocorrendo nas redes sociais, causando sérios danos emocionais e psicológicos à vítima. Trata-se de um incidente envolvendo a usuária [Nome da Vítima], residente na cidade de [Cidade], que vem sendo alvo de ataques virtuais constantes."
            cargo="Aluno"
          />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
