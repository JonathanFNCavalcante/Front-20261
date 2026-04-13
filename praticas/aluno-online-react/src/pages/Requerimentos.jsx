import './Requerimentos.css';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Tabela from '../components/Tabela';

function Requerimentos() {
  const colunas = ['Tipo de Requerimento', 'Data de Solicitação', 'Situação'];
  
  const meusRequerimentos = [
    ['Revisão de Menção', '15/12/2025', 'Indeferido'],
    ['Dispensa de Disciplina', '12/06/2025', 'Indeferido'],
    ['Trancamento de Matrícula', '05/01/2024', 'Deferido']
  ];

  return (
    <section className="requerimentos">
      <PageTitle title="Meus Requerimentos" subtitle="Faça solicitações online para a secretaria" />

      <Card title="Situação dos Requerimentos">
        <Tabela headers={colunas} data={meusRequerimentos} />
        
        <section className="card-body">
          <button className="btn-novo">Novo Requerimento</button>
        </section>
      </Card>
    </section>
  );
}

export default Requerimentos;