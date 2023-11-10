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
<<<<<<< HEAD
import CriarEmprestimo from './pages/Emprestimo/CriarEmprestimo';
import VerEmprestimo from './pages/Emprestimo/VerEmprestimo';
import VerDevolucoes from './pages/Devolução/VerDevolucoes';
import InserirDevolucao from './pages/Devolução/InserirDevolucao';

import VerCategoriaApagar from './pages/Categorias/VerCategoria';
import Avaliacao from './pages/Avaliacao/Avaliacao';

=======
import Sessoes from './pages/Sessões/Sessoes';
>>>>>>> 2cb3aa2c21787bc4ef6ab99d040bd3a68c07c888

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <MenuH />

            <Routes>
                
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
                <Route path="/VerCategoriaApagar" element={<VerCategoriaApagar />} />
                <Route path="/Avaliacoes" element={<Avaliacao />} />
       
            </Routes>
        </BrowserRouter>
    )
}
