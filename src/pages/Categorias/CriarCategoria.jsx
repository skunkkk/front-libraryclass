import React from 'react'
import './VerCategoria.css'
export default function VerCategoriaApagar() {
  return (
    <div className='container-verCategoria'>
        <div className='classInput'>
                <label>Categoria: </label>
                <input type="text" />
            </div>
            <div className='classInput'>
                <label>ID seção: </label>
                <input type="text" />
           </div>
           
            <button>ver categoria</button>
            <button>apagar categoria</button>
    </div>
  )
}
