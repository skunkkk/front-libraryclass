import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>404 - Página não encontrada</h1>
        <p style={styles.paragraph}>
          Parece que você tentou acessar uma página que não existe.
        </p>
        <br />
        <br />
        <br />
        <Link to="/" style={styles.link}>
          Voltar à página inicial
        </Link>
      </div>
      <div style={styles.imageContainer}>
        {/* Coloque sua imagem grande aqui */}
        <img
          src="caminho/para/sua/imagem.jpg"
          alt="Imagem Grande"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  textContainer: {
    flex: '70%',
    padding: '40px',
  },
  imageContainer: {
    flex: '30%',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '2em',
  },
  paragraph: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  link: {
    display: 'block',
    fontSize: '1.2em',
    textDecoration: 'none',
    color: '#007BFF',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default NotFound;