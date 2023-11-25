import React from 'react';

const EmprestimoCard = () => {
    const emprestimo = {
        nome_retirante: 'João Silva',
        nome_livro: 'Aventuras no Espaço',
        data_entrega: '2023-12-01', 
    };

    return (
        <div className="card p-6 mb-2" style={{width:'50%'}}>
            <div >
            </div>
            <div className="card-body d-flex align-items-center">
                <div className="flex-shrink-0 mr-3">
                    <div><strong>Nome Retirante:</strong></div>
                    <div><strong>Nome Livro:</strong></div>
                    <div><strong>Data Entrega:</strong></div>
                </div>
                <div className="mr-3 flex-grow-1"> 
                    <div>{emprestimo.nome_retirante}</div>
                    <div>{emprestimo.nome_livro}</div>
                    <div>{emprestimo.data_entrega}</div>
                </div>
                <div style={{paddingLeft:20}}>
                    <button className="btn btn-primary px-4 py-2">Devolver Livro</button>
                </div>
            </div>
            <hr className="m-0" />
        </div>
    );
};

export default EmprestimoCard;
