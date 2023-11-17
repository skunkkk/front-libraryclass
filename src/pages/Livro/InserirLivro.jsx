import React from 'react'

export default function InserirLivro() {
  return (
    <div style={{display : 'flex', alignItems : 'center', textAlign : 'center', justifyContent : 'center', flexDirection : 'column', width : '100vw', height : '100vh'}}>
    <h1>Inserir Livro:</h1>
    <input type='text' placeholder="Inserir ISBN do Livro" />

<input type='text' placeholder='Inserir Titulo Livro...'/>
<input type='text' placeholder='Inserir Foto Livro...'/>
<input type='text' placeholder='Inserir ID sessão...'/>

<input type='text' placeholder='Inserir Sinopse Livro...'/>
<input type='file' />

    <input type='button' value="Deletar Livro" />
    <input type='button' value="Enviar Livro" />
</div>
)
}
