import React, { useEffect, useState } from 'react'
import './Autor.css'
import axios from 'axios';
export default function VerAutor() {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/autor').then((response)=>{setData(response.data)});
  },[])
  console.log(data)
  return (
    <div className='container-Autor'>
       <div className='autores'>
            <h1>autores</h1>
            <div>

            {data.map((elemento)=>(
              <div>
                <div>{elemento.autor_nome}</div>
                <div>{elemento.autor_nacionalidade}</div>
              <br />
              </div>
            ))}
            </div>
       </div>
    </div>
  )
}
