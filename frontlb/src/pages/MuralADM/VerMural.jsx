import React from 'react'
import { Link } from 'react-router-dom'

export default function VerMural() {
  return (
    <div className='container-muraladm'>
         <div className='navbar'>
         <Link to={'/MuralADM'}> <p>Inserir no mural</p></Link>
        <p>Ver murais</p>
        <Link to={'/NavegacaoADM'}><p>Voltar</p></Link>
      </div>
      <div className="box1">
        <div className='box-msgmurais'>
            
            <div className="msgmural">
                
            </div>
            <div className="msgmural">
                
            </div>
            <div className="msgmural">
                
            </div>
            <div className="msgmural">
                
            </div>
            <div className="msgmural">
                
            </div>
        </div>
      </div>
    </div>
  )
}
