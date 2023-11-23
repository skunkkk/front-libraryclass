import React from 'react'
import './post.css'
export default function post({titulo, mensagem, cargo}) {
  return (
  <div className='post'>
    <div className="post-titulo">{titulo}</div>
    <div className="post-mensagem"> {mensagem}</div>
    <div className="post-cargo">{cargo}</div>
  
  </div>
  
  )
}
