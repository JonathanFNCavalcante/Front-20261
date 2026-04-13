import './Notas.css';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

function Notas() {
  return (
    <section className="notas">
      <PageTitle title="Minhas Notas" subtitle="Histórico de Notas por Semestre" />

      <Card title="2026.1">
        <table className="card-table">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>A1</th>
              <th>A2</th>
              <th>A3</th>
              <th>Menção</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>BI e Data Warehousing</td><td></td><td></td><td></td><td>SR</td></tr>
            <tr><td>Construção de Frontend</td><td></td><td></td><td></td><td>SR</td></tr>
            <tr><td>Manutenção de Software e Devops</td><td></td><td></td><td></td><td>SR</td></tr>
          </tbody>
        </table>
      </Card>

      <Card title="2025.2">
        <table className="card-table">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>A1</th>
              <th>A2</th>
              <th>A3</th>
              <th>Menção</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Construção de Backend</td><td>5.4</td><td>6.2</td><td></td><td>MM</td></tr>
            <tr><td>Estrutura de Dados</td><td>6.3</td><td>6.1</td><td></td><td>MM</td></tr>
            <tr><td>Gerenciamento de Projetos</td><td>7.4</td><td>7.1</td><td></td><td>MS</td></tr>
          </tbody>
        </table>
      </Card>
    </section>
  );
}

export default Notas;