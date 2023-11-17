import React from 'react'

export default function VerPublicacao() {
  return (
  <div style={{display : 'flex', alignItems : 'center', textAlign : 'center', justifyContent : 'center', flexDirection : 'column', width : '100vw', height : '100vh'}}>
  <h1>Publicações Feitas:</h1>
  <li></li>
<input type='text' placeholder='Inserir publicação para deletar'/>
  <input type='button' value="Deletar Publicação" />
</div>
  )
}
