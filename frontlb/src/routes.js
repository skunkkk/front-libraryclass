import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Configuração from "./pages/Configuração/configuração";
import Faq from "./pages/FAQ/faq";
import Inicio from "./pages/tela-inicial/incio";
import Perfil from "./pages/meu-perfil/meu-perfil";
import StatusLivro from "./pages/status-lirvro/status-livro";
import Mural from "./pages/Mural/Mural";
import InicioLibrary from "./pages/inicio-library/inicio-library";
import VerDevolucoes from "./pages/Devolução/VerDevolucoes";
import InserirDevolucao from "./pages/Devolução/InserirDevolucao";
import CriarCategoria from "./pages/Categorias/CriarCategoria";
import Avaliacao from "./pages/Avaliacao/CriarAvaliacao";
import VerSessoes from "./pages/Sessões/VerSessoes";
import VerUmaCategoria from "./pages/Categorias/VerUmaCategoria";
import EditarCategoria from "./pages/Categorias/EditarCategoria";
import DeletarCategoria from "./pages/Categorias/DeletarCategoria";
import CriarAvaliacoes from "./pages/Avaliacao/CriarAvaliacao";
import VerAvaliacoes from "./pages/Avaliacao/VerAvaliacoes";
import VerCategoriaApagar from "./pages/Categorias/CriarCategoria";
import VerCategoria from "./pages/Categorias/verCategoria";
import MuralADM from "./pages/MuralADM/InserirMural";
import NavegacaoADM from "./pages/NavegacaoADM/NavegacaoADM";
import InserirPublicacao from "./pages/Publicacao/InserirPublicacao";
import VerPublicacao from "./pages/Publicacao/VerPublicacao";
import InserirReservas from "./pages/Reservas/InserirReservas";
import VerReservas from "./pages/Reservas/VerReservas";
import InserirFicha from "./pages/FichasLivros/InserirFicha";
import VerFichas from "./pages/FichasLivros/VerFichas";
import VerUnicaFicha from "./pages/FichasLivros/VerUnicaFicha";
import CriarAutor from "./pages/Autor/CriarAutor";
import EditarLivro from "./pages/Livro/EditarLivro";
import InserirLivro from "./pages/Livro/InserirLivro";
import VerLivro from "./pages/Livro/VerLivro";
import Sessoes from "./pages/Sessões/Sessoes";
import NotFound from "./pages/NotFound/NotFound";
import VerAutor from "./pages/Autor/VerAutor";
import MenuH from "./components/menu-h/MenuH";
import EditarAutor from "./pages/Autor/EditarAutor";
import VerEmprestimo from "./pages/Emprestimo/VerEmprestimo";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import ReservasAtivas from "./pages/Reservas/ReservasAtivas";
import VizualizarLivroUnico from "./pages/Livro/VizualizarLivroUnico";
import MinhasReservas from "./pages/Reservas/MinhasReservas";
import PaginaInicial from "./pages/Noticias/PaginaInicial";
import NoticiasCompleta from "./pages/Noticias/NoticiasCompleta";
import UmaNoticia from "./pages/Noticias/UmaNoticia";
import CriarNoticia from "./pages/Noticias/CriarNoticia";
import ReservaFeita from "./pages/Reservas/ReservaFeita";
import { decodeToken } from "react-jwt";
import VLibras from "@moreiraste/react-vlibras";

const RotaPrivada = ({ nivelDeAcesso, children }) => {
  const token = localStorage.getItem("authData");
  const decodificado = decodeToken(token);
  const tipo = decodificado?.data?.tipo;

  console.log(tipo);

  if (!nivelDeAcesso.includes(tipo)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default function MyRoutes() {
  return (
    <BrowserRouter>
      {/* <MenuH/> */}
      <VLibras forceOnload={true} />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/areausuario" element={<Inicio />} />

        <Route path="/Configuracao" element={<Configuração />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/StatusLivro" element={<StatusLivro />} />
        <Route path="/Library" element={<InicioLibrary />} />

        <Route path="/VerDevolucoes" element={<VerDevolucoes />} />
        <Route
          path="/InserirDevolucao"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <InserirDevolucao />
            </RotaPrivada>
          }
        />

        <Route
          path="/CriarAvaliacoes"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <CriarAvaliacoes />
            </RotaPrivada>
          }
        />
        <Route path="/VerAvaliacoes" element={<VerAvaliacoes />} />

        <Route
          path="/CriarCategoria"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <CriarCategoria />
            </RotaPrivada>
          }
        />
        <Route path="/VerUmaCategoria" element={<VerUmaCategoria />} />
        <Route path="/InserirCategoria" element={<VerCategoriaApagar />} />

        <Route path="/verCategoria" element={<VerCategoria />} />
        <Route
          path="/EditarCategoria"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <EditarCategoria />
            </RotaPrivada>
          }
        />
        <Route
          path="/DeletarCategoria"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <DeletarCategoria />
            </RotaPrivada>
          }
        />

        <Route path="/VerPublicacao" element={<VerPublicacao />} />
        <Route
          path="/InserirPublicacao"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <InserirPublicacao />
            </RotaPrivada>
          }
        />

        <Route path="/VerLivro" element={<VerLivro />} />
        <Route
          path="/InserirLivro"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <InserirLivro />
            </RotaPrivada>
          }
        />

        <Route
          path="/InserirReservas"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <InserirReservas />
            </RotaPrivada>
          }
        />
        <Route path="/ReservasAtivas" element={<ReservasAtivas />} />
        <Route
          path="/EditarLivro"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <EditarLivro />
            </RotaPrivada>
          }
        />

        <Route path="/VerLivro" element={<VerLivro />} />
        <Route path="/VerReservas" element={<ReservasAtivas />} />

        <Route path="/versessoes" element={<VerSessoes />} />
        <Route path="/sessoes" element={<Sessoes />} />

        <Route
          path="/CriarAutor"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <CriarAutor />
            </RotaPrivada>
          }
        />
        <Route path="/VerAutor" element={<VerAutor />} />

        <Route
          path="/editarautor/:id"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador", "professor"]}>
              <EditarAutor />
            </RotaPrivada>
          }
        />

        <Route
          path="/VerAvaliacao"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador"]}>
              <VerAvaliacoes />
            </RotaPrivada>
          }
        />

        <Route path="/VerFichas" element={<VerFichas />} />
        <Route
          path="/InserirFicha"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador"]}>
              <InserirFicha />
            </RotaPrivada>
          }
        />

        <Route path="/VerUmaFicha" element={<VerUnicaFicha />} />

        <Route
          path="/veremprestimo"
          element={
            <RotaPrivada nivelDeAcesso={["coordenador"]}>
              <VerEmprestimo />
            </RotaPrivada>
          }
        />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        {/* < Route path='/VerUmLivro' element={<VerUmLivro />} />  */}

        <Route path="/livroUnico/:id" element={<VizualizarLivroUnico />} />
        <Route path="/minhasreservas" element={<MinhasReservas />} />

        <Route path="/noticias" element={<PaginaInicial />} />

        <Route path="/noticiascompleta" element={<NoticiasCompleta />} />

        <Route path="/noticias/:id" element={<UmaNoticia />} />

        <Route path="/noticias/criar" element={<CriarNoticia />} />

        <Route path="/NavegacaoADM" element={<NavegacaoADM />} />

        {/* < RotaPrivada path='/noticias/criar' element={<CriarNoticia />} /> */}

        <Route path="/reservas/:id_reserva" element={<ReservaFeita />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

{
  /* 
            



<Route path="/StatusLivro" element={<StatusLivro />} />












<Route path='/VerLivro' element={<VerLivro />} />








< Route path='/versessoes' element={<VerSessoes />} />
















{/* < Route path='/VerUmLivro' element={<VerUmLivro />} />  */
}
