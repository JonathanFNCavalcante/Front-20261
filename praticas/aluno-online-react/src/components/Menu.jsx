import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Notas</a></li>
        <li><a href="#">Faltas</a></li>
        <li><a href="#">Boletos</a></li>
        <li><a href="#">Requerimentos</a></li>
        <li><a href="#">Sair</a></li>
      </ul>
    </nav>
  );
}

export default Menu;