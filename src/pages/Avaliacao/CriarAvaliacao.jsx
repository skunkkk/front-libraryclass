import React, { useState } from 'react';
import './Avaliacao.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function CriarAvaliacoes() {
  const [id_avaliacoesPeriodicas, setId_avaliacoesPeriodicas] = useState("");
  const [isbn_livros, setIsbn_livros] = useState("");
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
      console.log(erros)
    }
  }
  return (
    <div className='container-avaliacao'>
         <div className='classInput' onChange={(e) => setId_avaliacoesPeriodicas(e.target.value)}>
                <label>ID avaliação: </label>
                <input type="text" />
              
            </div>
            <div className='classInput' onChange={(e) => setIsbn_livros(e.target.value)}>
                <label>ISBN: </label>
                <input type="text" />
                
            </div>
            <div className='classInput' onChange={(e) => setDescricao(e.target.value)}>
                <label>Descrição: </label>
                <input type="text" />
               
            </div>
            <button onClick={()=>adicionarAvaliacoes()}>Criar avaliação</button>
           
    </div>
  )
}
