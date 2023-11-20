
import React, { useState } from 'react'
import './CriarEmprestimo.css'
import { Link } from 'react-router-dom'
export default function CriarEmprestimo() {
    const [id_emprestimos,setId_emprestimos]=useState("");
    const[data_emprestimos,setData_emprestimos] = useState("");
    const[id_usuarios,setId_usuarios]= useState ("");
    const[isbn_livros, setIsbnlivros] = useState("");

    async function adicionarEmprestimo(){
        const dados = { 
        id_emprestimos,
        data_emprestimos,
        id_usuarios
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
            <div className='classInput' onChange={(e=>set(e.target.value))}>
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
           
            <button onClick={()=>adicionarEmprestimo()}>Criar</button>br
            </div>
        </div>
    )
}
>>>>>>> da5c1ec8e6dcaf309257784520574866c6f08fd6
