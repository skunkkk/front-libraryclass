import React, { useState } from 'react'

export default function InserirPublicacao() {
  const[id_publicacao,setId_publicacao]=useState();
  const[mensagem,setMensagem]=useState();
  return (
    <div style={{display : 'flex', alignItems : 'center', textAlign : 'center', justifyContent : 'center', flexDirection : 'column', width : '100vw', height : '100vh'}}>
    <h1>Inserir Publicação:</h1>
<input type='text' placeholder='Inserir Publicação...'/>
    <input type='button' value="Enviar Publicação" />
</div>
 )
}
