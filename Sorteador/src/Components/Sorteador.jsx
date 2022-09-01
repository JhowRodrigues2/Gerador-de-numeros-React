import React from "react";
import { useState } from "react";
import "./Sorteador.css";

export default () => {
  const [numeros, setNum] = useState([]);
  const [minimo, setMin] = useState(0);
  const [maximo, setMax] = useState(0);
  function gerarNumeros() {
    const novoArray = Array([])
      .fill(0)
      .reduce((a) => [...a, gerarSemRepetir(a)], [])
      .sort((a, b) => a - b);

    setNum([novoArray]);
  }

  function gerarSemRepetir(array) {
    //gera o número aleatório entre os números digitados no input
    const novoNum = parseInt(Math.random() * (maximo - minimo + 1) + minimo);
    //Se o retorno do include for true, ele irá chamar novamente o sorteio, até que nao contenha repetição e seja false o include
    return array.includes(novoNum) ? gerarSemRepetir(array) : novoNum;
  }

  return (
    <div className="container">
      <div className="main">
        <div className="topo">
          <h1>Gerador de Números</h1>
          <h3>Números Sorteados:</h3>
          <ul id="list"></ul>
        </div>
        <section>
          <div>
            <label>Valor Mínimo:</label>
            <input
              type="number"
              className="number"
              onChange={(e) => setMin(+e.target.value)}
            />
          </div>
          <div>
            <label>Valor Máximo:</label>
            <input
              type="number"
              className="number"
              onChange={(e) => setMax(+e.target.value)}
            />
          </div>
        </section>
        <h4>{numeros.join(" ")}</h4>
        <button onClick={gerarNumeros}>Gerar Números</button>
      </div>
    </div>
  );
};
