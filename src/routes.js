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
import Sessoes from './pages/Sessões/Sessoes';

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
            </Routes>
        </BrowserRouter>
    )
}
