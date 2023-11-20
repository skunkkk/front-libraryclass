import React, { useState } from 'react'
import "../Sessões/Sessoes.css"
import axios from 'axios';
import { Link, useNavigate,  } from 'react-router-dom';
export default function InserirSessoes() {
  const[descricao, setDescricao]= useState('');
  
  const history=useNavigate()

  function enviarDados(){
    axios.post('http://127.0.0.1:8000/secoes',{descricao:descricao}).then( response=> console.log(response)).then(alert("sessão criada com sucesso")).then(history("/verSessoes"))
  }
  return (
    <div className='container-sessoes'>
         <div className='navbar'>
        <p>Inserir Seção</p>
        <Link to={'/VerSessoes'}><p>Ver Seções</p></Link>
        <Link to={'/NavegacaoADM'}><p>Voltar</p></Link>
      </div>
      <h1>Criar seção</h1>
      <label>Descrição</label>
        <input type='text' placeholder='descrição'id='descrição' onChange={(elemento)=>setDescricao(elemento.target.value)}/>
        <input type='button' onClick={enviarDados} value="Enviar"/>
    </div>
  )
}
