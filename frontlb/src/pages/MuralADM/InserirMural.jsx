import React from 'react'
import './MuralADM.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function InserirMural() {
  return (
    <div className='container-muraladm'>
      <div className='navbar'>
        <p>Inserir no mural</p>
        <Link to={'/VerMural'}><p>Ver murais</p></Link>
        <Link to={'/NavegacaoADM'}><p>Voltar</p></Link>
      </div>
      <div className="box1">
        <h1>Inserir mensagem no mural</h1>
        <textarea className='txtarea'></textarea>
        <button className='btn-enviar'>Enviar</button>
      </div>
    </div>
  )
}
