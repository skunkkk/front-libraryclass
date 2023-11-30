import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
import { format } from 'date-fns';


export default function InserirReservas() {
  const [id_reservas, setId_reservas] = useState();
  const [reservas,setReservas]=useState([]);
  async function liberarReserva(reservaid) {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/reservas/${reservaid}`, {
        status_reserva:1,
      });
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }

  async function negar(reservaid) {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/reservas/${reservaid}`
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }
console.log(reservas)
  useEffect(()=>{
    axios.get(`http://localhost:8000/obterReserva`).then((res)=>setReservas(res.data))
  },[])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",

        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="container-reservas" style={{}}>
        <Navbar></Navbar>

        <div className="alinhar-reservas">
          <div className="reservas">
            <h1 style={{ marginBottom: "10px" }}>Pesquisar reserva</h1>
            <input
              type="search"
              placeholder="Insira o codigo da reserva..."
              className="input-reservas"
              aria-label="Search"
              required
              onChange={(e) => setId_reservas(e.target.value)}
            />
            <table style={{ width: "100%", marginTop: "20px" }}>
              <thead>
                <tr>
                  <th>ID reserva</th>
                  <th>data da reserva</th>
                  <th>Localização livro</th>
                  <th>Título livro</th>
                  <th>CPF/RA do retirante</th>
                  <th>Usuário retirante</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {reservas.map((reserva)=>(
                 <tr>
                  <td>{reserva.id_reservas}</td>
                  <td>
                  {format(new Date(reserva.data_reservas), 'dd/MM/yyyy')}
                  </td>
                  
                  <td>{reserva.id_secao}</td>
                  <td>{reserva.titulo_livros}</td>
                  <td>{reserva.id_usuarios}</td>
                  <td>{reserva.nome}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-primary"
                        onClick={() => liberarReserva(reserva.id_reservas)}
                      >
                        Liberar reserva
                      </button>{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => negar(reserva.id_reservas)}
                      >
                        Cancelar reserva
                      </button>
                    </div>
                  </td>
                </tr> 
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
