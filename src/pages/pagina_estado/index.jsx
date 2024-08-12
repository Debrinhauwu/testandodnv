import "./index.scss";
import { useState } from "react";
import { tratarNumero } from "../../utils/conversao";

import { calcularTotaldoIng } from "../../services/ingresso";

export default function VarEstado() {
  //   let contador = 0;
  const [contador, setContador] = useState(0);
  const [tituloS2, setTituloS2] = useState("oi");
  const [tituloS3, setTituloS3] = useState("escolha meu nobre");
  const [marcouOpcaoS4, setMarcouOpcaoS4] = useState(true);
  const [tituloS5, setTituloS5] = useState("oii");
  const [descricaoS5, setDescricaoS5] = useState("oii");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [res, setRes] = useState(0);


  const [qtdIng, setQtdIng] = useState (0)
  const [meioIng, setMeioIng] = useState (0)
  const [totalIng, setTotalIng] = useState (0)
  const [cupom, setCupom] = useState ('')
  


  const [novaMet, setNovaMet] = useState ('')
  const [listaMet, setListaMet] = useState ([])
  const [editando, setEditando] = useState (-1)


  


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
    let soma = tratarNumero(num1) + tratarNumero(num2);
    setRes(soma);
  }

function calcularIngre() {
  let tot = calcularTotaldoIng(qtdIng, meioIng, cupom)

  setTotalIng(tot)
}


function adicionarMeta() {

if(novaMet != "") {

if(editando == -1) {

  setListaMet([...listaMet, novaMet])
  setNovaMet('')
}
else {
  listaMet[editando] = novaMet
  setListaMet([...listaMet]);
  setNovaMet('')
  setEditando(-1)
}


}
}

function teclaApertada(e){
 if (e.key == 'Enter') {
  adicionarMeta()
 }
}

function removerMeta(pos) {
  listaMet.splice(pos, 1)
  setListaMet([...listaMet])
}

function alterarMeta(pos) {
  setNovaMet(listaMet[pos])
  setEditando(pos)
}


  return (
    <div className="pagina-varestado pagina">
      <header className="cabecalho">
        <h1>ract vava</h1>
      </header>



<div className="secao planos"> 
<h1>planos</h1>


<div className="entrada"> 
    <input type="text" placeholder="meu plano" />
    <input type="text" placeholder="situacao plano" />
    <input type="text" placeholder="cor plano" />
    <button>add plan</button>
</div>

<div className="lista">
    <div className="plano">
      <div>&nbsp;</div>
      <h1>finalizar</h1>
      <h2>andamento</h2>
    </div>
</div>


</div>























<div className="secao metas"> 
    <h1>metasss</h1>
<div>
    <input type="text" placeholder="digite" onKeyUp={teclaApertada} value={novaMet} onChange={e => setNovaMet(e.target.value)}/>
    <button onClick={adicionarMeta}>Add</button>
</div>


 {listaMet.map((item, pos) => 
   <ul>
    
     <li key={pos}> 
      <i className=" fa fa-trash-can" onClick={() => removerMeta(pos)}></i> &nbsp;
      <i className=" fa fa-pen-to-square"  onClick={() => alterarMeta(pos)} ></i> &nbsp;
      {item}</li>
   </ul>
 )}


</div>


      <div className="secao ingresso">
        <h1>Venda de ingresso</h1>
        <div className="entrada">
          <div>
            <label>quantidade: </label>
            <input type="text" value={qtdIng} onChange={e => setQtdIng(e.target.value)} />
          </div>
          <div>
            <label>meia entrada: </label>
            <input type="checkbox" checked={meioIng} onChange={e => setMeioIng(e.target.checked)} />
          </div>
          <div>
            <label>cupom: </label>
            <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} />
          </div>

          <hr />
          <div>O total {totalIng}</div>
        </div>
        <button onClick={calcularIngre}>Calc</button>
      </div>

      <div className="secao calculadora">
        <h1>Calculadora</h1>
        <div className="entrada">
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <div> = </div>
          <div className="res"> {res} </div>
        </div>
        <button onClick={somar}>Somar</button>
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
        <h1>Programar e legar {marcouOpcaoS4 ? "sim" : "não"}</h1>
        <input
          type="checkbox"
          checked={marcouOpcaoS4}
          onChange={(e) => setMarcouOpcaoS4(e.target.checked)}
        />{" "}
        programacaaoso
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
