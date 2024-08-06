import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <Aleatorio max={1} min={10}></Aleatorio>
        <Fragmento></Fragmento>
        <ComParametro titulo="Situação Aluno" aluno="Pedro Silva" nota={9.3}></ComParametro>
        <Primeiro></Primeiro>
    </div>
);