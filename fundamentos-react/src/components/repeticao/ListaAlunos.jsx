import React from 'react';
import Alunos from "../../data/alunos";

export default (props) => {

    const alunosLinha = Alunos.map((aluno, index) => {
        return (
            <li key={index}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        )
    })


    return (
        <div>
            <ul>
                {alunosLinha}
            </ul>
        </div>
    )
}