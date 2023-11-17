import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function VerLivro() {
  const[data, setData]= useState([]);
  const[id, setID]=useState(null);
 
useEffect(()=>{
  axios.get('http://127.0.0.1:8000/livros').then( response=> setData(response.data))
},[data])

console.log(data);


function apagar(id_enviado){
    setID(id_enviado)
    axios.delete(`http://127.0.0.1:8000/livros/${id}`)
}


  return (
    <div style={{display : 'flex', alignItems : 'center', textAlign : 'center', justifyContent : 'center', flexDirection : 'column', width : '100vw', height : '100vh'}}>
    <h1>Livros Cadastrados:</h1>
    <table border={1}>
       
{data.map(elemento=>
  <tr><td> {elemento.isbn_livros}</td><td>{elemento.titulo_livros}</td><td>{elemento.sinopse_livros}</td> <td>{elemento.id_secao}</td> <td>{elemento.foto_livros}</td> <td><button onClick={()=>{apagar(elemento.isbn_livros)}}>Apagar</button></td></tr>
  )}
    </table>
  </div>
  )
}


