import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container-notfound">
       
      <div className="box1-nf">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-emoji-neutral" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5z"/>
</svg>

        Página não encontrada 
    
        <Link to={"/Mural"}><button class="button-71" role="button">Voltar ao mural</button></Link>


      </div>
      <div className="box2-nf">
        <img src={"../../../nficon.png"} alt="" />
        <h1 className="notfound">404</h1>
        <h1 className="">Not Found</h1>
      </div>
    </div>
  );
}
