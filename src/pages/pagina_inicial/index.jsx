import "./index.scss";

import { Link } from "react-router-dom";

// usar chaves para importar coisas do react router

export default function App() {
  return (
    <div className="pagina-inicial pagina">
      <header className="cabecalho">
        <h1>
          Debss <i className="fa fa-star"></i>
        </h1>
      </header>

      <section className="secao">
        <h1>Estudando ReactJs</h1>
        <input type="text" />
        <br />
        <br />
        <select>
          <option>Item 1</option>
          <option>Item 2</option>
        </select>
        <br /> <br />
        <button>Clique aqui</button>
        <ul>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to='/eventos'>Eventos</Link>
          </li>
          <li>
            <Link to='/estado'>Estados</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
