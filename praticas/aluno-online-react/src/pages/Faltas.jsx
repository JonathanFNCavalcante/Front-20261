import './Faltas.css';

function Faltas() {
  return (
    <section className="faltas">
      <h2 className="subtitle">Faltas</h2>

      <article className="card">
        <header className="card-header">Listagem de Faltas</header>
        <section className="card-body">
        <ul>
        <li>Nenhuma falta registrada até o momento.</li>
        </ul>
        </section>
      </article>
    </section>
  );
}

export default Faltas;