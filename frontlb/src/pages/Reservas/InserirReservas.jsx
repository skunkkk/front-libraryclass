import React, { useState } from "react";
import "../Reservas/InserirReservas.css";
import { Form, Link } from "react-router-dom";
import axios from "axios";

export default function InserirReservas() {
  const [id_reservas, setId_reservas] = useState();
  const [data_reservas, setData_reservas] = useState();
  const [isbn_livros, setIsbn_livros] = useState();
  const [id_usuarios, setId_usuarios] = useState();
  const [descricao, setDescricao] = useState();
  const [titulo_livros, setTitulo_livros] = useState();
  const [data_emprestimos, setData_emprestimos] = useState();

  async function liberarReserva() {
    const dados = {
      id_reservas,
      descricao,
      titulo_livros,
      data_emprestimos,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/reservas",
        dados
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }

  async function negar() {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/reservas/${id_reservas}`
      );
      console.log(response.data);
    } catch (erros) {
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
          <h1>Reservas</h1>
<<<<<<< HEAD
          {/* <div className="container-search">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Inserir reserva"
            className="input-reservas"
            aria-label="Search"
            value={""}
            onChange={(e)=>setId_reservas(e.target.value)}
          />
        </Form>
      </div> */}
          <input
            type="search"
            placeholder="Inserir reserva..."
            className="input-reservas"
            aria-label="Search"
            onChange={(e) => setId_reservas(e.target.value)}
          />
          <div>
            <input
              type="text"
              placeholder="Seção"
              className="input-reservas"
              onChange={(e) => setDescricao(e.target.value)}
            />
            <input
              type="text"
              placeholder="Livro"
              className="input-reservas"
              onChange={(e) => setTitulo_livros(e.target.value)}
            />
            <input
              type="text"
              placeholder="Data de entrega"
              className="input-reservas"
              onChange={(e) => setData_emprestimos(e.target.value)}
            />
          </div>
          <input
            type="button"
            className="button-reservas"
            value="Liberar Reserva"
            onClick={() => liberarReserva()}
          />
          <div>
            <input
              type="button"
              className="button-reservas"
              value="Negar Reserva"
              onClick={() => negar()}
            />

            <div className="botao-redirect">
              <div>
                <input
                  type="button"
                  className="button-r.ativas"
                  value="R.Ativas"
                />
              </div>
            </div>
=======
          <div><button className="btn btn-primary">Reservas Ativas</button> <button className="btn btn-secondary">Emprestimos Finalizadas</button></div>
          <label htmlFor="">Digite o numero da reserva para filtrar</label>
          <input type="search" name="" id="" />
      <table>
        <tr><th>Nº Reserva</th><th>Local do livro</th><th>Nome Livro</th><th>Data da entrega</th><th>Ações</th></tr>
        <tr><td>101</td><td>1A</td><td>Divergente</td><td>21/06/1996</td><td><button className="btn btn-success">Liberar Reserva</button> <button className="btn btn-danger">Negar Emprestimo</button></td></tr>

        
      </table>
          </div>
>>>>>>> a8f1b62a2d44af4d5012e8f3722f36dcdbc8849b
          </div>
    </div>
  );
}
