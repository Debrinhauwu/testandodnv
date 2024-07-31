import "./index.scss";

export default function Eventos() {
  return (
    <div className="pagina-eventos pagina">
      <header className="cabecalho">
        <h1>ReactJs Eventos</h1>
      </header>

      <section className="secao">
        <h1>Entendendo eventos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eius
          repellendus eaque dolorem tempora quis eveniet. Iusto cumque tenetur
          asperiores sint earum ea, in, odio perferendis voluptate minima
          debitis vero!
        </p>

        <input type="text" placeholder="digite aqui" />

        <select>
          <option>Selecione</option>
          <option>Item A</option>
          <option>Item B</option>
        </select>

        <div>
          <input type="checkbox" /> Opção 1
          <input type="checkbox" /> Opção 2
        </div>

        <div>
          <input type="radio" /> Opção 3
          <input type="radio" /> Opção 4
        </div>

        <button> Clique aqui </button>
      </section>
    </div>
  );
}
