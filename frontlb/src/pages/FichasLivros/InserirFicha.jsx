import React from 'react'

export default function InserirFicha() {
  return (
    <div style={{display : 'flex', alignItems : 'center', textAlign : 'center', justifyContent : 'center', flexDirection : 'column', width : '100vw', height : '100vh'}}>
    <h1>Inserir Ficha:</h1>
<input type='text' placeholder='Inserir Ficha...'/>
    <input type='button' value="Enviar Ficha" />
</div>
  )
}
