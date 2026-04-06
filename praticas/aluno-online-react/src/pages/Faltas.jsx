import './Faltas.css';

function Faltas() {
  return (
    <section className="faltas">
      <h2 className="subtitle">Faltas</h2>

      <article className="card">
        <header className="card-header">Listagem de Faltas</header>
        <section className="card-body">
          <p>Nenhuma falta registrada até o momento.</p>
        </section>
      </article>
    </section>
  );
}

export default Faltas;