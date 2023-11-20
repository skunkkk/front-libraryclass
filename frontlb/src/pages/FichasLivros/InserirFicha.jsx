import React from 'react'
import { useState } from 'react'

export default function InserirFicha() {
  const [idficha,setIdFicha]=useState('');
  const [idMulta,setIdMulta]=useState('');
  const [isbnLivros,setIsbnLivros]=useState('');
  const [idEmprestimo,setIdEmprestimo]=useState('');

  const dados={
    idficha,
    idMulta,
    isbnLivros,
    idEmprestimo
  }
  async function enviarDados(){
    const response=await axios.post('http://localhost:8000/fichalivros',dados);
    console.log(response.data);
  }


  return (
    <div style={{display : 'flex', alignItems : 'center', textAlign : 'center', justifyContent : 'center', flexDirection : 'column', width : '100vw', height : '100vh'}}>
    <h1>Inserir Ficha:</h1>
    id ficha livro
    <label htmlFor="">Id da ficha</label>
    <input type="text" onChange={(e)=>setIdFicha(e.target.value)} />
    <label htmlFor="">id da multa</label>
    <input type="text" onChange={(e)=>setIdMulta(e.target.value)} />
    <label htmlFor="">isbn livros</label>
    <input type="text" onChange={(e)=>setIsbnLivros(e.target.value)} />
    <label htmlFor="">id emprestimo</label>
    <input type="text" onChange={(e)=>setIdEmprestimo(e.target.value)} />
             
<input type='text' placeholder='Inserir Ficha...'/>
    <input type='button' value="Enviar Ficha" />
</div>
  )
}
