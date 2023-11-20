import React, { useState } from 'react'
import './Autor.css'
import axios from 'axios';
export default function CriarAutor() {
  const [id, setId] = useState("");
  const [autor_nome, setAutor_nome] = useState("");
  const [autor_nacionalidade, setAutor_nacionalidade] = useState("");

  async function adicionarAutor(){
    const dados = {
      id,
      autor_nome,
      autor_nacionalidade

    };
    try{
      const response = await axios.post("http://127.0.0.1:8000/autor",dados);
      console.log(response.data);
    }
    catch(erros){
      console.log(erros);
    }
  }
  return (
    <div className='container-Autor'>
        <div className='classInput'>
                <label>ID: </label>
                <input type="text" />
            </div>
            <div className='classInput' onChange={(e) => setAutor_nome(e.target.value)}>
                <label>Nome do autor: </label>
                <input type="text" />
           </div>
           <div className='classInput'onChange={(e) => setAutor_nacionalidade(e.target.value)}>
                <label>Nacionalidade do autor: </label>
                <input type="text" />
           </div>
            <button onClick={()=>adicionarAutor()}>Criar autor</button>
    </div>
  )
}
