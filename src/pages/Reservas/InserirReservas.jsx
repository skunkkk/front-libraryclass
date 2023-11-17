import React from 'react'

export default function InserirReservas() {
  return (
    <div style={{display : 'flex', alignItems : 'center', textAlign : 'center', justifyContent : 'center', flexDirection : 'column', width : '100vw', height : '100vh'}}>
        <h1>Inserir Reservas:</h1>
<input type='text' placeholder='Inserir reserva...'/>
        <input type='button' value="Enviar Reserva" />
    </div>
  )
}
