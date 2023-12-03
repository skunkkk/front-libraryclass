import React from "react";
import "./Navbar.css";
import Logo from "./LogoEscola.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faNewspaper,
  faBook,
  faCalendar,
  faEye,
  faPlus,
  faArrowAltCircleLeft,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Calendario from "./Cal.pdf";

import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  let conteudoNav;
  const navigate=useNavigate();
  const token = localStorage.getItem("authData");


  function logout(){
    localStorage.clear();
    navigate('/');
  }

  switch (location.pathname) {
    case "/CriarAutor":
      conteudoNav = (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/VerAutor"}>
                <FontAwesomeIcon icon={faEye} /> Ver Autor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/CriarAutor"}>
                <FontAwesomeIcon icon={faPlus} /> Criar Autor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/NavegacaoADM"}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
              </Link>
            </li>
          </ul>
        </>
      );
      break;

    case "/sessoes":
      conteudoNav = (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/versessoes"}>
                <FontAwesomeIcon icon={faEye} /> Ver Sessão
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/sessoes"}>
                <FontAwesomeIcon icon={faPlus} /> Criar Sessão
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/NavegacaoADM"}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
              </Link>
            </li>
          </ul>
        </>
      );
      break;
    case "/InserirReservas":
      conteudoNav = (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/VerReservas"}>
                <FontAwesomeIcon icon={faEye} /> Ver Reservas Ativas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/InserirReservas"}>
                <FontAwesomeIcon icon={faPlus} /> Ver Reservas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/NavegacaoADM"}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
              </Link>
            </li>
          </ul>
        </>
      );
      break;
    case "/VerReservas":
      conteudoNav = (
        <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to={"/VerReservas"}>
                <FontAwesomeIcon icon={faEye} /> Ver Reservas Ativas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/InserirReservas"}>
                <FontAwesomeIcon icon={faPlus} /> Ver Reservas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/NavegacaoADM"}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
              </Link>
            </li>
          </ul>
        </>
      );
      break;
      case "/VerAutor":
        conteudoNav = (
          <>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to={"/VerAutor"}>
                  <FontAwesomeIcon icon={faEye} /> Ver Autor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/CriarAutor"}>
                  <FontAwesomeIcon icon={faPlus} /> Criar Autor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/editarautor/:id"}>
                  <FontAwesomeIcon icon={faPenToSquare} /> Editar Autor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/NavegacaoADM"}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                </Link>
              </li>
            
            </ul>
          </>
        );
        break;

        case "/editarautor/:id":
          conteudoNav = (
            <>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/VerAutor"}>
                    <FontAwesomeIcon icon={faEye} /> Ver Autor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/editarautor/:id"}>
                    <FontAwesomeIcon icon={faPenToSquare} /> Editar Autor
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/CriarAutor"}>
                  <FontAwesomeIcon icon={faPlus} /> Criar Autor
                </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/NavegacaoADM"}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                  </Link>
                </li>
              </ul>
            </>
          );
          break;

          case "/VerAvaliacao":
            conteudoNav = (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/VerAvaliacao"}>
                      <FontAwesomeIcon icon={faEye} /> Ver Avaliação
                    </Link>
                  </li>
        
                  <li className="nav-item">
                  <Link className="nav-link" to={"/CriarAvaliacoes"}>
                    <FontAwesomeIcon icon={faPlus} /> Criar Avaliação
                  </Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/NavegacaoADM"}>
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                    </Link>
                  </li>
                </ul>
              </>
            );
            break;

            case "/CriarAvaliacoes":
              conteudoNav = (
                <>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/VerAvaliacao"}>
                        <FontAwesomeIcon icon={faEye} /> Ver Avaliação
                      </Link>
                    </li>
                  
                    <li className="nav-item">
                    <Link className="nav-link active" to={"CriarAvaliacoes"}>
                      <FontAwesomeIcon icon={faPlus} /> Criar Avaliação
                    </Link>
                  </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/NavegacaoADM"}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                      </Link>
                    </li>
                  </ul>
                </>
              );
              break;

              case "/verCategoria":
            conteudoNav = (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/verCategoria"}>
                      <FontAwesomeIcon icon={faEye} /> Ver Categoria
                    </Link>
                  </li>
        
                  <li className="nav-item">
                  <Link className="nav-link" to={"/CriarCategoria"}>
                    <FontAwesomeIcon icon={faPlus} /> Criar Categoria
                  </Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/NavegacaoADM"}>
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                    </Link>
                  </li>
                </ul>
              </>
            );
            break;

            case "/CriarCategoria":
            conteudoNav = (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link " to={"/verCategoria"}>
                      <FontAwesomeIcon icon={faEye} /> Ver Categoria
                    </Link>
                  </li>
        
                  <li className="nav-item">
                  <Link className="nav-link active" to={"/CriarCategoria"}>
                    <FontAwesomeIcon icon={faPlus} /> Criar Categoria
                  </Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/NavegacaoADM"}>
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                    </Link>
                  </li>
                </ul>
              </>
            );
            break;

            case "/EditarCategoria":
              conteudoNav = (
                <>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/verCategoria"}>
                        <FontAwesomeIcon icon={faEye} /> Ver Categoria
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to={"/editarcategoria"}>
                        <FontAwesomeIcon icon={faPenToSquare} /> Editar Categoria
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"/CriarCategoria"}>
                      <FontAwesomeIcon icon={faPlus} /> Criar Categoria
                    </Link>
                  </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/NavegacaoADM"}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                      </Link>
                    </li>
                  </ul>
                </>
              );
              break;

              case "/VerDevolucoes":
                conteudoNav = (
                  <>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active" to={"/VerDevolucoes"}>
                          <FontAwesomeIcon icon={faEye} /> Ver Devoluções
                        </Link>
                      </li>
                     
                      <li className="nav-item">
                      <Link className="nav-link" to={"/InserirDevolucao"}>
                        <FontAwesomeIcon icon={faPlus} /> Criar Devolução
                      </Link>
                    </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/NavegacaoADM"}>
                          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                        </Link>
                      </li>
                    </ul>
                  </>
                );
                break;

                case "/InserirDevolucao":
                  conteudoNav = (
                    <>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to={"/VerDevolucoes"}>
                            <FontAwesomeIcon icon={faEye} /> Ver Devoluções
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                        <Link className="nav-link active" to={"/InserirDevolucao"}>
                          <FontAwesomeIcon icon={faPlus} /> Criar Devolução
                        </Link>
                      </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/NavegacaoADM"}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                          </Link>
                        </li>
                      </ul>
                    </>
                  );
                  break;

                  
              case "/VerFichas":
                conteudoNav = (
                  <>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active" to={"/VerFichas"}>
                          <FontAwesomeIcon icon={faEye} /> Ver Fichas
                        </Link>
                      </li>
            
                      <li className="nav-item">
                      <Link className="nav-link" to={"/InserirFicha"}>
                        <FontAwesomeIcon icon={faPlus} /> Criar Fichas
                      </Link>
                    </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/NavegacaoADM"}>
                          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                        </Link>
                      </li>
                    </ul>
                  </>
                );
                break;

               
              case "/InserirFicha":
                conteudoNav = (
                  <>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/VerFichas"}>
                          <FontAwesomeIcon icon={faEye} /> Ver Fichas
                        </Link>
                      </li>
            
                      <li className="nav-item">
                      <Link className="nav-link active" to={"/InserirFicha"}>
                        <FontAwesomeIcon icon={faPlus} /> Criar Fichas
                      </Link>
                    </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/NavegacaoADM"}>
                          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                        </Link>
                      </li>
                    </ul>
                  </>
                );
                break;

                case "/VerUmaFicha":
                conteudoNav = (
                  <>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active" to={"/VerUmaFicha"}>
                          <FontAwesomeIcon icon={faEye} /> Ver Ficha
                        </Link>
                      </li>
            
                      <li className="nav-item">
                      <Link className="nav-link" to={"/InserirFicha"}>
                        <FontAwesomeIcon icon={faPlus} /> Criar Ficha
                      </Link>
                    </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/NavegacaoADM"}>
                          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                        </Link>
                      </li>
                    </ul>
                  </>
                );
                break;

                case "/InserirLivro":
              conteudoNav = (
                <>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/VerLivro"}>
                        <FontAwesomeIcon icon={faEye} /> Ver Livro
                      </Link>
                    </li>
                
                    <li className="nav-item">
                    <Link className="nav-link active" to={"/InserirLivro"}>
                      <FontAwesomeIcon icon={faPlus} /> Criar Livro
                    </Link>
                  </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/NavegacaoADM"}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                      </Link>
                    </li>
                  </ul>
                </>
              );
              break;

             
              case "/VerLivro":
            conteudoNav = (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/VerLivro"}>
                      <FontAwesomeIcon icon={faEye} /> Ver Livro
                    </Link>
                  </li>
        
                  <li className="nav-item">
                  <Link className="nav-link" to={"/InserirLivro"}>
                    <FontAwesomeIcon icon={faPlus} /> Criar Livro
                  </Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/NavegacaoADM"}>
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                    </Link>
                  </li>
                </ul>
              </>
            );
            break; 

            
            case "/MuralADM":
              conteudoNav = (
                <>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" to={"/verCategoria"}>
                        <FontAwesomeIcon icon={faEye} /> Ver Categoria
                      </Link>
                    </li>
          
                    <li className="nav-item">
                    <Link className="nav-link" to={"/CriarCategoria"}>
                      <FontAwesomeIcon icon={faPlus} /> Criar Categoria
                    </Link>
                  </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/NavegacaoADM"}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                      </Link>
                    </li>
                  </ul>
                </>
              );
              break;

              case "/noticias/criar":
                conteudoNav = (
                  <>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link " to={"/noticias"}>
                          <FontAwesomeIcon icon={faEye} /> Ver Noticia
                        </Link>
                      </li>
            
                      <li className="nav-item">
                      <Link className="nav-link active" to={"/noticias/criar"}>
                        <FontAwesomeIcon icon={faPlus} /> Criar Noticia
                      </Link>
                    </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/NavegacaoADM"}>
                          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                        </Link>
                      </li>
                    </ul>
                  </>
                );
                break;

                case "/noticias":
                  conteudoNav = (
                    <>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link active" to={"/noticias"}>
                            <FontAwesomeIcon icon={faEye} /> Ver Noticia
                          </Link>
                        </li>
              
                        <li className="nav-item">
                        <Link className="nav-link" to={"/noticias/criar"}>
                          <FontAwesomeIcon icon={faPlus} /> Criar Noticia
                        </Link>
                      </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/NavegacaoADM"}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                          </Link>
                        </li>
                      </ul>
                    </>
                  );
                  break;

                  case "/VerPublicacao":
                    conteudoNav = (
                      <>
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link active" to={"/VerPublicacao"}>
                              <FontAwesomeIcon icon={faEye} /> Ver Publicação
                            </Link>
                          </li>
                
                          <li className="nav-item">
                          <Link className="nav-link" to={"/InserirPublicacao"}>
                            <FontAwesomeIcon icon={faPlus} /> Criar Publicação
                          </Link>
                        </li>
                          <li className="nav-item">
                            <Link className="nav-link" to={"/NavegacaoADM"}>
                              <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                            </Link>
                          </li>
                        </ul>
                      </>
                    );
                    break;

                    case "/InserirPublicacao":
                    conteudoNav = (
                      <>
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link" to={"/VerPublicacao"}>
                              <FontAwesomeIcon icon={faEye} /> Ver Publicação
                            </Link>
                          </li>
                
                          <li className="nav-item">
                          <Link className="nav-link active" to={"/InserirPublicacao"}>
                            <FontAwesomeIcon icon={faPlus} /> Criar Publicação
                          </Link>
                        </li>
                          <li className="nav-item">
                            <Link className="nav-link" to={"/NavegacaoADM"}>
                              <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                            </Link>
                          </li>
                        </ul>
                      </>
                    );
                    break;

                    case "/minhasreservas":
                      conteudoNav = (
                        <>
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link className="nav-link active" to={"/minhasreservas"}>
                                <FontAwesomeIcon icon={faEye} /> Minhas Reservas
                              </Link>
                            </li>
                  

                            <li className="nav-item">
                              <Link className="nav-link" to={"/NavegacaoADM"}>
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                              </Link>
                            </li>
                          </ul>
                        </>
                      );
                      break;

                      case "/ReservasAtivas":
                      conteudoNav = (
                        <>
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link className="nav-link active" to={"/ReservasAtivas"}>
                                <FontAwesomeIcon icon={faEye} />  Reservas Ativas
                              </Link>
                            </li>
                  

                            <li className="nav-item">
                              <Link className="nav-link" to={"/NavegacaoADM"}>
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                              </Link>
                            </li>
                          </ul>
                        </>
                      );
                      break;

                      case "/InserirPublicacao":
                        conteudoNav = (
                          <>
                            <ul className="navbar-nav">
                              <li className="nav-item">
                                <Link className="nav-link" to={"/VerPublicacao"}>
                                  <FontAwesomeIcon icon={faEye} /> Ver Publicação
                                </Link>
                              </li>
                    
                              <li className="nav-item">
                              <Link className="nav-link active" to={"/InserirPublicacao"}>
                                <FontAwesomeIcon icon={faPlus} /> Criar Publicação
                              </Link>
                            </li>
                              <li className="nav-item">
                                <Link className="nav-link" to={"/NavegacaoADM"}>
                                  <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                                </Link>
                              </li>
                            </ul>
                          </>
                        );
                        break;

                        case "/versessoes":
                          conteudoNav = (
                            <>
                              <ul className="navbar-nav">
                                <li className="nav-item">
                                  <Link className="nav-link active" to={"/versessoes"}>
                                    <FontAwesomeIcon icon={faEye} /> Ver Sessões
                                  </Link>
                                </li>
                                <li className="nav-item">
                              <Link className="nav-link" to={"/sessoes"}>
                                <FontAwesomeIcon icon={faPlus} /> Criar Sessão
                              </Link>
                            </li>
                      
    
                                <li className="nav-item">
                                  <Link className="nav-link" to={"/NavegacaoADM"}>
                                    <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Voltar
                                  </Link>
                                </li>
                              </ul>
                            </>
                          );
                          break;
  




              



              
    
  
    default:
      conteudoNav = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to={'/'}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/noticiascompleta'}>
              <FontAwesomeIcon icon={faNewspaper} /> Noticias
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/Library'}>
              <FontAwesomeIcon icon={faBook} /> LibraryClassApp
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" download href={Calendario}>
              <FontAwesomeIcon icon={faCalendar} /> Calendario
            </a>
          </li>
        </ul>
      );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          {" "}
          <img
            src={Logo}
            alt="Your Company"
            height="30"
            className="d-inline-block align-top"
          />
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {conteudoNav}
          {token ? <button className="btn btn-custom-logout" onClick={()=>logout()}>Sair</button> :<Link to="/areausuario" className="btn btn-custom">Área do Usuário</Link>}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
