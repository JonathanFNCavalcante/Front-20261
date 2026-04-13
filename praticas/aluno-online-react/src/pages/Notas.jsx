import './Notas.css';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Tabela from '../components/Tabela';

function Notas() {
  const colunas = ['Disciplina', 'A1', 'A2', 'A3', 'Menção'];
  
  const notas2026 = [
    ['BI e Data Warehousing', '', '', '', 'SR'],
    ['Construção de Frontend', '', '', '', 'SR'],
    ['Manutenção de Software e Devops', '', '', '', 'SR']
  ];

  const notas2025 = [
    ['Construção de Backend', '5.4', '6.2', '', 'MM'],
    ['Estrutura de Dados', '6.3', '6.1', '', 'MM'],
    ['Gerenciamento de Projetos', '7.4', '7.1', '', 'MS']
  ];

  return (
    <section className="notas">
      <PageTitle title="Minhas Notas" subtitle="Histórico de Notas por Semestre" />

      <Card title="2026.1">
        <Tabela headers={colunas} data={notas2026} />
      </Card>

      <Card title="2025.2">
        <Tabela headers={colunas} data={notas2025} />
      </Card>
    </section>
  );
}

export default Notas;