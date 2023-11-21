import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function VerAutor() {
  const [data,setData]=useState([])

  function apagar(id){
    console.log(id);
  }
  useEffect(()=>{
    axios.get('http://localhost:8000/autor').then((response)=>{setData(response.data)});
  },[])
  console.log(data)
  return (
    <div className='container-Autor'>
      <div className="navbar-reservas">

<Link to={"/Editarautor"}>
  <p>Editar Autor</p>
</Link>
<Link to={"/VerAutor"}>
  <p>Ver Autor</p>
</Link> 

<Link to={"/NavegacaoADM"}>
  <p>Voltar</p>
</Link> 

</div> 
       <div className='autores'>
            <h1>autores</h1>

            <table>
              <tr><th>id do autor</th><th>nome do autor</th><th>nacionalidade do autor</th> <th>ações</th></tr>
              {data.map((elemento)=>(
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.autor_nome}</td>
                  <td>{elemento.autor_nacionalidade}</td>
                  <td>
                    <button onClick={()=>apagar(elemento.id)}>Apagar</button>
                    <Link to={`/editarautor/${elemento.id}`}>Editar</Link>
                  </td>
                </tr>
              ))}

            </table>
            <div>
            </div>
       </div>
    </div>
  )
}
