import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro";

export default () => (
    <div className="App">
        <ComParametro titulo="Situação Aluno" aluno="Pedro Silva" nota={9.3}></ComParametro>
        <Primeiro></Primeiro>
    </div>
);
