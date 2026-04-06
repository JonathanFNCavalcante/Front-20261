import './Header.css';
import avatarIcon from '../assets/avatar.svg';

function Header() {
  return (
    <header className="header">
      <h1>Olá, Aluno!</h1>
      <img src={avatarIcon} alt="Avatar do Aluno" className="avatar-icon" />
    </header>
  );
}

export default Header;