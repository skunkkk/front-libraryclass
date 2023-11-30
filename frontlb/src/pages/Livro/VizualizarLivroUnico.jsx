import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './VizualizarLivro.css';


export default function VisualizarLivroUnico({route}) {
const navigate = useNavigate();
const {id}=useParams();
const [livro,setLivro]=useState({});
const [textoResenha,setTextoResenha]=useState('');
const [tituloResenha,setTituloResenha]=useState('');
const [resenhaLivro,setResenhaLivro]=useState([]);
const [data,setData]=useState('');
const [status_reserva,setStatusReserva]=useState(false);
const id_user=12345678;
useEffect(()=>{
  axios.get(`http://localhost:8000/livros/${id}`).then((res)=>setLivro(res.data))
  axios.get(`http://localhost:8000/resenhasLivro/${livro.isbn_livros}`).then((res)=>setResenhaLivro(res.data))
},[]);
console.log(livro)

  const adicionarResenha = () => {
    try{
      axios.post('http://localhost:8000/resenhas',{
        'titulo_resenhas':textoResenha,
        'descricao_resenhas':tituloResenha,
        'id_usuarios':id_user,
        'isbn_livros':livro.isbn_livros
      })
      .then((response)=>alert("Resenha Adicionada"))
    }catch(erro){
      console.log(erro);
    }
  };

  const obterDataAtual = () => {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  };

  const pegarEmprestado =()=>{
    const data = obterDataAtual();
    setData(data);
    axios.post(`http://localhost:8000/emprestimos`,{
      "data_emprestimos" : data,
      "id_usuarios" : id_user,
      "isbn_livros" : livro.isbn_livros
    })
    .then(
      axios.post(`http://localhost:8000/reservas`,{
        "data_reservas": data,
        "status_reserva":status_reserva,
        "id_usuarios":id_user,
        "isbn_livros":livro.isbn_livros
      })
      .then((res) => {
        const id_reserva = res.data.id_reservas;
        navigate(`/reservas/${id_reserva}`);
      })
    );
  }

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "#f0f0f0",
        borderRadius: "10px",
      }}
    >
       <Navbar/>
      <h1>{livro.titulo_livros}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          background: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <div style={{ flex: "1.3" }}>
          <img
          
          src={livro.foto_livros ? `http://localhost:8000/storage/livros/${livro.foto_livros.split("/")[1]}` : ''}
            alt="Capa do Livro"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </div>
        <div
          style={{
            flex: "1.4",
            textAlign: "left",
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{color:'black'}}>{livro.sinopse_livros}</p>
          <p style={{ marginTop: "10px", fontWeight: "bold",color:'black' }}>
            {/* Autor: {livro ? livro.autor.autor_nome : '' } */}
          </p>
        </div>
        <div
          style={{
            flex: "1.3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", 
            color:'black'
          }}
        >
          <button
            style={{
              padding: "5px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "80%",
            }}
            onClick={()=>pegarEmprestado()}
          >
            Pegar Emprestado
          </button>
        </div>
      </div>
      <h2 style={{ marginTop: "20px" }}>Resenhas</h2>
      {resenhaLivro.map((resenha) => (
        <div
          key={resenha.id_resenhas}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px",
            width: "50%",
            background: "#fff",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p style={{color:'black'}}>Usuario: {resenha.usuario.nome}</p>
          <p style={{color:'black'}}>titulo resenha: {resenha.titulo_resenhas}</p>
          <p style={{color:'black'}}>{resenha.descricao_resenhas}</p>
        </div>
      ))}
      <div style={{ width: "50%", marginTop: "20px" }}>
        <div>
          <h3 className="display-8">Escreva sua resenha</h3>
          <input type="text" placeholder="insira o titulo da resenha..." style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
          }} 
          onChange={(e)=>setTituloResenha(e.target.value)}
          />
        <textarea
          placeholder="Escreva sua resenha..."
          required
          onChange={(e) => setTextoResenha(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        ></textarea>
        <button
          onClick={adicionarResenha}
          style={{
            padding: "5px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Adicionar Resenha
        </button>
        </div>
        
      </div>
    </div>
  );
}
