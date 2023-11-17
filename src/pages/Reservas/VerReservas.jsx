import React from 'react'

export default function VerReservas() {
  return (
    <div style={{display : 'flex', alignItems : 'center', textAlign : 'center', justifyContent : 'center', flexDirection : 'column', width : '100vw', height : '100vh'}}>
        <h1>Reservas Feitas:</h1>
        <li></li>
<input type='text' placeholder='Inserir reserva para deletar'/>
        <input type='button' value="Deletar Reserva" />
    </div>
  )
}
