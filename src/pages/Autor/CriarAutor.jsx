import React from 'react'
import './Autor.css'
export default function CriarAutor() {
  return (
    <div className='container-Autor'>
        <div className='classInput'>
                <label>ID: </label>
                <input type="text" />
            </div>
            <div className='classInput'>
                <label>Nome do autor: </label>
                <input type="text" />
           </div>
           <div className='classInput'>
                <label>Nacionalidade do autor: </label>
                <input type="text" />
           </div>
            <button>Criar autor</button>
    </div>
  )
}
