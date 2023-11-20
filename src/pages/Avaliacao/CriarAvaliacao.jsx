import React, { useState } from 'react';
import './Avaliacao.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function CriarAvaliacoes() {
  const [id_avaliacoesPeriodicas, setId_avaliacoesPeriodicas] = useState("");
  const [isbn_livros, seIsbn_livros] = useState("");
  const [descricao, setDescricao] = useState("");

  async function adicionarAvaliacoes(){
    const dados = {
      id_avaliacoesPeriodicas,
      isbn_livros,
      descricao

    };
    try{
      const response = await axios.post("http://127.0.0.1:8000/avaliacaoPeriodicas",dados);
      console.log(response.data);
    }
    catch(erros){
      console.log(erros);
    }
  }
  return (
    <div className='container-avaliacao'>
         <div className='classInput'>
                <label>Id avaliação periodica: </label>
                <input type="text" />
                <label>ISBN livros: </label>
                <input type="text" />
                <label>Descrição: </label>
                <input type="text" />
                <button>Criar avaliação</button>
            </div>
           
    </div>
  )
}
