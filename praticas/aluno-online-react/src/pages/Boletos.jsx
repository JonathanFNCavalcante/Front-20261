import './Boletos.css';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Tabela from '../components/Tabela';

function Boletos() {
  const colunas = ['Vencimento', 'Valor R$', 'Situação'];
  
  const historicoBoletos = [
    ['19/01/2026', '500,00', 'Pago'],
    ['19/02/2026', '500,00', 'Em atraso'],
    ['19/03/2026', '500,00', 'A Pagar']
  ];

  return (
    <section className="boletos">
      <PageTitle title="Meus Boletos" subtitle="Histórico de Pagamentos" />

      <Card title="Boletos em Aberto e Pagos">
        <Tabela headers={colunas} data={historicoBoletos} />
      </Card>
    </section>
  );
}

export default Boletos;