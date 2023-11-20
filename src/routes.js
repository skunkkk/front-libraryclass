import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Configuração from './pages/Configuração/configuração';
import Cadastro from './pages/Cadastro/Cadastro';
import Faq from './pages/FAQ/faq';
import Inicio from './pages/tela-inicial/incio';
import Perfil from './pages/meu-perfil/meu-perfil';
import StatusLivro from './pages/status-lirvro/status-livro';
import Mural from './pages/Mural/Mural';
import MenuH from './components/menu-h/MenuH';
import InicioLibrary from './pages/inicio-library/inicio-library';
import CriarEmprestimo from './pages/Emprestimo/CriarEmprestimo';
import VerEmprestimo from './pages/Emprestimo/VerEmprestimo';
import VerDevolucoes from './pages/Devolução/VerDevolucoes';
import InserirDevolucao from './pages/Devolução/InserirDevolucao';
import CriarCategoria from './pages/Categorias/CriarCategoria';
import Avaliacao from './pages/Avaliacao/CriarAvaliacao';
import VerSessoes from './pages/Sessões/VerSessoes';
import VerUmaCategoria from './pages/Categorias/VerUmaCategoria';
import EditarCategoria from './pages/Categorias/EditarCategoria';
import DeletarCategoria from './pages/Categorias/DeletarCategoria';
import CriarAvaliacoes from './pages/Avaliacao/CriarAvaliacao';
import VerAvaliacoes from './pages/Avaliacao/VerAvaliacoes';
import VerCategoriaApagar from './pages/Categorias/CriarCategoria';
import VerCategoria from './pages/Categorias/verCategoria';
import MuralADM from './pages/MuralADM/InserirMural';
import NavegacaoADM from './pages/NavegacaoADM/NavegacaoADM';
import InserirPublicacao from './pages/Publicacao/InserirPublicacao';
import VerPublicacao from './pages/Publicacao/VerPublicacao';

import InserirReservas from './pages/Reservas/InserirReservas';
import VerReservas from './pages/Reservas/VerReservas';

import InserirFicha from './pages/FichasLivros/InserirFicha';
import VerFichas from './pages/FichasLivros/VerFichas';
import VerUnicaFicha from './pages/FichasLivros/VerUnicaFicha';

import CriarAutor from './pages/Autor/CriarAutor';
import VerMural from './pages/MuralADM/VerMural';

import EditarLivro from './pages/Livro/EditarLivro';
import InserirLivro from './pages/Livro/InserirLivro';
import VerLivro from './pages/Livro/VerLivro';

import Sessoes from './pages/Sessões/Sessoes';
import NotFound from './pages/NotFound/NotFound';
import VerAutor from './pages/Autor/VerAutor';
export default function MyRoutes() {
    return (
        <BrowserRouter>
            <MenuH />

            <Routes>
            
                <Route path="/" element={<Inicio />} />
            
                <Route path="/Login" element={<Login />} />
                <Route path="/Configuracao" element={<Configuração />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/FAQ" element={<Faq />} />
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/StatusLivro" element={<StatusLivro />} />
                <Route path="/Mural" element={<Mural />} />
                <Route path="/Library" element={<InicioLibrary />} />
                <Route path="/CriarEmprestimo" element={<CriarEmprestimo />} />
                <Route path="/VerEmprestimo" element={<VerEmprestimo />} />
                <Route path="/VerDevolucoes" element={<VerDevolucoes />} />
                <Route path="/InserirDevolucao" element={<InserirDevolucao />} />
                <Route path="/CriarCategoria" element={<CriarCategoria />} />
                <Route path="/CriarAvaliacoes" element={<CriarAvaliacoes />} />
                <Route path="/VerUmaCategoria" element={<VerUmaCategoria />} />
                <Route path="/InserirCategoria" element={<VerCategoriaApagar />} />
                <Route path="/verCategoria" element={<VerCategoria />} />
                <Route path="/EditarCategoria" element={<EditarCategoria />} />
                <Route path="/DeletarCategoria" element={<DeletarCategoria />} />
                <Route path="/VerAvaliacoes" element={<VerAvaliacoes />} />
                <Route path="/MuralADM" element={<MuralADM />} />
                <Route path='/NavegacaoADM' element={<NavegacaoADM />} />
                <Route path='/VerPublicacao' element={<VerPublicacao />} />
                <Route path='/InserirPublicacao' element={<InserirPublicacao />} />
                <Route path='/VerLivro' element={<VerLivro />} />
                < Route path='/InserirReservas' element={<InserirReservas />} />
                < Route path='/VerMural' element={<VerMural />} />
                < Route path='/EditarLivro' element={<EditarLivro />} />
                < Route path='/InserirLivro' element={<InserirLivro />} />

                < Route path='/VerLivro' element={<VerLivro />} />
                < Route path='/VerReservas' element={<VerReservas />} />
                < Route path='/VerSessoes' element={<VerSessoes />} />
                < Route path='/Sessoes' element={<Sessoes />} />
                < Route path='/CriarAutor' element={<CriarAutor />} />
                < Route path='/VerAutor' element={<VerAutor />} />

                < Route path='/*' element={<NotFound />} />


            </Routes >
        </BrowserRouter >
              
    )
}
