import './Requerimentos.css';

function Requerimentos() {
  return (
    <section className="requerimentos">
      <h2 className="subtitle">Requerimentos</h2>

      <article className="card">
        <header className="card-header">Meus Requerimentos</header>
        <section className="card-body">
          <button className="btn-novo">Novo Requerimento</button>
        </section>
      </article>
    </section>
  );
}

export default Requerimentos;