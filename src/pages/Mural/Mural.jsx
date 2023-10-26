import React from 'react';
import './Mural.css';
import Post from '../../components/post/post';

export default function Mural() {
    return (
        <div className='container-mural'>
            <div className='Titulo-mural'>
                <h1 className="nome-mural">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo-mural" />
            </div>
            <div className='posts'>
            <Post/>
            <Post/>            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

            

            
            

            </div>
        </div>


    )
}
