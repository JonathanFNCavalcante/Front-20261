import './Dashboard.css';

function Dashboard() {
  return (
    <section className="dashboard">
      <h2 className="subtitle">Bem-vindo ao portal do aluno</h2>

      <article className="card">
        <header className="card-header">Mural de Avisos</header>
        <section className="card-body">
          <p>Inscrição para o projeto de extensão</p>
          <p>Eleição para representante de turma</p>
        </section>
      </article>

      <article className="card">
        <header className="card-header">Calendário Acadêmico</header>
        <section className="card-body">
          <p>23/02 - Início do período letivo 2026-1</p>
          <p>25/04 - Prazo final para aplicação da P1</p>
          <p>23/06 - Prazo final para aplicação da P2</p>
          <p>04/07 - Fim do período letivo 2026-1</p>
        </section>
      </article>

      <article className="card">
        <header className="card-header">Minhas Disciplinas</header>
        <section className="card-body">
          <p>BI e Data Warehousing</p>
          <p>Construção de Frontend</p>
        </section>
      </article>
    </section>
  );
}

export default Dashboard;