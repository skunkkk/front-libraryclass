import React from "react";
import "./inicio-library.css";
import Livro from '../../components/livro/livro'

import Botao from "../../components/Botao";
import { Button, Form } from "react-bootstrap";

export default function InicioLibrary() {
  return (
    <div className="container">
      <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo-biblioteca">
        <div className="container-search">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Procurar livros"
              className="me-2"
              aria-label="Search"
            />
            <Button ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Button>
          </Form>
        </div>
        <div className="container-livros">
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
    

        </div>
      </div>
    </div>
  );
}