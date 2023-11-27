import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmprestimoCard from './EmprestimosCard';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ReservasAtivas() {
  const [dados, setDados] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [tipoPesquisa, setTipoPesquisa] = useState('nome_retirante');
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4; // Número de itens por página

  useEffect(() => {
    // Axios para buscar dados do backend
    // axios.get(`http://127.0.0.1:8000/obterReservaAtivas`).then((res) => {
    //   setDados(res.data);
    // });

    // Usando dados fictícios enquanto não há dados reais
    const dadosFicticios = [];
    for (let i = 1; i <= 20; i++) {
      dadosFicticios.push({
        id_reserva: i,
        nome_retirante: `Retirante ${i}`,
        nome_livro: `Livro ${i}`,
        data_entrega: `2023-12-${i < 10 ? '0' + i : i}`,
      });
    }
    setDados(dadosFicticios);
  }, []);

  const filtrarEmprestimos = () => {
    return dados.filter((emprestimo) =>
      String(emprestimo[tipoPesquisa]).toLowerCase().includes(filtro.toLowerCase())
    );
  };

  const pageCount = Math.ceil(filtrarEmprestimos().length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Reservas Ativas</h1>

      <div className="row justify-content-center mb-4">
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
          <div key={emprestimo.id_reserva} className="col-md-6 mx-auto mb-4">
            <EmprestimoCard
              nome_retirante={emprestimo.nome_retirante}
              nome_livro={emprestimo.nome_livro}
              data_entrega={emprestimo.data_entrega}
              id_reserva={emprestimo.id_reserva}
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
  );
}
