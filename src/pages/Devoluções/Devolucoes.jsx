import React, { useState } from 'react'

export default function Devolucoes() {
  const [devolver, setDevolver] = useState([]);
  const addDevolucao = (e) => {
    e.preventDefault();
    return setDevolver([devolver]);
  }  
  return (
    <div style={{backgroundColor : 'black'}}>
        
    <div>
        <input type='text' id='devolucao' onChange={(e) => setDevolver(e.target.value)} />
        <button type='submit' onClick={addDevolucao}/>
    </div>
    <h1>Devoluções</h1>
    <ul style={{color : 'white'}}>
       {devolver.map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>
    </div>

  )
}
