import React from 'react'

import "../Reservas/InserirReservas.css";
import { Form, Link } from "react-router-dom";
import axios from "axios";

export default function ReservasAtivas() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
       
      }}
    >
        <div style={{
            
        }}>
        <h1>Reservas ativas</h1>
         </div>
        <div className='search'>

        </div>
        <div className='card-ficha'>
            <table border={1} >
                <tr style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      
                }}>
          <th>Nome retirante:</th>
          <th>Nome Livro:</th>
          <th>Data entrega:</th>
             </tr>
             
            </table>
           
      <div>
      <input
        type="button"
        className='button-devolucao'
        value="Devolução">
            
        </input>
      </div>

        </div>



    </div>
  )
}
