import React from 'react';

const EmprestimoCard = ({ id_reserva,nome_retirante, nome_livro, data_entrega }) => {

    return (
        <div className="card p-6 mb-2" style={{ width: '100%' }}>
            <div >
            </div>
            <div className="card-body d-flex align-items-center">
                <div className="flex-shrink-0 mr-3">
                    <div><strong>Id reserva:</strong></div>
                    <div><strong>Nome Retirante:</strong></div>
                    <div><strong>Nome Livro:</strong></div>
                    <div><strong>Data Entrega:</strong></div>
                </div>
                <div className="mr-3 flex-grow-1" style={{ paddingLeft: 10 }}>
                    <div>{id_reserva}</div>
                    <div>{nome_retirante}</div>
                    <div>{nome_livro}</div>
                    <div>{data_entrega}</div>
                </div>
                <div >
                    <button className="btn btn-primary px-4 py-2">Devolver Livro</button>
                </div>
            </div>
            <hr className="m-0" />
        </div>
    );
};

export default EmprestimoCard;
