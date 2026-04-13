import './Requerimentos.css'; // Esse terá CSS para o botão!
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

function Requerimentos() {
  return (
    <section className="requerimentos">
      <PageTitle title="Meus Requerimentos" subtitle="Faça solicitações online para a secretaria" />

      <Card title="Situação dos Requerimentos">
        <table className="card-table">
          <thead>
            <tr>
              <th>Tipo de Requerimento</th>
              <th>Data de Solicitação</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Revisão de Menção</td><td>15/12/2025</td><td>Indeferido</td></tr>
            <tr><td>Dispensa de Disciplina</td><td>12/06/2025</td><td>Indeferido</td></tr>
            <tr><td>Trancamento de Matrícula</td><td>05/01/2024</td><td>Deferido</td></tr>
          </tbody>
        </table>
        
        {/* O botão fica dentro do Card, abaixo da tabela */}
        <section className="card-body">
          <button className="btn-novo">Novo Requerimento</button>
        </section>
      </Card>
    </section>
  );
}

export default Requerimentos;