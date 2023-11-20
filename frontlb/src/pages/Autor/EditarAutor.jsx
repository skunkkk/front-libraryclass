import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function EditarAutor() {
  const {id} =useParams();
  const [autor_nome, setAutor_nome] = useState("");
  const [autor_nacionalidade, setAutor_nacionalidade] = useState("");
  const [dadosForms,setDadosForms]=useState([]);
useEffect(()=>{
  const response=axios.get(`http://127.0.0.1:8000/autor/${id}/edit`)
  .then((res)=>setDadosForms([res.data]));
  console.log(dadosForms);
},[])
  console.log(id);

function editar(){

const dados={
  id,
  autor_nome,
  autor_nacionalidade
}
const response=axios.put(`http://127.0.0.1:8000/autor/${id}/`,dados);

}

  if(!id){
    return (<div>Autor nao encontrado</div>)
  }else{
    return (
      <div>
          <div>
          <label>ID: </label>
          <input type="text" value={dadosForms.id} disabled  />
          <label>Nome do autor: </label>
          <input type="text" value={dadosForms.autor_nome} onChange={(e)=>setAutor_nome(e.target.value)}/>
          <label>Nacionalidade do autor: </label>
          <input type="text" value={dadosForms.autor_nacionalidade} onChange={(e)=>setAutor_nacionalidade(e.target.value)} />
          <button onClick={()=>editar()}>Editar autor</button>
          </div>
      </div>
    )
  }
  
}
