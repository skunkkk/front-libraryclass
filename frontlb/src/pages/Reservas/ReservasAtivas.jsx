import React, { useEffect, useState } from 'react'

import "../Reservas/ReservasAtivas.css";
import { Form, Link } from "react-router-dom";
import axios from "axios";
import EmprestimoCard from './EmprestimosCard';


export default function ReservasAtivas() {
  const [dados,setDados]=useState([]);
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/obterReservaAtivas`).then((res) => {
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
        <EmprestimoCard/>
        <EmprestimoCard/>
        <EmprestimoCard/>



    </div>
  )
}
