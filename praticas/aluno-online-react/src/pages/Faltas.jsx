import './Faltas.css';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Tabela from '../components/Tabela';

function Faltas() {
  const colunas = ['Disciplina', 'Total de Faltas', '% de Presença'];
  
  const faltas2026 = [
    ['BI e Data Warehousing', '0', '100%'],
    ['Construção de Frontend', '0', '100%'],
    ['Manutenção de Software e Devops', '0', '100%']
  ];

  const faltas2025 = [
    ['Construção de Backend', '27', '87.5%'],
    ['Estrutura de Dados', '9', '85%'],
    ['Gerenciamento de Projetos', '10.5', '82.5%']
  ];

  return (
    <section className="faltas">
      <PageTitle title="Minhas Faltas" subtitle="Histórico de Faltas por Semestre" />

      <Card title="2026.1">
        <Tabela headers={colunas} data={faltas2026} />
      </Card>

      <Card title="2025.2">
        <Tabela headers={colunas} data={faltas2025} />
      </Card>
    </section>
  );
}

export default Faltas;