import "./index.scss";

export default function Eventos() {

  function clicou() {
    alert ('Oii, clicou!')
  }

  function movimentouMouse() {
    alert ('Passou aqui')
  }

  function alterou(e) {
    let novoValor = e.target.value;
    alert ('O usuario alterou o valor do input! O usuario alterou para ' +  novoValor)
  }

  function alterouCheck(e) {
    let novoValor = e.target.checked;
    alert ('O usuario alterou o valor do input [checkbox/radio]! O usuario alterou para ' +  novoValor)
  }

  return (
    <div className="pagina-eventos pagina">
      <header className="cabecalho">
        <h1>ReactJs Eventos</h1>
      </header>

      <section className="secao">
        <h1>Entendendo eventos</h1>
        <p onMouseMove={movimentouMouse}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eius
          repellendus eaque dolorem tempora quis eveniet. Iusto cumque tenetur
          asperiores sint earum ea, in, odio perferendis voluptate minima
          debitis vero!
        </p>

        <input onChange={alterou} type="text" placeholder="digite aqui" />


        <select>
          <option>Selecione</option>
          <option>Item A</option>
          <option>Item B</option>
        </select>

        <div className="grupo">
          <input type="checkbox" onChange={alterouCheck}/> Opção 1
          <input type="checkbox" /> Opção 2
        </div>

        <div className="grupo">
          <input type="radio" name="gpo" /> Opção 3
          <input type="radio" name="gpo" /> Opção 4
        </div>

        <button onClick={clicou}> Clique aqui </button>
      </section>
    </div>
  );
}
