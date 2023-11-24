import React, { useState } from "react";
import "../Reservas/InserirReservas.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function InserirReservas() {
  const [id_reservas, setId_reservas] = useState();
  const [data_reservas, setData_reservas] = useState();
  const [isbn_livros, setIsbn_livros] = useState();
  const [id_usuarios, setId_usuarios] = useState();

  async function adicionarReserva(){
    const dados ={
      id_reservas,
      data_reservas,
      isbn_livros,
      id_usuarios
    };
    try{
      const response = await axios.post("http://127.0.0.1:8000/publicacoes",dados);
      console.log(response.data);

    }catch (erros){
      console.log(erros);
    }
  }
  return (
    <div className="container-reservas">
      <div className="navbar-reservas">
        <p>Inserir reservas</p>

        <Link to={"/VerReservas"}>
          <p>Ver reservas</p>
        </Link>
        <Link to={"/NavegacaoADM"}>
          <p>Voltar</p>
        </Link>
      </div>
      <div className="alinhar-reservas">
        <div className="reservas">
          <h1>Inserir Reservas:</h1>
          <input
            type="text"
            placeholder="Inserir reserva..."
            className="input-reservas"
            onChange={(e)=>setId_reservas(e.target.value)}
          />
          <div> 
           <input
            type="text"
            placeholder="Seção" 
            className="input-reservas"
            onChange={(e)=>setId_reservas(e.target.value)}
          />
           <input
            type="text"
            placeholder="Livro"
            className="input-reservas"
            onChange={(e)=>setId_reservas(e.target.value)}
          />
           <input
            type="text"
            placeholder="Data de entrega"
            className="input-reservas"
            onChange={(e)=>setId_reservas(e.target.value)}
          />
          </div>
          <input
            type="button"
            className="button-reservas"
            value="Liberar Reserva" onClick={()=>adicionarReserva()}
          />
          <div>
          <input
            type="button"
            className="button-reservas"
            value="Negar Reserva" onClick={()=>adicionarReserva()}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
