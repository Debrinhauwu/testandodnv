import "./index.scss";
import { useState } from "react";
import { tratarNumero } from "../../utils/conversao";

export default function VarEstado() {
  //   let contador = 0;
  const [contador, setContador] = useState(0);
  const [tituloS2, setTituloS2] = useState("oi");
  const [tituloS3, setTituloS3] = useState("escolha meu nobre");
  const [marcouOpcaoS4, setMarcouOpcaoS4] = useState(true);
  const [tituloS5, setTituloS5] = useState("oii");
  const [descricaoS5, setDescricaoS5] = useState("oii");

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const [res, setRes] = useState(0)

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  // function alterarDescricaoS5(e) {
  //     let novoValor = e.target.value;
  //     setDescricaoS5(novoValor)
  // }

function somar() {
    let soma = tratarNumero(num1) + tratarNumero(num2)
    setRes(soma)
}
  

  return (
    <div className="pagina-varestado pagina">
      <header className="cabecalho">
        <h1>ract vava</h1>
      </header>

<div className="secao calculadora">
    <h1>Calculadora</h1>
    <div className="entrada">
    <input type="text" value={num1} onChange={e => setNum1(e.target.value)} />
    <input type="text" value={num2} onChange={e => setNum2(e.target.value)} />
    <div> = </div>
    <div className="res"> {res} </div>
    </div>
    <button onClick={somar} >Somar</button>
</div>

      <div className="secao">
        <h1>contador</h1>

        <div className="conta">
          <button onClick={aumentar}>+</button>
          {contador}
          <button onClick={diminuir}>-</button>
        </div>
      </div>

      <div className="secao">
        <h1>{tituloS2}</h1>
        <input
          type="text"
          value={tituloS2}
          onChange={(e) => setTituloS2(e.target.value)}
        />
      </div>

      <div className="secao">
        <h1>{tituloS3}</h1>
        <select onChange={(e) => setTituloS3(e.target.value)}>
          <option>selecionee</option>
          <option>Rato1</option>
          <option>Rato2</option>
          <option>Rato3</option>
        </select>
      </div>

      <div className="secao">
        <h1>Programar e legar  {marcouOpcaoS4 ? "sim" : "não"}</h1>
        <input
          type="checkbox"
          checked={marcouOpcaoS4}
          onChange={(e) => setMarcouOpcaoS4(e.target.checked)}
        /> programacaaoso
      </div>

      <div className="secao">
        <h1>{tituloS5}</h1>
        <input
          type="text"
          value={descricaoS5}
          onChange={(e) => setDescricaoS5(e.target.value)}
        />
        <button onClick={() => setTituloS5(descricaoS5)}>altere</button>
      </div>
    </div>
  );
}
