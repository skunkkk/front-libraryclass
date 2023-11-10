import React, { useState } from 'react'
import "../Sessões/Sessoes.css"
export default function Sessoes() {
    const [lista, setLista] = useState([]);

  return (
    <div className='container-sessoes'>
        <input type='text' placeholder='categoria' onClick={() => setLista(lista ++)}/>

        <input type='text' placeholder='nome'/>
        <input type='text' placeholder='id do livro'/>
        <input type='button' value="Enviar"/>
    </div>
  )
}
