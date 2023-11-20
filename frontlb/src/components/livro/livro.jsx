import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./livro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Resenha from '../resenha/Resenha'
function Example() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <div className="livro" key={idx} onClick={() => handleShow(v)}>
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </div>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>A menina que colecionava borboletas</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h2 className="titulolivro">A menina que colecionava borboletas</h2>
          <img
            src="https://th.bing.com/th/id/R.ac6f0ef647311d747a6f4ebcd8939339?rik=0HvPpTvNfZoufw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-I_jGdp4dC78%2fU2vDgAzSUQI%2fAAAAAAAAC6I%2f_aPl5i811Sw%2fs1600%2fimagem.jpg&ehk=P5DsCNuzqR1izodXoGSQ5YySJllRH9I0TTvrd%2fVGHf4%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            height={300}
          />
          <p className="sumario">
            {" "}
            A menina colecionava borboletas é um livro de crônicas da escritora
            brasileira Bruna Vieira. De uma maneira simples e singela, Bruna
            escreve sobre situações que aconteceram e acontecem na sua vida, mas
            que poderia ser a de qualquer garota, inclusive em qualquer idade ou
            fase da vida. A identificação com as histórias é inevitável.
          </p>
          <Link to={"/StatusLivro"}>
            {" "}
            <button className="botao-status">Ver status do livro</button>
          </Link>

          <div className="container-resenhas">
            <div className="inserir-resenha">
              <label htmlFor="">Inserir resenhas:</label>
            </div>
            <Resenha/>   <Resenha/>         <Resenha/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
