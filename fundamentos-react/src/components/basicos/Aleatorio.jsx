import React from 'react';

export default function Aleatorio(props) {
    const {min, max} = props;
    let aleatorio = Math.ceil( Math.random() * (max - min) + min);

    return (
        <React.Fragment>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong> {aleatorio}
            </p>
        </React.Fragment>
    )
}