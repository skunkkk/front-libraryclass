import React from 'react'
import './botao.css'
import { useNavigate } from 'react-router-dom'


export default function Botao({nome,rota}) {

  const navigator = useNavigate()

  return (
  
<div onClick={()=>{navigator(`${rota}`)}} className='container-botao'>
    <p>{nome}</p>
</div>
   
  )
}
