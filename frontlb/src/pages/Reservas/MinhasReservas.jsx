import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MinhasReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [id_usuarios,setIdUsuarios]=useState(12345678);

  useEffect(() => {
    axios.get(`http://localhost:8000/minhasReservas/${id_usuarios}`) 
      .then((response) => {
        setReservas(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter reservas:', error);
      });
  }, []);
console.log(reservas)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: '#f0f0f0',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Suas Reservas</h1>
      {reservas.length === 0 ? (
        <p style={{ fontSize: '1.5em', color: '#555' }}>Você não possui reservas.</p>
      ) : (
        <div
          style={{
            width: '80%',
            background: '#fff',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {reservas.map((reserva) => (
            <div
              key={reserva.id_reservas}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                margin: '10px',
                background: '#fff',
                borderRadius: '5px',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p style={{ fontSize: '1.2em', color: '#333', marginBottom: '5px' }}>
                Reserva #{reserva.id_reservas}
              </p>
              <p style={{ fontSize: '1em', color: '#555' }}>
                Data da Reserva: {reserva.data_reservas}
              </p>
              {/* Adicione mais informações conforme necessário */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MinhasReservas;
