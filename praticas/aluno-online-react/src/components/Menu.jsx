import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Menu.css";

function Menu() {
  const { logout } = useAuth(); // Importa a função logout

  return (
    <nav className="menu">
      <ul>
        <li><NavLink to="/" end>Dashboard</NavLink></li>
        <li><NavLink to="/notas">Notas</NavLink></li>
        <li><NavLink to="/faltas">Faltas</NavLink></li>
        <li><NavLink to="/boletos">Boletos</NavLink></li>
        <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
        <li>
          <button onClick={logout} className="menu-btn-sair">Sair</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;