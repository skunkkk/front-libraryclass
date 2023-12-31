import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmprestimoCard from './EmprestimosCard';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar/NavBar';
import { format } from 'date-fns';

export default function ReservasAtivas() {
  const [dados, setDados] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [tipoPesquisa, setTipoPesquisa] = useState('nome_retirante');
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4; // Número de itens por página
  const [atualiza, setAtualiza] = useState(false);

  useEffect(() => {
    obterReservasAtivas();
  }, [atualiza, pageNumber]);

  const obterReservasAtivas = () => {
    axios.get(`http://127.0.0.1:8000/obterReservaAtivas`).then((res) => {
      setDados(res.data);
    });
  };

  const filtrarEmprestimos = () => {
    return dados.filter((emprestimo) =>
      String(emprestimo[tipoPesquisa]).toLowerCase().includes(filtro.toLowerCase())
    );
  };

  const handleDevolucao = () => {
    // Ao devolver um livro, forçamos uma atualização da lista
    setAtualiza((prevState) => !prevState);
  };

  const pageCount = Math.ceil(filtrarEmprestimos().length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 text-center">

        <div className="row justify-content-center mb-4">
          <h1 className="mb-4 ">Reservas Ativas</h1>
          <div className="col-md-4">
            <select
              className="form-control"
              onChange={(e) => setTipoPesquisa(e.target.value)}
            >
              <option value="nome_retirante">Nome Retirante</option>
              <option value="nome_livro">Nome Livro</option>
              <option value="id_reserva">ID Reserva</option>
            </select>
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              type="search"
              name="search"
              id="search"
              required
              placeholder={`Pesquisar por ${
                tipoPesquisa === 'nome_retirante'
                  ? 'nome do retirante'
                  : tipoPesquisa === 'nome_livro'
                  ? 'nome do livro'
                  : 'ID reserva'
              }`}
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>
        </div>

        {filtrarEmprestimos()
          .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
          .map((emprestimo) => (
            <div key={emprestimo.id_reservas} className="col-md-6 mx-auto mb-4">
              <EmprestimoCard
                nome_retirante={emprestimo.nome}
                nome_livro={emprestimo.titulo_livros}
                data_entrega={format(new Date(emprestimo.data_reservas), 'dd/MM/yyyy')}
                id_reserva={emprestimo.id_reservas}
                onDevolucao={handleDevolucao}
              />
            </div>
          ))}

        <ReactPaginate
          previousLabel={
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: '1.5rem', color: 'blue' }}
            />
          }
          nextLabel={
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '1.5rem', color: 'blue' }}
            />
          }
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagination justify-content-center'}
          previousLinkClassName={'page-link'}
          nextLinkClassName={'page-link'}
          disabledClassName={'page-item disabled'}
          activeClassName={'page-item active'}
          breakLabel={'...'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
        />
      </div>
    </>
  );
}
