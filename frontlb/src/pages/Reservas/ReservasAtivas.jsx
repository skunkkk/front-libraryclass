import React from 'react'

import "../Reservas/ReservasAtivas.css";
import { Form, Link } from "react-router-dom";
import axios from "axios";

export default function ReservasAtivas() {
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/verReservasAtivas`).then((res) => {
      setDados(res.data);
    });
  }, []);
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
           <header className="header">
        <h1 className="page-title">Reservas Ativas</h1>

        <div className="form-input-group">
          <label className="search-input-label" htmlFor="search">
            <input
              className="search-input"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              required
            />
          </label>
        </div>
      </header>
     
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
             <br></br>
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
