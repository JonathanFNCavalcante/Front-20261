import './Requerimentos.css';

function Requerimentos() {
  return (
    <section className="requerimentos">
      <h2 className="subtitle">Requerimentos</h2>

      <article className="card">
        <header className="card-header">Histórico de Solicitações</header>
        <section className="card-body">
          <ul>
            <li>Declaração de Matrícula - Concluído</li>
            <li>Revisão de Prova (Frontend) - Em análise</li>
            <li>Solicitação de Passe Escolar - Aberto</li>
          </ul>
          <button className="btn-novo">Novo Requerimento</button>
        </section>
      </article>
    </section>
  );
}

export default Requerimentos;