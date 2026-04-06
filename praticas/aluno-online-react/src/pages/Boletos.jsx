import './Boletos.css';

function Boletos() {
  return (
    <section className="boletos">
      <h2 className="subtitle">Financeiro</h2>

      <article className="card">
        <header className="card-header">Status de Pagamentos</header>
        <section className="card-body">
          <ul>
            <li>Mensalidade - Janeiro: Pago</li>
            <li>Mensalidade - Fevereiro: Pago</li>
            <li>Mensalidade - Março: Disponível para pagamento</li>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default Boletos;