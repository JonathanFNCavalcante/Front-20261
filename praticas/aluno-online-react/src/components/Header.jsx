import './Header.css';
import avatarIcon from '../assets/avatar.svg';

function Header() {
  return (
    <header className="header">
      <img src={avatarIcon} alt="Avatar do Aluno" className="avatar-icon" />
    </header>
  );
}

export default Header;