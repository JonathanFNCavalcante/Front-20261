import './Sidebar.css';
import Menu from './Menu';
import learnIcon from '../assets/learn.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src={learnIcon} alt="Logo Aluno Online" className="logo-icon" />
        <h2>Aluno Online</h2>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;