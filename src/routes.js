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
import Sessoes from './pages/Sessões/Sessoes';
import VerSessoes from './pages/Sessões/VerSessoes';
import VerUmaCategoria from './pages/Categorias/VerUmaCategoria';
import EditarCategoria from './pages/Categorias/EditarCategoria';
import DeletarCategoria from './pages/Categorias/DeletarCategoria';
import CriarAvaliacoes from './pages/Avaliacao/CriarAvaliacao';
import VerAvaliacoes from './pages/Avaliacao/VerAvaliacoes';
import VerCategoriaApagar from './pages/Categorias/CriarCategoria';
import VerCategoria from './pages/Categorias/verCategoria';
import MuralADM from './pages/MuralADM/InserirMural';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <MenuH />

            <Routes>
                <Route path='/verSessoes' element={<VerSessoes />}/>
                <Route path="/" element={<Inicio />} />
                <Route path='/sessoes' element={<Sessoes />}/>
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
                <Route path="/CriarCategoria    " element={<CriarCategoria />} />
                <Route path="/CriarAvaliacoes" element={<CriarAvaliacoes/>} />
                <Route path="/VerUmaCategoria" element={<VerUmaCategoria />}/>
                <Route path="/InserirCategoria" element={<VerCategoriaApagar />}/>
                <Route path="/verCategoria" element={<VerCategoria />}/>
                <Route path="/EditarCategoria" element={<EditarCategoria />}/>
                <Route path="/DeletarCategoria" element={<DeletarCategoria />}/>
                <Route path="/VerAvaliacoes" element={<VerAvaliacoes />}/>
                <Route path="/MuralADM" element={<MuralADM />}/>
            </Routes>
        </BrowserRouter>
    )
}
