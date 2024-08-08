import React from 'react'
import Produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default props => {

    const produtosLinhas = Produtos.map((produto, index) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div>
            <table id="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosLinhas}
                </tbody>
            </table>
        </div>
    )
}