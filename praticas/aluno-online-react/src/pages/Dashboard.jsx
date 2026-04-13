import './Dashboard.css'; 
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

function Dashboard() {
  return (
    <section className="dashboard">
      <PageTitle title="Olá, Aluno!" subtitle="Bem-vindo ao portal do aluno" />

      <Card title="Mural de Avisos">
        <section className="card-body">
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </section>
      </Card>

      <Card title="Calendário Acadêmico">
        <section className="card-body">
          <ul>
            <li>23/02 - Início do período letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo 2026-1</li>
          </ul>
        </section>
      </Card>

      <Card title="Minhas Disciplinas">
        <section className="card-body">
          <ul>
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
          </ul>
        </section>
      </Card>
    </section>
  );
}

export default Dashboard;