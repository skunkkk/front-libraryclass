import React from 'react'
import "../Sessões/Sessoes.css"
export default function Sessoes() {
  return (
    <div className='container-sessoes'>
        <input type='text' placeholder='categoria'/>
        <input type='text' placeholder='nome'/>
        <input type='text' placeholder='id do livro'/>
        <input type='button' value="Enviar"/>
    </div>
  )
}
