import React from 'react';
import { useParams } from 'react-router-dom';

const ReservaFeita = () => {
  const { id_reserva } = useParams();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0', 
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3em',
            marginBottom: '20px',
            color: '#007bff', 
          }}
        >
          Reserva Realizada com Sucesso!
        </h1>
        <p
          style={{
            fontSize: '1.5em',
            color: '#333',
          }}
        >
          Sua reserva foi feita com o número:
        </p>
        <div
          style={{
            fontSize: '5em',
            fontWeight: 'bold',
            color: '#007bff', 
            marginBottom: '20px',
          }}
        >
          {id_reserva}
        </div>
        <p
          style={{
            fontSize: '1.2em',
            color: '#555', 
          }}
        >
          Guarde este número para referência futura.
        </p>
      </div>
    </div>
  );
};

export default ReservaFeita;
