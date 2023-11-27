// components/NoticiaCompleta.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/NavBar";

const UmaNoticia = () => {
  const { id } = useParams();
  const noticias = [
    {
      id: 1,
      titulo: "Aluno Destaque Recebe Prêmio",
      imagem: "https://via.placeholder.com/600x400",
      conteudo: "O aluno João Silva, do 9º ano, foi premiado por seu desempenho acadêmico excepcional. Ele recebeu o prêmio durante a cerimônia realizada na escola na última sexta-feira.",
    },
    {
      id: 2,
      titulo: "Nova Biblioteca na Escola",
      imagem: "https://via.placeholder.com/600x400",
      conteudo: "A escola inaugurou sua nova biblioteca, equipada com uma vasta coleção de livros didáticos e de ficção. Os alunos agora têm um espaço acolhedor para leitura e pesquisa.",
    },
    {
      id: 3,
      titulo: "Projeto de Ciências da Escola Destaque na Feira Estadual",
      imagem: "https://via.placeholder.com/600x400",
      conteudo: "O projeto de ciências 'Descobrindo o Universo' da Escola foi selecionado como destaque na Feira Estadual de Ciências. Parabéns aos alunos e professores envolvidos!",
    },
    {
      id: 4,
      titulo: "Equipe de Debate Representará a Escola em Competição Nacional",
      imagem: "https://via.placeholder.com/600x400",
      conteudo: "A equipe de debate da escola se classificou para a competição nacional. Eles enfrentarão equipes de todo o país em uma emocionante disputa intelectual.",
    },
    {
      id: 5,
      titulo: "Campanha de Arrecadação de Livros",
      imagem: "https://via.placeholder.com/600x400",
      conteudo: "A escola lançou uma campanha de arrecadação de livros para promover o gosto pela leitura entre os alunos. Contribua doando livros em bom estado na secretaria.",
    },
  ];
  const noticia = noticias.find((n) => n.id === parseInt(id, 10));

  if (!noticia) {
    return <div>Notícia não encontrada</div>;
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h1>{noticia.titulo}</h1>
        <img
          src={noticia.imagem}
          alt={noticia.titulo}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
        <p>{noticia.conteudo}</p>
        <Link to="/noticiascompleta">Voltar para Todas as Notícias</Link>
      </div>
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Entre em contato conosco: coordenacaoanarita@gmail.com</p>
      </footer>
    </div>
  );
};

export default UmaNoticia;
