import React from 'react'
import './VerCategoria.css'
export default function EditarCategoria() {
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
       
        <button>Editar Categoria</button>
       
</div>
)
}
