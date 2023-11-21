import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CriarEmprestimo.css';

export default function CriarEmprestimo() {
  const [data_emprestimos, setData_emprestimos] = useState('');
  const [id_usuarios, setId_usuarios] = useState('');
  const [isbn_livros, setIsbn_livros] = useState('');

  async function adicionarEmprestimo() {
    const dados = {
      data_emprestimos,
      id_usuarios,
      isbn_livros,
    };
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/emprestimos',
        dados
      );
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }

  return (
    <div className="container">
      <div className="navbar">
        <p>Criar empréstimo</p>
        <Link to={'/VerEmprestimo'}>
          <p>Ver empréstimo</p>
        </Link>
        <Link to={'/NavegacaoADM'}>
          <p>Voltar</p>
        </Link>
      </div>
      <div className="box1">
        <div className="classInput" onChange={(e) => setIsbn_livros(e.target.value)}>
          <label>ISBN: </label>
          <input type="text" />
        </div>
        <div className="classInput" onChange={(e) => setId_usuarios(e.target.value)}>
          <label>Usuário: </label>
          <input type="text" />
        </div>
        <div className="classInput" onChange={(e) => setData_emprestimos(e.target.value)}>
          <label>Data: </label>
          <input type="date" />
        </div>
        <button onClick={() => adicionarEmprestimo()}>Criar</button>
      </div>
    </div>
  );
}
