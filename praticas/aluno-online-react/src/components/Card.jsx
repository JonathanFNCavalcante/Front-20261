import './Card.css';

function Card({ title, children }) {
  return (
    <article className="card">
      <header className="card-header">{title}</header>
      
      {/* Aqui o React renderiza o que vier "dentro" da tag Card (tabelas, listas, etc) */}
      {children}
      
    </article>
  );
}

export default Card;