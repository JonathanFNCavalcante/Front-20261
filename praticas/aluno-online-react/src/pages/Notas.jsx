import './Notas.css';

function Notas() {
  return (
    <section className="notas">
      <h2 className="subtitle">Notas</h2>

      <article className="card">
        <header className="card-header">Listagem de Notas</header>
        <section className="card-body">
          <p>Nenhuma nota registrada no momento.</p>
        </section>
      </article>
    </section>
  );
}

export default Notas;