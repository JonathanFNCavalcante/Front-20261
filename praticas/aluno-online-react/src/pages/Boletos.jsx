import './Boletos.css';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

function Boletos() {
  return (
    <section className="boletos">
      <PageTitle title="Meus Boletos" subtitle="Histórico de Pagamentos" />

      <Card title="Boletos em Aberto e Pagos">
        <table className="card-table">
          <thead>
            <tr>
              <th>Vencimento</th>
              <th>Valor R$</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>19/01/2026</td><td>500,00</td><td>Pago</td></tr>
            <tr><td>19/02/2026</td><td>500,00</td><td>Em atraso</td></tr>
            <tr><td>19/03/2026</td><td>500,00</td><td>A Pagar</td></tr>
          </tbody>
        </table>
      </Card>
    </section>
  );
}

export default Boletos;