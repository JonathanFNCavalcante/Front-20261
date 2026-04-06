import './Sidebar.css';
import learnIcon from '../assets/learn.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src={learnIcon} alt="Logo Aluno Online" className="logo-icon" />
        <h2>Aluno Online</h2>
      </header>
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Notas</a></li>
          <li><a href="#">Faltas</a></li>
          <li><a href="#">Boletos</a></li>
          <li><a href="#">Requerimentos</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;