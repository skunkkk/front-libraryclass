import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

export default function Login () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function fazerLogin(){
        const dados={
            email,password

        }
        try{
            const response = await axios.post("http://127.0.0.1:8000/login",dados)

            const {access_token}=response.data 
            localStorage.setItem("token",access_token)
            console.log(response.data)
        }
                catch(erros){
                    console.log(erros)
                }
    }

    return (
        <div className='container-login'>
            <div className="Titulo">
                <h1 className="nome">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo" />
            </div>
            <div className="conteudo-login">
                <h1 className='logar'>Login</h1>
               <div className='inputs-login'>
                <div className='box-user-login'>
                    <input type="email" required onChange={(e)=>setEmail(e.target.value)}/>
                    <label>E-mail</label>
                </div>
                <div className='box-user-login'>
                    <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                    <label>Senha</label>
                </div>
                </div>
                <button type='button' className="botao-login" onClick={()=>fazerLogin()}>Entrar</button>
            </div>

        </div>
    )
}
