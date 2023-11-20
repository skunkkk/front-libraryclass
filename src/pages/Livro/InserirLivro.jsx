import axios from 'axios';
import React, { useState } from 'react'

export default function InserirLivro() {
  const [isbn_livros, setIsbn_livros] = useState("");
  const [titulo_livros, setTitulo_livros] = useState("");
  const [foto_livros, setFoto_livros] = useState(null);
  const [sinopse_livros, setSinopse_livros] = useState("");
  const [id_secao, setId_secao] = useState("");

  async function adicionarLivro() {
    const dados = {
      isbn_livros,
      titulo_livros,
      foto_livros,
      sinopse_livros,
      id_secao,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/livros", dados);
      console.log(response.data);
    } catch (erros) {
      console.log(erros);
    }
  }
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
       <div className='navbar'>
        <p>Inserir livro</p>
        <Link to={'/EditarLivro'}><p>Editar livro</p></Link>
        <Link to={'/VerLivro'}><p>Ver Livro</p></Link>
        <Link to={'/NavegacaoADM'}><p>Voltar</p></Link>
      </div>
      <h1>Inserir Livro:</h1>
      <div className="container-inputs-inserir">
      <input
        type="text"
        placeholder="Inserir ISBN do Livro"
        onChange={(e) => setIsbn_livros(e.target.value)}
        className="input-livro"
      />

      <input
        type="text"
        placeholder="Inserir Titulo Livro..."
        onChange={(e) => setTitulo_livros(e.target.value)}
        className="input-livro"
      />
      <input
        type="file"
        placeholder="Inserir Foto Livro..."
        onChange={(e) => setFoto_livros(e.target.files[0])}
        className="file-livro"
      />
      <input
        type="text"
        placeholder="Inserir ID sessão..."
        onChange={(e) => setId_secao(e.target.value)}
        className="input-livro"
      />

<input type='text' placeholder='Inserir Sinopse Livro...' onChange={(e)=>setSinopse_livros(e.target.value)}/>



    <input type='button' value="Enviar Livro" onClick={()=>adicionarLivro()}/>
</div>
)
}
