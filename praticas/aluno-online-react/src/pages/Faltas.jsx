import './Faltas.css';

function Faltas() {
  return (
    <section className="faltas">
      <h2 className="subtitle">Faltas</h2>

      <article className="card">
        <header className="card-header">Faltas por Disciplina</header>
        <section className="card-body">
          <ul>
            <li>Construção de Frontend: 2 faltas</li>
            <li>Banco de Dados: 0 faltas</li>
            <li>Arquitetura de Software: 4 faltas</li>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default Faltas;