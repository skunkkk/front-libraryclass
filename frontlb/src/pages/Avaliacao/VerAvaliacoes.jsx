import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function VerAvaliacoes() {
    const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/avaliacaoPeriodicas').then((response)=>{setData(response.data)});
  },[])
  console.log(data)
  return (
    <div>
        
        <h1>ver lista de avaliacoes periodicas feitas</h1>
    
    <table>
        <tr><td>id avaliacoes</td><td>descricao</td><td>isbn</td></tr>
        {data.map((elemento)=>(
            <tr><td>{elemento.id_avaliacoesPeriodicas}</td><td>{elemento.descricao}</td><td>{elemento.isbn_livros}</td></tr>
        ))}
    </table>
    
    </div>
  )
}



