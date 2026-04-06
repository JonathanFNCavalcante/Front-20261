import './Dashboard.css';

function Dashboard() {
  return (
    <section className="dashboard">
      <h2 className="subtitle">Bem-vindo ao portal do aluno</h2>

      <article className="card">
        <header className="card-header">Mural de Avisos</header>
        <section className="card-body">
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </section>
      </article>

      <article className="card">
        <header className="card-header">Calendário Acadêmico</header>
        <section className="card-body">
          <ul>
            <li>23/02 - Início do período letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo 2026-1</li>
          </ul>
        </section>
      </article>

      <article className="card">
        <header className="card-header">Minhas Disciplinas</header>
        <section className="card-body">
          <ul>
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default Dashboard;