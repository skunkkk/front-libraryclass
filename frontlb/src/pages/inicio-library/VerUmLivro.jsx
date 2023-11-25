import React from 'react'
import './VerUmLivro.css'
import CardResenha from '../../components/resenha/Resenha'
export default function VerUmLivro() {
    return (
        <div className='container-verumlivro'>
            <div className="titulolivro"><h1>Titulo do livro</h1></div>
            <div className="box-verumlivro">
                <div className='container-infolivro'>
                    <div className="img-livro">Imagem</div>
                    <div className="sinopse">sinopse</div>

                </div>
                <div className="botao-reservar">
                    <button className='btnreservar'>Reservar</button>
                </div>
            </div>
            <div className="container-resenhas">
                <h1>Resenhas</h1>
                
                <CardResenha/>
                <CardResenha/>
                <CardResenha/>
             </div>
        </div>
    )
}
