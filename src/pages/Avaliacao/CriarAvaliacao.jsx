import React, { useState } from 'react';
import './Avaliacao.css';
import { useNavigate } from 'react-router-dom';
export default function CriarAvaliacoes() {
  const [descricao, setDescricao] = useState("");
  const [idAvaliacao, setIdA] = useState(0);
  let history = useNavigate();
  function testarDados(){
    console.log(descricao, idAvaliacao)
  }
  return (
    <div className='container-avaliacao'>
         <div className='classInput'>
                <label>Criar avaliação: </label>
                <input type="text" />
                <button>Criar avaliação</button>
            </div>
           
    </div>
  )
}
