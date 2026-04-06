import './Notas.css';

function Notas() {
  return (
    <section className="notas">
      <h2 className="subtitle">Notas</h2>

      <article className="card">
        <header className="card-header">Listagem de Notas</header>
        <section className="card-body">
          <ul>
            <li>Construção de Frontend: 10.0</li>
            <li>Banco de Dados: 9.5</li>
            <li>Arquitetura de Software: 8.0</li>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default Notas;