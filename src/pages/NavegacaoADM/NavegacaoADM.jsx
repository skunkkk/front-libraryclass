import React from 'react'
import './Navegacao.css';
export default function NavegacaoADM() {
  return (
    <div className='container-navegacaoADM'>
      <table>
        <tr>
          <td><button className='button-adm' >Seções</button></td>
          <td><button className='button-adm'>Reservas</button></td>
          <td><button className='button-adm'>Publicações</button></td>
        </tr>
        <tr>
          <td><button className='button-adm'>Murais</button></td>
          <td><button className='button-adm'>Livro</button></td>
          <td><button className='button-adm'>Fichas Livros</button></td>
        </tr>
        <tr>
          <td><button className='button-adm'>Emprestimos</button></td>
          <td><button className='button-adm'>Devoluções</button></td>
          <td><button className='button-adm'>Categorias</button></td>
          
        </tr>
        <tr>
          <td><button className='button-adm'>Avaliações Periódicas</button></td>
          <td><button className='button-adm'>Autor</button></td>
          
        </tr>
        <button className='button-adm'>Sair</button>

      </table>
    </div>
  )
}
