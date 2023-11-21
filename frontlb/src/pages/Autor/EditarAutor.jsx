import React from 'react'
import './Autor.css'
export default function EditarAutor() {
  return (
    <div className='container-Autor'>
      <h1>Editar autor</h1>
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
