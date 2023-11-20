
import React, { useState } from 'react'
import './CriarEmprestimo.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function CriarEmprestimo() {
    const [id_emprestimos,setId_emprestimos]=useState("");
    const[data_emprestimos,setData_emprestimos] = useState("");
    const[id_usuarios,setId_usuarios]= useState ("");
    const[isbn_livros, setIsbn_livros] = useState("");

    async function adicionarEmprestimo(){
        const dados = { 
        id_emprestimos,
        data_emprestimos,
        id_usuarios,
        isbn_livros
    };
    try{
        const response = await axios.post("http://127.0.0.1:8000/emprestimos",dados);
        console.log(response.data);
    }
    catch(erros){
        console.log(erros);
    };
    }

    return (
        <div className='container-criaremprestimo'>
            <div className='navbar'>
        <p>Criar emprestimo  </p>
        <Link to={'/VerEmprestimo'}><p>Ver emprestio</p></Link>
        <Link to={'/NavegacaoADM'}><p>Voltar</p></Link>
      </div>
      <div className="box1">
      <div className='classInput' onChange={(e=>setId_emprestimos(e.target.value))}>
                <label>ID: </label>
                <input type="text" />
            </div>
            <div className='classInput' onChange={(e=>setIsbn_livros(e.target.value))}>
                <label>ISBN: </label>
                <input type="text" />
            </div>
            <div className='classInput' onChange={(e=>setId_usuarios(e.target.value))}>
                <label>Usuario: </label>
                <input type="text" />
            </div>
            <div className='classInput' onChange={(e=>setData_emprestimos(e.target.value))}>
                <label>Data: </label>
                <input type="text" />
            </div>
           
            <button onClick={()=>adicionarEmprestimo()}>Criar</button>
            </div>
        </div>
    )
}

