import './Boletos.css';

function Boletos() {
  return (
    <section className="boletos">
      <h1 className="page-title">Meus Boletos</h1>
      <h2 className="subtitle">Histórico de Pagamentos</h2>

      <article className="card">
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
            <tr><td>19/04/2026</td><td>500,00</td><td>A Pagar</td></tr>
            <tr><td>19/05/2026</td><td>500,00</td><td>A Pagar</td></tr>
            <tr><td>19/06/2026</td><td>500,00</td><td>A Pagar</td></tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default Boletos;